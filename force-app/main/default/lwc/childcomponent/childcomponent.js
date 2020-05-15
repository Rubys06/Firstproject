import { LightningElement } from 'lwc';

export default class Childcomponent extends LightningElement {

    handelChange(event){

       const name= event.target.value;
       const selectEvent= new CustomEvent('mycustomevent',{detail:name});
       this.dispatchEvent(selectEvent);
    }
}