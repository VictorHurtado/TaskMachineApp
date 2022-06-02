import { React, useState } from 'react';
import './taskmodal.css';

function TaskModal() {
    const [state, setState] = useState({ hidden: true });
    return (<div id="modal-component-container" className= {"modal-component-container"+state.hidden?"hidden":""}>
        <div className="modal-flex-container ">
            <div className="modal-bg-container "  >

            </div>
            <div className="modal-space-container " >

            </div>
            <div id="modal-container" className="modal-container ">
                <div className="modal-wrapper ">
                    <div className="modal-wrapper-flex ">
                        <div className="modal-icon">
                            <i className=" text-white {{message.icon}}"></i>

                        </div>
                        <div className="modal-content ">
                            <h3 id="headertag" className="headertag"
                            > Modal de Agregar </h3>
                            <div className="modal-text ">
                                <p id="content-p" className="content-p"> porfavor digite la tarea</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-actions">
                    <button className="modal-primary-button modal-button" onClick={()=>setState({hidden:true})}>Aceptar</button>
                    
                    <button className="modal-secondary-button modal-button">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export { TaskModal };