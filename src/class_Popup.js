
import {api, Api, serverUrl, keyAuthorization} from './class_Api';
import {CardList} from './class_CardList';
import {Card} from './class_Card';
import {cardList, editForm, editButton, form} from './script';
import {menagmentButtonEdit, menagmentButtonNew, deleteValid, validateTextInput} from './functions.js'


export class Popup{
constructor(title, inputName, inputJob, inputUrl){
    this.title = title;
    this.inputName = inputName;
    this.inputJob = inputJob;
    this.inputUrl = inputUrl;

}

open(className, url){
    this.className = className;
    this.url = url;

    if(this.className == 'button user-info__button')
    {
    menagmentButtonNew();
    document.querySelector('.popup').classList.toggle('popup_is-opened');
    deleteValid();
    form.reset()
        
    }
    if (this.className == 'button user-info__edit'){
    editForm.elements.name.value = document.querySelector('.user-info__name').textContent;
    editForm.elements.job.value = document.querySelector('.user-info__job').textContent;
    
    menagmentButtonEdit();
    document.querySelector('.popup_edit').classList.toggle('popup_is-opened-edit');
    deleteValid();


    }
    if (this.className == 'place-card__image'){
    document.querySelector('.popup_image').classList.toggle('popup_is-opened-image')
    const imgForPopup = document.querySelector('.popup_image__content');
    const imgPopup = document.createElement('img')
    imgForPopup.appendChild(imgPopup).classList.add('popup_image__content-img');

    const popupCardImage = document.querySelector('.popup_image__content-img');
    popupCardImage.setAttribute('src', `${this.url}`)  
    }

}

close(className){
    this.className = className;

    if(this.className == 'popup__close')
    {
    document.querySelector('.popup').classList.remove('popup_is-opened');
        
    }
    if (this.className == 'popup_edit__close'){
    document.querySelector('.popup_edit').classList.toggle('popup_is-opened-edit');


    }
    if (this.className == 'popup_image__close'){
    document.querySelector('.popup_image').classList.remove('popup_is-opened-image');
    document.querySelector('.popup_image__content-img').remove();
    }
}
}

export const popup = new Popup();