import { LightningElement ,api} from 'lwc';

export default class EmployeeDetails extends LightningElement {

    @api empdata={empName:'ruby',empAddress:'kanpur'};
}