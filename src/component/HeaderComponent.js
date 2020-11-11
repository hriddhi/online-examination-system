import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import { Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import './css/HeaderComponent.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Timer from 'react-compound-timer';

class Header1 extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            testId: '32471898234',
            totalTime: 1800
        }
        this.startTimer = this.startTimer.bind(this);
    }    

    componentDidMount(){
        this.startTimer();
    }

    convertSecondToTime = () =>{
        var remainingtMin = this.state.totalTime / 60;
        var remainingSec = this.state.totalTime % 60;
        return {
            M : remainingtMin,
            S : remainingSec 
        }
    }

    countdown = () => {
        setInterval(() => {
            this.setState({totalTime: this.state.totalTime - 1})
        }, 1000) 
    }

    startTimer = () => {
        while(this.state.totalTime !== 0){
            this.countdown();
        }
    }

    render(){
        console.log('in header render');
        const value = 10;
        return(
            <div>
                <Navbar className="Exam-Header" fixed expand="md">
                    <NavbarBrand><h2 style={{color: '#262626'}}><Icon name="book"></Icon>Exam Portal</h2></NavbarBrand>
                        <Nav className="mr-auto" navbar>
                            <NavbarText style={{color: '#262626'}}><b>Test ID: </b>{this.state.testId}</NavbarText>
                            <div style={{height:45, width: 45}}>
                                <CircularProgressbar value={this.convertSecondToTime().S} maxValue={60} strockWidth={20} 
                                    text={this.convertSecondToTime().M} styles={buildStyles({textSize: 35})}/>
                            </div>
                            {/* <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem> */}
                        </Nav>
                        
                    
                </Navbar>
            </div>
        );
    }
}

export default Header1;