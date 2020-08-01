import Component from "./component";

export default class Scene {
	lightRays = [];
	entities: Component[] = [];

	constructor() {}

	update() {
		for(let i = 0; i<this.entities.length; i++) {
			this.entities[i].update();
		}
	}
}