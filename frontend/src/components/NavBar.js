import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (<div>
        <Nav style={{marginBottom: '40px'}}>
            <Nav.Item className="m-2">
                    <NavLink to="/home" activeClassName="active" style={{textDecoration: 'none'}}>
                        Home
                    </NavLink>
            </Nav.Item>
            <Nav.Item className="m-2">
                    <NavLink to="/new" activeClassName="active" style={{textDecoration: 'none'}}> 
                        New Student
                    </NavLink>
            </Nav.Item>

        </Nav>
    </div>);
}

export default NavBar