import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import nav from "../NavComp/Navbar.module.css";
import logo from "../../img/Logo_img.png";

function BasicExample() {
  return (
    <Navbar expand="lg" className={nav.bg}>
      <Container className={nav.container}>
        <Navbar.Brand href="/main">
          <img className={nav.logo} src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={nav.menu}>
          <Nav className="d-flex justify-content-center w-100" id={nav.comp}>
            <NavDropdown
              className={nav.text}
              title={<span className={nav.custom_title}>오늘의 문제</span>}
              id="nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">문제 풀기</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">투표하기</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                오늘의 Best Coder
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className={nav.text} href="/ideaton">
              추천문제
            </Nav.Link>
            <Nav.Link className={nav.text} href="/mypage">
              마이페이지
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
