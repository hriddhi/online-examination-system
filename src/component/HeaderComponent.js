import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import { Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import './css/HeaderComponent.css';

class Header1 extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            testId: '32471898234'
        }
    }    

    render(){
        console.log('in header render');
        return(
            <div>
                <Navbar className="Exam-Header" fixed expand="md">
                    <NavbarBrand><h2 style={{color: '#262626'}}><Icon name="book"></Icon>Exam Portal</h2></NavbarBrand>
                        <Nav className="mr-auto" navbar>
                            <NavbarText style={{color: '#262626'}}><b>Test ID: </b>{this.state.testId}</NavbarText>
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