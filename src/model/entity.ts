import Component from "./component";
import Sphere from "./components/renderers/sphereRenderer";
import { threadId } from "worker_threads";

export default class Entity {
	constructor(public components: Component[]) {}

	update() {
		for(let i = 0; i<this.components.length; i++) {
			this.components[i].update();
		}
	}

	addComponent(component: Component) {
		this.components.push(component);
	}
}