import Component from "./component";

export default class Entity {
	constructor(public components: Component[]) {}

	update() {
		for(let i = 0; i<this.components.length; i++) {
			this.components[i].update();
		}
	}
}