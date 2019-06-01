import { LightningElement, wire, track } from 'lwc';
import { registerListener } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class StudentDetail extends LightningElement {
	@track studentId;
	@wire(CurrentPageReference) pageRef;
	@track fields = ['Name', 'Email', 'Phone', 'Description'];

	connectedCallback() {
		registerListener('studentChange', this.handleStudentChange,
		this);
		}

		handleStudentChange(event) {
			this.studentId = event.studentId;
			}
}