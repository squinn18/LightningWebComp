
import { LightningElement, wire, track } from 'lwc';
import getStudents from '@salesforce/apex/StudentBrowser.getStudents';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';


export default class StudentBrowser extends LightningElement {
	@track selectedDeliveryId = "";
	@track selectedInstructorId = "";
	//@track studentList = [];
	@wire(getStudents, { instructorId: '$selectedInstructorId', courseDeliveryId: '$selectedDeliveryId' }) students;
	@wire(CurrentPageReference) pageRef;
	
	deliverySelected(event){
		this.selectedDeliveryId = event.detail.deliveryId;
		this.selectedInstructorId = event.detail.instructorId;
	}

	handleNotify(event){
		const studentId = event.detail.studentId;
		fireEvent(this.pageRef, 'studentChange', { studentId });
		}

}