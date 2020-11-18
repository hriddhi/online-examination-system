import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardImg, Button, Spinner
  } from 'reactstrap';
import './css/question.css';
import { connect } from 'react-redux';
import { fetchQuestion, addResponse } from '../redux/ActionCreator';
import { BrowserRouter as Router, Switch, Route, Link, useParams, Redirect, withRouter } from "react-router-dom";

const mapStateToProps = state => {
    return {
        question: state.question,
        response: state.response,
        test: state.test
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchQuestion: (val) => dispatch(fetchQuestion(val)),
    addResponse: (val) => dispatch(addResponse(val))
})

class Question extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            current_q: 0,
            selected_o: null
        }
    }

    componentWillMount(){
        this.props.fetchQuestion(this.props.test.testID);
    }

    changeQuestion = (val) => {
        this.setState({ current_q: val, selected_o: null })
    }

    changeOption = (val) => {
        this.setState({ selected_o: val })
    }

    render(){
        if(this.props.question.err)
            return (
                <h1>ERROR 404: NOT FOUND</h1>
            )
        else if(this.props.question.question.length === 0 || this.props.question.isLoading)
            return (
                <div className="d-flex" style={{height: '90vh'}}>
                    <div className="m-auto">
                        <div className="d-flex">
                            <Spinner className='m-auto' color='secondary' />
                        </div>
                        <p className="text-center pt-2">Loading, please wait...</p>
                    </div>
                </div>
            )
        else return(
            <div>
                <div className="row">
                    <div class="col-11 align-self-end" style={{margin:0}}>
                        <div class="row justify-content-start ">    
                            <div class="col-7 question-col">
                                <Card className="question-card">
                                    <CardBody>
                                        <CardTitle style={{color:"#4389fa"}}>
                                            <b>Question {this.state.current_q + 1}</b>
                                        </CardTitle>
                                        <CardText>
                                            {this.props.question.question[this.state.current_q].q}
                                        </CardText>
                                        {this.props.question.question[this.state.current_q].q_image ? <CardImg className="Question-Image" bottom src={this.props.question.question[this.state.current_q].q_image} alt="Card image cap" /> : null} 
                                    </CardBody>
                                </Card>
                            </div>
                            <div class="col-5" style={{marginRight: 0, paddingLeft: 0, backgroundColor: '#ebebeb', height: '90vh', overflowY: 'auto'}}>
                                <Card className="answer-card">
                                    <CardBody>
                                        <CardTitle style={{color:"#4389fa"}}>
                                            <b>Options</b>
                                        </CardTitle>
                                        {
                                            this.props.question.question[this.state.current_q].o.map((val,i) => {
                                                if(this.state.selected_o === i)
                                                    return (
                                                        <div className="option-active" onClick={()=>this.changeOption(i)}>{val}</div>
                                                    )
                                                else if(i === this.props.response.response[this.state.current_q])
                                                    return (
                                                        <div className="option-submit" onClick={()=>this.changeOption(i)}>{val}</div>
                                                    )
                                                else
                                                    return (
                                                        <div className="option" onClick={()=>this.changeOption(i)}>{val}</div>
                                                    )
                                            })
                                        }

                                        {/* {
                                            this.state.question.OptionImage.map((val) => {
                                                return (
                                                    <div className="option">
                                                        <img className="Option-Image" src={val}/>
                                                    </div>
                                                )
                                            })
                                        } */}
                                        
                                        <div className="Submit-Button">
                                            {
                                                (() => {
                                                    if(this.props.response.isLoading)
                                                        return <Button disabled color="warning"><Spinner style={{marginTop: -2}} size="sm" color="white" /></Button>
                                                    else if(this.state.selected_o === null)
                                                        return <Button disabled color="warning">Submit</Button>
                                                    else if(this.state.selected_o === this.props.response.response[this.state.current_q])
                                                        return <Button disabled color="success">Submitted</Button>
                                                    else
                                                        return <Button color="warning" onClick={()=> this.props.addResponse({q: this.state.current_q, o: this.state.selected_o})}>Submit</Button>
                                                })() 
                                            }
                                        </div>
                                        <div className="Finish-Button">
                                            { this.state.current_q === this.props.question.question.length - 1 ? <Button color="success" onClick={()=>this.props.history.replace('/complete')}>Finish</Button> : null }
                                        </div>
                                    </CardBody>
                                </Card>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-1 pagination-holder" >
                        {
                            this.props.question.question.map((val,i) => {
                                if(this.props.response.response[i] !== undefined)
                                    return <div className='vertical-pagination-submit' onClick={()=> this.changeQuestion(i)}><p>{i + 1}</p></div>
                                else return (
                                    <div className={ this.state.current_q === i ? 'vertical-pagination-active' : 'vertical-pagination'} onClick={()=> this.changeQuestion(i)}><p>{i + 1}</p></div>
                                )
                            })
                        }
                        
                    </div>  
                </div>  
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Question));