import Component from "../component";
import Photon from "../photon";

export default abstract class Light extends Component {
	contructor() {}

	update() {
		
	}

	abstract emit(): Photon
}