import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (<div>
        <Nav>
            <Nav.Item>
                <Nav.Link>
                    <NavLink to="/home" activeClassName="active" style={{textDecoration: 'none'}}>
                        Home
                    </NavLink>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <NavLink to="/new" activeClassName="active" style={{textDecoration: 'none'}}> 
                        New Student
                    </NavLink>
                </Nav.Link>
            </Nav.Item>

        </Nav>
    </div>);
}

export default NavBar