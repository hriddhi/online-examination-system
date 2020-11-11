import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    InputGroup, InputGroupAddon, InputGroupText, Input
  } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link, useParams, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchQuestion, addResponse, verifyTest } from '../redux/ActionCreator';

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
    verifyTest: (val) => dispatch(verifyTest(val))
})

class Landing extends React.Component {

    componentDidMount(){
        this.props.verifyTest(this.props.test_id)
    }

    onStartClick = () => {
        this.props.history.replace('/test');
    }

    render(){
        return (
            <div className='d-flex' style={{height: 600}}>
                <Card className='m-auto p-2'>
                    <CardBody style={{width: 500}}>
                        <CardTitle tag="h3">Card title</CardTitle>
                        Exam Name: NAME GOES HERE<br/>
                        Exam Duration: {this.props.test.time / 60} min<br/>
                        
                        Instructions:<br/>
                        1. Each question carry 1 marks.<br/>
                        2. You can switch between questions.<br/>
                        3. Switching Tabs is prohibited.<br/>
                        <div className='d-flex pt-4' >
                            <Button className='mx-auto' color='success' style={{borderRadius: 50}} onClick={()=> this.onStartClick()}>Start Exam</Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Landing));