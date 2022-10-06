import React from 'react'
import { Link } from "react-router-dom";
// scss
import './menu.scss'
// icons
import AddBoxIcon from '@mui/icons-material/AddBox';
import CalculateIcon from '@mui/icons-material/Calculate';
import ArchiveIcon from '@mui/icons-material/Archive';

function Menu() {

    return (

        <div className='MenuSection'>
            <Link as={Link} to="/presupuesto">
                <div className='MenuLink'>
                    <div className='DivIcon'>
                        <AddBoxIcon
                            className='Icon'
                            fontSize="large"
                        />
                    </div>
                    <div className='MenuText'>
                        <p>PRESUPUESTO</p>
                    </div>
                </div>
            </Link>
            <Link as={Link} to="/calculadora">
                <div className='MenuLink'>
                    <div className='DivIcon'>
                        <CalculateIcon
                            className='Icon'
                            fontSize="large"
                        />
                    </div>
                    <div className='MenuText'>
                        <p>CALCULADORA</p>
                    </div>
                </div>
            </Link>
            <Link as={Link} to="/historial">
                <div className='MenuLink'>
                    <div className='DivIcon'>
                        <ArchiveIcon
                            className='Icon'
                            fontSize="large"
                        />
                    </div>
                    <div className='MenuText'>
                        <p>HISTORIAL</p>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default Menu;