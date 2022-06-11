import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"


function HeadNavbar(){
    return(
        <header>
            <Navbar style={{ backgroundColor:"#DEB6AB" }} expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Liste Course Projet</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Ma liste</Nav.Link>
                        <Nav.Link href="#link">Fruits de saison</Nav.Link>
                        <Nav.Link href="#link2">Profil</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default HeadNavbar