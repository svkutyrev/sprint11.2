import {api} from './class_Api';
import {CardList} from './class_CardList.js';
import {Popup, popup} from './class_Popup';

export class Card{
  constructor(name, link){
    this.name = name
    this.link = link
    this.cardElement = this.create();
    
    
    
    this.cardElement
      .querySelector('.place-card__like-icon')
      .addEventListener('click', this.like);
    this.cardElement
      .querySelector('.place-card__delete-icon')
      .addEventListener('click', api.deleteCard)      
    }
  
  create(){

    const placeCard = document.createElement('div');
    const placeCardImage = document.createElement('div');
    const placeCardDescription = document.createElement('div');
    const placeCardDeleteIcon = document.createElement('button');
    const placeCardName = document.createElement('h3');
    const placeCardLikeIcon = document.createElement('button');
    const placeCardlikeCount = document.createElement('p')

    placeCard.classList.add('place-card');
    placeCardImage.classList.add('place-card__image');
    placeCardImage.setAttribute('style', `background-image: url(${this.link})`)
    placeCardDescription.classList.add('place-card__description');
    placeCardDeleteIcon.classList.add('place-card__delete-icon');
    placeCardName.classList.add('place-card__name');
    placeCardLikeIcon.classList.add('place-card__like-icon');
    placeCardlikeCount.classList.add('place-card__like-count')
    placeCardName.textContent = this.name

    placeCard.appendChild(placeCardImage);
    placeCard.appendChild(placeCardDescription);
    placeCardImage.appendChild(placeCardDeleteIcon);
    placeCardDescription.appendChild(placeCardName);
    placeCardDescription.appendChild(placeCardLikeIcon);
    placeCardDescription.appendChild(placeCardlikeCount)   

    placeCardImage.addEventListener('click', function(){
      popup.open(event.target.className, event.target.style.backgroundImage.split(/"/i)[1])

    });
    

    return placeCard;
 }

  remove(event){
    event.stopPropagation();
    event.currentTarget.closest('.place-card').remove();
    removeEventListener('click', this.like);
    removeEventListener('click', this.remove);
    removeEventListener('click', function(){
      popup.open(event.target.className, event.target.style.backgroundImage.split(/"/i)[1])

    });

  };


  like(event){
    
    if(event.target.classList.contains('place-card__like-icon_liked')){
      let count = 0;
      count +=1;
      document.querySelector('.place-card__like-count').textContent = count;
    }
    else{
      document.querySelector('.place-card__like-count').textContent = 0;
    }
    event.target.classList.toggle('place-card__like-icon_liked')
  }
}

