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
                    <p>MATERIALES</p>
                    <div className='ListadoMateriales'>
                        <div className='AgregarMaterial'>
                            <div>
                                <label for="material">MATERIAL</label>
	                            <input type="text" name="material" id="material" placeholder="MATERIAL"/>
                            </div>
                            <div>
                                <label for="material">PRECIO</label>
	                            <input type="text" name="precio" id="precio" placeholder="PRECIO"/>
                            </div>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className='PresupuestoCreacionTiempo'>
                    <p>TIEMPO ESTIMADO</p>
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