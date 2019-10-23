

import * from './class_Api.js';
import{Card} from './src/class_Card.js';
import{CardList} from './src/class_CardList';
import {Popup} from './class_Popup';



const cardList = new CardList(document.querySelector('.places-list'));
const popup = new Popup();

const inputNameNew = document.querySelector('.popup__input_type_name-card');
const inputLinkNew = document.querySelector('.popup__input_type_link-url');
const noValidNameNew = document.querySelector('.valide_name-new');
const noValidLink = document.querySelector('.valide_link-new');
const noValidNameNewCount = document.querySelector('.valide_name__count-new');
const noValidLinkCount = document.querySelector('.valide_link__count-new');


// прослушка пропапов
//прослушка клика по кнопке добавления карточки
document.querySelector('.user-info__button').addEventListener('click', function(){
 popup.open(event.target.className);
}) 
document.querySelector('.user-info__edit').addEventListener('click', function(){
 popup.open(event.target.className);
});

document.querySelector('.popup_edit__close').addEventListener('click', function(){
 popup.close(event.target.className)
});

document.querySelector('.popup__close').addEventListener('click', function(){
 popup.close(event.target.className)
}) 

document.querySelector('.popup_image__close').addEventListener('click', function(){
 popup.close(event.target.className)
}) 


const editButton = document.querySelector('.popup_edit__button');
const editForm = document.forms.edit;
const form = document.forms.new;

//прослушка формы, определение полей формы
editForm.addEventListener('submit', function(event){
 
//Сабмит формы EDIT
  const editName = editForm.elements.name.value;
  const editJob = editForm.elements.job.value;

 if (noValidName.classList.contains('novalid')||noValidNameCount.classList.contains('novalid')|| editName.length==0 
   ||noValidJob.classList.contains('novalid')||noValidJobCount.classList.contains('novalid')|| editJob.length==0)  {
     event.preventDefault();
     
 }
 else{
   event.preventDefault();
   api.editProfile(editName, editJob);
   document.querySelector('.popup_edit').classList.toggle('popup_is-opened-edit');
 }
 
})

//Сабмит формы NEW
form.addEventListener('submit', function(event){
  const newLink = form.elements.link.value;
  const newName = form.elements.name.value;

 
 if (noValidLinkCount.classList.contains('novalid')|| noValidLink.classList.contains('novalid')||newLink.length==0||
   noValidNameNew.classList.contains('novalid')|| noValidNameNewCount.classList.contains('novalid')||newName.length==0) {

     event.preventDefault();
 }
 else{
   
   event.preventDefault();
   api.addImage(newName, newLink)

   document.querySelector('.popup').classList.toggle('popup_is-opened');
   form.reset();
 }

})
/* функиця заполнения полей в профиле */
 api.getProfile();

/* Функции добавления классов на кнопку при валидности */

/*Валидность формы Edit*/
//валидность поля Name
const validNameEdit = document.querySelector('.popup__input_type_name');
const noValidName = document.querySelector('.valide_name');
const noValidJob = document.querySelector('.valide_job');
const noValidNameCount = document.querySelector('.valide_name__count');
const noValidJobCount = document.querySelector('.valide_job__count');

validNameEdit.addEventListener('input', function(){

 validateTextInput(validNameEdit.value, noValidName,  noValidNameCount)
 
})
//валидность поля Job
const validJobEdit = document.querySelector('.popup__input_type_job');
validJobEdit.addEventListener('input', function(){

 validateTextInput(validJobEdit.value, noValidJob, noValidJobCount)
})
/*
function menagmentButtonEdit(){ 
 if(noValidName.classList.contains('novalid')||noValidNameCount.classList.contains('novalid')||
 noValidJob.classList.contains('novalid')||noValidJobCount.classList.contains('novalid')) {
   
   document.querySelector('.popup_edit__button').classList.remove('popup__button-activ');
   
 }
 else{
   document.querySelector('.popup_edit__button').classList.add('popup__button-activ');
 }
}
*/

/*Валидность формы NEW*/

//валидность поля Name
inputNameNew.addEventListener('input', function(){
 validateTextInput(inputNameNew.value, noValidNameNew, noValidNameNewCount)

})
//валидность поля Link

inputLinkNew.addEventListener('input', function(){
 menagmentButtonNew()
 if (event.target.value.length !== 0){
   
   
   if(form.elements.link.value.search(/^(http:\/\/|https:\/\/|ftp:\/\/|ftps:\/\/|www\.)([0-9]|[a-z]|[A-Z]|[.*]|[\-]|[\_])+(\.)+([a-z]|.*)/i) !== 0){
     noValidLinkCount.classList.add('novalid');
     noValidLink.classList.remove('novalid');
   }
   else{
     noValidLinkCount.classList.remove('novalid');
   }
 }
 else if (event.target.value.length == 0){
   noValidLink.classList.add('novalid');
   noValidLinkCount.classList.remove('novalid');
 }
 menagmentButtonNew()
})

function menagmentButtonEdit(){

 if(noValidName.classList.contains('novalid')||noValidNameCount.classList.contains('novalid')||editForm.elements.job.value.length==0||
 noValidJob.classList.contains('novalid')||noValidJobCount.classList.contains('novalid')||editForm.elements.name.value.length==0){
   
   document.querySelector('.popup_edit__button').classList.remove('popup__button-activ');
   
 }
 else{
   document.querySelector('.popup_edit__button').classList.add('popup__button-activ');
 }
}

function menagmentButtonNew(){

 if(noValidNameNew.classList.contains('novalid')||noValidNameNewCount.classList.contains('novalid')||form.elements.link.value.length == 0||
 noValidLink.classList.contains('novalid')||noValidLinkCount.classList.contains('novalid')||form.elements.name.value.length ==0){
   
   document.querySelector('.popup__button').classList.remove('popup__button-activ');
   
 }
 else{
   document.querySelector('.popup__button').classList.add('popup__button-activ');
 }
}

function updateCards(){

} 

updateCards();

function deleteValid(){
 noValidJob.classList.remove('novalid');
 noValidJobCount.classList.remove('novalid');
 noValidName.classList.remove('novalid');
 noValidNameCount.classList.remove('novalid');
 noValidNameNew.classList.remove('novalid');
 noValidNameNewCount.classList.remove('novalid');
 noValidLink.classList.remove('novalid');
 noValidLinkCount.classList.remove('novalid');
}

function validateTextInput(inputElement, errorElement1, errorElement2){

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
