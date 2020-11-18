import React from 'react';
import {connect} from 'react-redux';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    InputGroup, InputGroupAddon, InputGroupText, Input
} from 'reactstrap';
import { stopTimer } from '../redux/ActionCreator'

const mapStateToProps = state => {
    return {
        test: state.test
    }
}

const mapDispatchToProps = dispatch => ({
    stopTimer: () => dispatch(stopTimer())
})

class Complete extends React.Component {

    componentDidMount(){
        this.props.stopTimer()
    }

    render(){
        if(this.props.test.testID === null)
            return(
                <h1>Error</h1>
            )
        else    
            return(
                <div className='d-flex' style={{height: 600}}>
                    <Card className='m-auto p-2 landingCard'>
                        <CardBody style={{width: 500}}>
                            <p>Thank you for taking the exam.</p>
                            <p>You can now close the window.</p>
                        </CardBody>
                    </Card>
                </div>
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Complete);