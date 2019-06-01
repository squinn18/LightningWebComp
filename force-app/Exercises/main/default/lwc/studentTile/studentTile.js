/* eslint-disable no-alert */
import { LightningElement, api } from 'lwc';

export default class StudentTile extends LightningElement {

	@api student = {
		Name: 'Lakshmi Quinn',
		PhotoUrl: '/services/images/photo/003B0FakePictId',
	};

	@api selected = false;
	@api selectedStudentId = "";

	get tileSelected() {
		return (this.selectedStudentId===this.student.Id) ? "tile selected " : "tile";
    }

	// eslint-disable-next-line no-unused-vars
	studentClick(event){
		const selectedEvent = new CustomEvent('studentselected', {
			bubbles: true, composed: true,
			detail: { studentId: this.student.Id }
		});
		this.dispatchEvent(selectedEvent);
		}

}