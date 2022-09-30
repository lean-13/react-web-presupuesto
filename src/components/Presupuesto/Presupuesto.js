import React from 'react'
import { Link } from "react-router-dom";
// scss
import './Presupuesto.scss';

function Presupuesto() {

    return (
        <div className='Presupuesto'>
            <div className='PresupuestoTitulo'>
                <h4>PRESUPUESTO</h4>
            </div>
            <div className='PresupuestoCreacion'>
                <div className='PresupuestoCreacionMateriales'>

                </div>
                <div className='PresupuestoCreacionTiempo'>

                </div>
            </div>
            <div className='PresupuestoFooter'>
                <div className='PresupuestoBotones'>

                </div>
                <div className='PresupuestoFinal'>

                </div>
            </div>
        </div>
    )
}

export default Presupuesto;