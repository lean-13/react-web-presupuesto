import React from 'react';

// scss
import './Calculadora.scss';

function Calculadora() {

    return (
        <div className='BackCalculadora'>
            <div className='TittleCalculadora'>
                <h4>CALCULADORA</h4>
            </div>
            <div className='Calculadora'>
                <div className='PantCalculadora'>
                    <p>Resultado...</p>
                </div>
                <div className='TeclaCalculadora'>
                    <div className='SeccionTeclaCalculadora'>
                        <button className='ButtonCalculadoraD ButtonCalculadoraColor' id='c'>C</button>
                        <button className='ButtonCalculadora ButtonCalculadoraColor' id='+'>+</button>
                        <button className='ButtonCalculadora ButtonCalculadoraColor' id='-'>-</button>
                    </div>
                    <div className='SeccionTeclaCalculadora'>
                        <button className='ButtonCalculadora ButtonCalculadoraColor' id='7'>7</button>
                        <button className='ButtonCalculadora ButtonCalculadoraColor' id='8'>8</button>
                        <button className='ButtonCalculadora ButtonCalculadoraColor' id='9'>9</button>
                        <button className='ButtonCalculadora ButtonCalculadoraColor' id='x'>X</button>
                    </div>
                    <div className='SeccionTeclaCalculadora'>
                        <button className='ButtonCalculadora ButtonCalculadoraColor' id='4'>4</button>
                        <button className='ButtonCalculadora ButtonCalculadoraColor' id='5'>5</button>
                        <button className='ButtonCalculadora ButtonCalculadoraColor' id='6'>6</button>
                        <button className='ButtonCalculadora ButtonCalculadoraColor'>/</button>
                    </div>
                    <div className='SeccionTeclaCalculadora'>
                        <button className='ButtonCalculadora ButtonCalculadoraColor' id='1'>1</button>
                        <button className='ButtonCalculadora ButtonCalculadoraColor' id='2'>2</button>
                        <button className='ButtonCalculadora ButtonCalculadoraColor' id='3'>3</button>
                        <button className='ButtonCalculadora ButtonCalculadoraColor' id='.'>.</button>
                    </div>
                    <div className='SeccionTeclaCalculadora'>   
                        <button className='ButtonCalculadoraD ButtonCalculadoraColor' id='0'>0</button>
                        <button className='ButtonCalculadoraD ButtonCalculadoraColor' id='='>=</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Calculadora;