import { LightningElement, api} from 'lwc';

export default class StudentTile extends LightningElement {
	
	@api student = {
		Name: 'Lakshmi Quinn',
		PhotoUrl: '/services/images/photo/003B0FakePictId',
		};

	@api student1 = {
			Name: 'Shreya Quinn',
			PhotoUrl: '/services/images/photo/003B0FakePictId',
			};

   @api selected = false;

	get tileSelected() {
		return this.selected ? "tile selected " : "tile";
		}

	}