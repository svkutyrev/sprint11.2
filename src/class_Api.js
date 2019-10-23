
import {CardList} from './class_CardList.js';
import {cardList} from './script';
import {Card} from './class_Card.js';

export const keyAuthorization = '7082a1a1-2508-4734-bf4b-c9df3d594659';


export const serverUrl = NODE_ENV === 'development' ? 'http://praktikum.tk/cohort3' : 'https://praktikum.tk/cohort3'
export class Api{
  constructor(options){
    this.options = options;
  }
  getInitialCards(){

    fetch(`${serverUrl}/cards`,{
      method:'GET',
      headers: {
        authorization: keyAuthorization
      }
  
    })
    
    .then(card => card.json())
    .then(cards => {cards.forEach(cardData => {
      cardList.addCard(cardData.name, cardData.link)
      
    })})
    .catch((err) => {
      console.log(err);
    });
  }

  getProfile(){
    fetch(`${serverUrl}/users/me`,{
      method:'GET',
      headers: {
        authorization: keyAuthorization}
    })
    .then(res => res.json())
    .then((result) => {
      document.querySelector('.user-info__name').textContent = result.name;
      document.querySelector('.user-info__job').textContent = result.about;
      document.querySelector('.user-info__photo').setAttribute('style', `background-image: url(${result.avatar})`)
    })
    .catch((err) => {
      console.log(err); 
    })
  }

  editProfile(name, adout){
    this.name = name;
    this.about = adout

    fetch(`${serverUrl}/users/me`,{
      method: 'PATCH',
      headers: {
          authorization: keyAuthorization,
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.name,
        about: this.about
      })
    })
    
    .then(res => res.json())
    .then(result => {
      document.querySelector('.user-info__name').textContent = result.name;
      document.querySelector('.user-info__job').textContent = result.about
    })
    .catch((err) => {
      console.log(err); 
    });

  }
  addImage(name, link){
     this.name = name;
    this.link = link;
    fetch(`${serverUrl}/cards`,{
      method:'POST',
      headers:{
        authorization:keyAuthorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.name,
        link: this.link,
        
      })
    })
    .then(res => res.json())
    .then((result) => {
      cardList.addCard(result.name, result.link)      
    })
    .catch((err) => {
      console.log(err); 
    });
  }

  deleteCard(event){
    
    console.log(event)
    fetch(`${serverUrl}/cards/`,{
      headers:{
        authorization:keyAuthorization,
        'Content-Type': 'application/json'
      }
    })
    .then(res => 
    {
      res.json()
    })
    .catch((err) => {
      console.log(err); 
    });
   
  }
}

export const api = new Api({
  baseUrl: `${serverUrl}/cards/`,
  headers: {
    authorization: keyAuthorization,
    'Content-Type': 'application/json'
  }
});
