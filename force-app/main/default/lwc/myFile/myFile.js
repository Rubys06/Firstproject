import { LightningElement,track } from 'lwc';


 
export default class MyFile extends LightningElement {
    dynamicGreeting= "world";
    greetingChangeHandler(event){ 
        this.dynamicGreeting = event.target.value;
}
}





