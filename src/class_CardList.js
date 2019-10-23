
import {Card} from './class_Card';
import {api} from './class_Api';
import {cardList} from './script';

export class CardList{
  constructor(containerDom, arrayCards){
    this.containerDom = containerDom;
    this.arrayCards = arrayCards;
    this.render();

  }

  addCard(name, link){
    const { cardElement } = new Card(name, link)
     this.containerDom.appendChild(cardElement);
  }

  render(){
    api.getInitialCards();
  }

}







