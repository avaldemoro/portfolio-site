import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FaHome, FaLaptopCode, FaRegAddressCard } from 'react-icons/fa';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    
    callAPI() {
        fetch("/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
    
    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <>
                <Navbar className="Navbar" variant="dark">
                    <Navbar.Brand className="NavbarLogo" href="#home">AV</Navbar.Brand>
                    <Nav className="NavbarItems">
                        <Nav.Link className="NavItem" href="#deets"><FaHome/></Nav.Link>
                        <Nav.Link className="NavItem" href="#deets"><FaLaptopCode/></Nav.Link>
                        <Nav.Link className="NavItem" eventKey={3} href="#memes"><FaRegAddressCard/></Nav.Link>
                    </Nav>
                </Navbar>
                <Container>
                    <div>
                        <p className="App-intro">{this.state.apiResponse}</p>
                    </div>
                </Container>
            </>
        );
    }   
}

export default App;
