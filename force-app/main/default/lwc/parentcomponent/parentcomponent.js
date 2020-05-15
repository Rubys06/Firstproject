import { LightningElement ,track} from 'lwc';

export default class Parentcomponent extends LightningElement {
@track msg;
handelcustomevent(event){
    this.msg=event.detail;
}
     


}