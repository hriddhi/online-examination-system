import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardImg, Button
  } from 'reactstrap';
import './css/question.css';
import { connect } from 'react-redux';
import { fetchQuestion } from '../redux/ActionCreator';

const mapStateToProps = state => {
    return {
        question: state.question
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchQuestion: () => dispatch(fetchQuestion())
})

class Question extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            testId: '32471898234',
           question: {
                id: '7543266',
                number: 1,
                question: "This is a question. This is a question. This is a question. This is a question. This is a question. This is a question. This is a question. This is a question. This is a question. ",
                option: ['Option 1', 'Option 1', 'Option 1', 'Option 1', 'Option 1', 'Option 1', 'Option 1', 'Option 1', 'Option 1'],
                OptionImage: ['https://www.360entranceexam.in/wp-content/uploads/2017/08/directions2-300x155.png','https://www.360entranceexam.in/wp-content/uploads/2017/08/directions2-300x155.png','https://www.360entranceexam.in/wp-content/uploads/2017/08/directions2-300x155.png','https://www.360entranceexam.in/wp-content/uploads/2017/08/directions2-300x155.png','https://www.360entranceexam.in/wp-content/uploads/2017/08/directions2-300x155.png']
            }
        }
    }
    render(){
        this.props.fetchQuestion();
        return(
            <div>
                <div className="row">
                    <div class="col-11 align-self-end" style={{margin:0}}>
                        <div class="row justify-content-start ">    
                            <div class="col-7 question-col">
                                <Card className="question-card">
                                    <CardBody>
                                        <CardTitle style={{color:"#4389fa"}}>
                                            <b>Question {this.state.question.number}</b>
                                        </CardTitle>
                                        <CardText>
                                            {this.state.question.question}
                                        </CardText>
                                        <CardImg className="Question-Image" bottom src="https://mba.hitbullseye.com/sites/default/files/mobilecommonImages/Direction-Based-Question-Level-13.jpg" alt="Card image cap" />
                                    </CardBody>
                                </Card>
                                <div>

                                </div>
                                
                            </div>
                            <div class="col-5" style={{marginRight: 0, paddingLeft: 0, backgroundColor: '#ebebeb', height: '90vh', overflowY: 'scroll'}}>
                                <Card className="answer-card">
                                    <CardBody>
                                        <CardTitle style={{color:"#4389fa"}}>
                                            <b>Options</b>
                                        </CardTitle>
                                        {/* {
                                            this.state.question.option.map((val) => {
                                                return (
                                                    <div className="option">{val}</div>
                                                )
                                            })
                                        } */}

                                        {
                                            this.state.question.OptionImage.map((val) => {
                                                return (
                                                    <div className="option">
                                                        <img className="Option-Image" src={val}/>
                                                    </div>
                                                )
                                            })
                                        }
                                        
                                        <div className="Submit-Button">
                                            <Button color="success">Submit</Button>
                                        </div>
                                    </CardBody>
                                </Card>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-1 pagination-holder" >
                        <div className='vertical-pagination'><p>1</p></div>
                        <div className='vertical-pagination'><p>1</p></div>
                        <div className='vertical-pagination'><p>1</p></div>
                        <div className='vertical-pagination'><p>1</p></div>
                        <div className='vertical-pagination'><p>1</p></div>
                        <div className='vertical-pagination'><p>1</p></div>
                        <div className='vertical-pagination'><p>1</p></div>
                        <div className='vertical-pagination'><p>1</p></div>
                        <div className='vertical-pagination'><p>1</p></div>
                        <div className='vertical-pagination'><p>1</p></div>
                        <div className='vertical-pagination'><p>1</p></div>
                        <div className='vertical-pagination'><p>1</p></div>
                        <div className='vertical-pagination'><p>1</p></div>
                        <div className='vertical-pagination'><p>1</p></div>
                        
                    </div>  
                </div>  
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);