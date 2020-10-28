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
                    <NavbarBrand href="/"><h2><Icon name="book"></Icon>Exam Portal</h2></NavbarBrand>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Username</NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem> */}
                        </Nav>
                        <NavbarText><b>Test ID: {this.state.testId}</b></NavbarText>
                    
                </Navbar>
            </div>
        );
    }
}

export default Header1;