


import {
    inputLinkNew, 
    inputNameNew, 
    inputElement, 
    noValidName,
    noValidNameNew, 
    noValidNameCount, 
    noValidNameNewCount,
    form,
    editForm,
    noValidJob,
    noValidJobCount,
    noValidLinkCount,
    noValidLink,
    validNameEdit,
    
} from './script.js';

export function menagmentButtonEdit(){
 
    if(noValidName.classList.contains('novalid')||noValidNameCount.classList.contains('novalid')||editForm.elements.job.value.length==0||
    noValidJob.classList.contains('novalid')||noValidJobCount.classList.contains('novalid')||editForm.elements.name.value.length==0){
      
      document.querySelector('.popup_edit__button').classList.remove('popup__button-activ');
      
    }
    else{
      document.querySelector('.popup_edit__button').classList.add('popup__button-activ');
    }
  }
  
  export function menagmentButtonNew(){
   
    if(noValidNameNew.classList.contains('novalid')||noValidNameNewCount.classList.contains('novalid')||form.elements.link.value.length == 0||
    noValidLink.classList.contains('novalid')||noValidLinkCount.classList.contains('novalid')||form.elements.name.value.length ==0){
      
      document.querySelector('.popup__button').classList.remove('popup__button-activ');
      
    }
    else{
      document.querySelector('.popup__button').classList.add('popup__button-activ');
    }
  }
  
  export function deleteValid(){
    noValidJob.classList.remove('novalid');
    noValidJobCount.classList.remove('novalid');
    noValidName.classList.remove('novalid');
    noValidNameCount.classList.remove('novalid');
    noValidNameNew.classList.remove('novalid');
    noValidNameNewCount.classList.remove('novalid');
    noValidLink.classList.remove('novalid');
    noValidLinkCount.classList.remove('novalid');
  }
  
  export function validateTextInput(inputElement, errorElement1, errorElement2){
  
    if (inputElement.length !== 0){
        
      if(inputElement.length < 2 || inputElement.length > 30){
        errorElement2.classList.add('novalid');
        errorElement1.classList.remove('novalid');
      }
      else{
        errorElement2.classList.remove('novalid');
      }
    }
    else if (event.target.value.length == 0){
      errorElement1.classList.add('novalid');
      errorElement2.classList.remove('novalid');
    }
    menagmentButtonEdit()
  }
  