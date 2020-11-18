import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import { Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import './css/HeaderComponent.css';
import { BrowserRouter as Router, Switch, Route, Link, useParams, Redirect, withRouter } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { connect } from 'react-redux';
import { fetchQuestion, addResponse, verifyTest, testcomplete } from '../redux/ActionCreator';

const mapStateToProps = state => {
    return {
        question: state.question,
        response: state.response,
        test: state.test
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchQuestion: () => dispatch(fetchQuestion()),
    addResponse: (val) => dispatch(addResponse(val)),
    verifyTest: (val) => dispatch(verifyTest(val)),
    testcomplete: () => dispatch(testcomplete())
})

class Header1 extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            totalTime: null,
            showTimer: false
        }
    }

    convertSecondToTime = () => {
        let divisor_for_minutes = this.state.totalTime % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
        
        return {
            M : minutes,
            S : seconds 
        }
    }

    startTimer = () => {
        this.setState({ totalTime: this.props.test.time, showTimer: true })
        var timer = setInterval(() => {
            this.setState({totalTime: this.state.totalTime - 1})
            if (this.state.totalTime <= 0) {
                console.log('\ncomplete\n');
                clearInterval(timer);
                this.props.history.replace('/complete');
                this.setState({showTimer: false})
                return (
                    this.props.testcomplete
                )
            }
        }, 1000);
    }

   

    render(){
        if(this.props.test.started && !this.state.showTimer)
            this.startTimer();
        
        return(
            <div>
                <Navbar className="Exam-Header" fixed expand="md">
                    <NavbarBrand><h2 style={{color: '#262626'}}><Icon name="book"></Icon>Exam Portal</h2></NavbarBrand>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavbarText style={{color: '#262626'}}><b>Test ID: </b>{this.props.test.testID}</NavbarText>
                            </NavItem>
                            
                            {/* <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem> */}
                        </Nav>
                        <div className={this.state.showTimer ? 'ml-auto' : 'ml-auto d-none'} style={{height:40, width: 40}}>
                                <CircularProgressbar value={this.convertSecondToTime().S} maxValue={60} strokeWidth={12}
                                    text={this.convertSecondToTime().M} styles={buildStyles({textSize: '28px'})}/>
                        </div>
                        
                    
                </Navbar>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header1));