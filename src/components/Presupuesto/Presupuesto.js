import React from 'react'
import { Link } from "react-router-dom";
// scss
import './Presupuesto.scss';
// icon
import AddIcon from '@mui/icons-material/Add';
function Presupuesto() {

    return (
        <div className='Presupuesto'>
            <div className='PresupuestoTitulo'>
                <h4>PRESUPUESTO</h4>
            </div>
            <div className='PresupuestoCreacion'>
                <div className='PresupuestoCreacionMateriales'>
                    <p>MATERIALES</p>
                    <div className='AddListadoMateriales'>
                        <div>
                            <form className='AgregarMaterial'>
                                <div className='AddMaterial'>
                                    <input type="text" id='material' placeholder=" Agregar Material..."/>
                                </div>
                                <div className='AddPrecio'>
                                    <input type="text" id='material' placeholder=" Precio..."/>
                                </div>
                                <button className='ButtonAdd' id='AddListado'>
                                    <AddIcon
                                        className='AddIcon'
                                    />
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className='ListadoMateriales'>

                    </div>
                    <div className='TextPresupuestoVacio'>
                        <p>Su presupuesto se encuentra vacio</p>
                    </div>
                </div>
                <div className='PresupuestoCreacionTiempo'>
                    <p>TIEMPO ESTIMADO</p>
                    <div className='ListadoMateriales'>
                        <div>
                            <form>
                                <div className='AddTiempoTotal'>
                                    <input type="text" id='tiempoTotal' placeholder="Tiempo total..."/>
                                </div>
                                <div className='AddTiempoHoras'>
                                    <input type="text" id='tiempoHoras' placeholder="horas..."/>
                                </div>
                                <button className='ButtonAdd' id='AddTiempo'>
                                    <AddIcon
                                        className='AddIcon'
                                    />
                                </button>
                            </form>
                        </div>
                    </div>
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