import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    InputGroup, InputGroupAddon, InputGroupText, Input
  } from 'reactstrap';

class Login extends React.Component {

    render(){
        return (
            <div className='d-flex' style={{height: 600}}>
                <Card className='m-auto p-2'>
                    <CardBody style={{width: 500}}>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <InputGroup className='my-2'>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>@</InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="User ID" />
                        </InputGroup>
                        <InputGroup className='my-2'>
                            <Input type="password" placeholder="Password" />
                        </InputGroup>
                        <Button>Log In</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Login;