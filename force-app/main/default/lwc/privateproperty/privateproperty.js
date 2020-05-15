import { LightningElement,track } from 'lwc';

export default class Privateproperty extends LightningElement {

    @track reactiveprivateproperty;
    nonreactiveprivateproperty;

    changeHandler(event){
        this.reactiveprivateproperty=event.target.value;

    }
    changeHandler_1(event){

        this.nonreactiveprivateproperty=event.target.value;

    }




}