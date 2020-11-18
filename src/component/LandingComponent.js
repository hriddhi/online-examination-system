import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    InputGroup, InputGroupAddon, InputGroupText, Input
  } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link, useParams, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchQuestion, addResponse, verifyTest } from '../redux/ActionCreator';
import './css/LandingComponent.css';
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
        if(this.props.test.err)
            return (
                <h1>Exam not found</h1>
            )
        else
        return (
            <div className='d-flex' style={{height: 600}}>
                <Card className='m-auto p-2 landingCard'>
                    <CardBody style={{width: 500}}>
                        <CardTitle className="LandingHeader" tag="h2">Instructions</CardTitle>
                        <span className="LandingInstructions" >Exam Name:</span> NAME GOES HERE<br/>
                        <span className="LandingInstructions" >Exam Duration:</span> <span style={{color: 'red'}}><strong>{this.props.test.time / 60} min</strong></span><br/><br/>
                        
                        <span className="LandingInstructions" ><strong><h3>Instructions:</h3></strong></span><br/>
                        <strong>1.</strong> Each question carry 1 marks.<br/>
                        <strong>2.</strong> You can switch between questions.<br/>
                        <strong>3.</strong> Switching Tabs is prohibited.<br/>
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