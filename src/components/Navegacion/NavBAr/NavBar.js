import React from 'react'
import { Link } from "react-router-dom";
import {Navbar, Container} from "react-bootstrap" 
// icons
import AppsIcon from '@mui/icons-material/Apps';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CalculateIcon from '@mui/icons-material/Calculate';
import ArchiveIcon from '@mui/icons-material/Archive';
// scss
import "./NavBar.scss"

function NavBar() {

    return (
        <>
        <Navbar className='nav__bar--modificacion nav__bar--size nav__bar--color'>
          <Container>
            <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
              <div className="nav__bar__secciones">
                <Link as={Link} to="/react-web-presupuesto">
                  <div className='divIconNavbar'>
                      <AppsIcon
                      className='iconNavbar'
                      />
                  </div>
                </Link>
                <Link as={Link} to="/presupuesto">
                  <div className='divIconNavbar'> 
                    <AddBoxIcon
                      className='iconNavbar'
                    />
                  </div>
                </Link>
                <Link as={Link} to="/calculadora">
                <div className='divIconNavbar'>
                    <CalculateIcon
                    className='iconNavbar'
                    />
                  </div>
                </Link>
                <Link as={Link} to="/historial">
                  <div className='divIconNavbar'>                  
                    <ArchiveIcon
                      className='iconNavbar'
                    />
                  </div>
                  </Link>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
}
export default NavBar