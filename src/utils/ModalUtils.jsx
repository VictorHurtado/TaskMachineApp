const closeButton = document.querySelector('#close-modal');
const openButton = document.querySelector('#saveButtonID');
const modalContainer = document.querySelector('#modal-component-container');

const modal = document.querySelector('#modal-container');



openButton.addEventListener("click", ()=>{
    openModal();
});
closeButton.addEventListener("click", ()=>{
    closeModal();
});

function openModal(){
    showAndHidde(modalContainer, ['block', 'bg-fadeIn'],['hidden','bg-fadeOut']);
    showAndHidde(modal,['bg-scaleIn'],['bg-scaleOut']);
}

function closeModal(){
    showAndHidde(modalContainer, ['bg-fadeOut'],['bg-fadeIn']);
    showAndHidde(modal,['bg-scaleOut'],['bg-scaleIn']);
    setTimeout(()=>{
        showAndHidde(modalContainer,['hidden'],['block']);
    },250);
}

function showAndHidde(element,classToAdd, classToRemove){

    element.classList.remove(...classToRemove);
    element.classList.add(...classToAdd);

}
export {openModal, closeModal,showAndHidde };