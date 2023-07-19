import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavigationBar from 'react-bootstrap/Navbar';

export const Navbar = () => {
    return (
        <NavigationBar expand="lg" className="bg-body-tertiary" fixed="top">
            <Container className='justify-content-between ps-3' style={{ maxWidth: '48.125rem' }}>
                <NavigationBar.Brand href="/" className='fs-6 fw-bold'>
                    Bible Study Eaglekidz
                </NavigationBar.Brand>
                <NavigationBar.Toggle aria-controls="basic-navbar-nav" />
                <NavigationBar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/' className='nav-link'>Registrasi</Link>
                        <Link to='/transaction' className='nav-link'>Riwayat Transaksi</Link>
                    </Nav>
                </NavigationBar.Collapse>
            </Container>
        </NavigationBar>
    )
}