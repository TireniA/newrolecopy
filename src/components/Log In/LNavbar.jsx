import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/logo.png'
import './Login.css'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function LNavbar() {
    const {setStatus } = useContext(AuthContext)
    return (
        <Navbar expand="sm" className="signout">
            <Container>
                <Navbar.Brand href="#">
                    <div className="d-flex align-items-center gap-2 justify-content-center img">
                        <img src={logo} alt="" className="img-fluid" />
                        <span>Nextrole</span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">
                            <div className="d-flex align-items-center gap-2 justify-content-center img">
                                <img src={logo} alt="" className="img-fluid" />
                                <span>Nextrole</span>
                            </div>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-center logmenu flex-grow-1 pe-3">
                            <Nav.Link href="#action1">Features</Nav.Link>
                            <Nav.Link href="#action2">Pricing</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                        </Nav>
                        <Form className="d-flex logbuttons gap-3">
                            <Button onClick={() => setStatus('login')}>Log In</Button>
                            <Button onClick={() => setStatus('signup')}>Sign Up</Button>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default LNavbar;

