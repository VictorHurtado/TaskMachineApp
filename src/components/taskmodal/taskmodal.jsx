import { React, useEffect, useContext, useState } from 'react';
import TodoContext from "../../context/Todo/TodoContext";

import IconoirCancel from '~icons/iconoir/cancel';
import '../../public/css/taskmodal.css';

function TaskModal() {
    const [state, setState] = useState({textVal: ''})
    const { openModal, setOpenModal,setTodos } = useContext(TodoContext);
    useEffect(() => { }, [openModal])

    function handleChange (evt) {

        setState({ textVal: evt.target.value });
   
      }
    function _handleCaptureInputValue(){
        setTodos({ "text": state.textVal, "completed": false });
        setState({ textVal: ""});

        setOpenModal(false);
    }

    return (<div id="modal-component-container" className={openModal ? "modal-component-container " : "modal-component-container hidden"}>
        <div className="modal-flex-container ">
            <div className="modal-bg-container "  >

            </div>
            <div className="modal-space-container " >

            </div>
            <div id="modal-container" className="modal-container ">
                <div className="modal-wrapper ">
                    <div className="modal-wrapper-flex ">

                        <div className="modal-content ">
                            <div className='modal-title-container'>
                                <h3 id="headertag" className="headertag"
                                >Nueva tarea</h3>
                                <IconoirCancel className="ViewIcon" onClick={() => setOpenModal(false)} />
                            </div>
                            <div className="modal-text ">
                                <p id="" className="content-p"> Descripción de la tarea</p>
                                <textarea name="task-description" id="" cols="30" rows="10" className='task-description' value={state.textVal} onChange={(e)=> handleChange(e)}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-actions">
                    <button className="modal-primary-button modal-button" onClick={()=>_handleCaptureInputValue()}>Aceptar</button>

                    {/* <button className="modal-secondary-button modal-button"  onClick={() => setOpenModal(false)}>Cancelar</button> */}
                </div>
            </div>
        </div>
    </div>
    );
}

export { TaskModal };