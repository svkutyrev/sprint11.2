
import './style.css';

import {keyAuthorization, serverUrl, Api, api} from './class_Api';
import {Card} from './class_Card';
import {CardList} from './class_CardList';
import {Popup, popup} from './class_Popup.js';
import {menagmentButtonEdit, menagmentButtonNew, deleteValid, validateTextInput} from './functions.js'


export const cardList = new CardList(document.querySelector('.places-list'));


export const inputNameNew = document.querySelector('.popup__input_type_name-card');
export const inputLinkNew = document.querySelector('.popup__input_type_link-url');
export const noValidNameNew = document.querySelector('.valide_name-new');
export const noValidLink = document.querySelector('.valide_link-new');
export const noValidNameNewCount = document.querySelector('.valide_name__count-new');
export const noValidLinkCount = document.querySelector('.valide_link__count-new');


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


export const editButton = document.querySelector('.popup_edit__button');
export const editForm = document.forms.edit;
export const form = document.forms.new;

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
export const validNameEdit = document.querySelector('.popup__input_type_name');
export const noValidName = document.querySelector('.valide_name');
export const noValidJob = document.querySelector('.valide_job');
export const noValidNameCount = document.querySelector('.valide_name__count');
export const noValidJobCount = document.querySelector('.valide_job__count');

validNameEdit.addEventListener('input', function(){

  validateTextInput(validNameEdit.value, noValidName,  noValidNameCount)
  
})
//валидность поля Job
 const validJobEdit = document.querySelector('.popup__input_type_job');
validJobEdit.addEventListener('input', function(){

  validateTextInput(validJobEdit.value, noValidJob, noValidJobCount)
})

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




































/*
  Отлично, обязательные правки сделаны.

  Рекомендую всеже доделать и места где можно сделать лучше, а так же не обязательную 
  часть задания. Это поможет закрепить полученные знания на практике.

  Если у Вас будет свободное время попробуйте переписать работу с сервером
  применив async/await для работы с асинхронными запросами.
  https://learn.javascript.ru/async-await
  https://habr.com/ru/company/ruvds/blog/414373/
  Async/await часто используется на реальных проектах

*/















/*
  Большая часть обязательного задания выполнена, но нужно исправить:
  - добавить обработку ошибок при обмене с сервером         //готово
  - делать запрос карточек с сервера только один раз        //готово

  Места где можно сделать лучше:
  - в методах класса Api адрес сервера брать из настроек передаваемых в конструктор 
  - вынести из класса Api всю работу со страницей и DOM оставив только запросы на сервер
  - убрать ошибку при добавлении карточки                   //готово
*/