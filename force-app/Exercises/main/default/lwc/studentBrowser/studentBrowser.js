
import { LightningElement, wire } from 'lwc';
import getStudents from '@salesforce/apex/StudentBrowser.getStudents';



export default class StudentBrowser extends LightningElement {

	//@track studentList = [];
	@wire(getStudents, { instructorId: "", courseDeliveryId: ""}) students;

	

}