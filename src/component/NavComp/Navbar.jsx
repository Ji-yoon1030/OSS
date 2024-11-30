import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import nav from './Nav.module.css';
import logo from '../../img/Logo_img.png';

function Navibar() {
  return (
    <>
      <Navbar className={nav.cont}>
        <Container className={nav.cont_logo}>
          <Navbar.Brand href="/main">
            <img className={nav.logo} src={logo} alt="logo" />
          </Navbar.Brand>
          <Nav className={nav.menu}>
            <Nav.Link href="/problem">오늘의 문제</Nav.Link>
            <Nav.Link href="/ideaton">아이디어톤</Nav.Link>
            <Nav.Link href="/mypage">마이페이지</Nav.Link>
            <Nav.Link href="/login">로그인</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navibar;
