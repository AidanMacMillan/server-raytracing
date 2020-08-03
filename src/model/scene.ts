import Component from "./component";
import Photon from "./photon";
import Entity from "./entity";
import Light from "./components/light";
import Renderer, { HitRecord } from "./components/renderer";

export default class Scene {
	photons: Photon[] = [];
	entities: Entity[] = [];

	constructor() {}

	update() {
		for(let i = 0; i<this.entities.length; i++) {
			this.entities[i].update();
		}
	}

	//Emit 1000 photons from every light source in the scene
	bakePhotons() {
		for(let i = 0; i<this.entities.length; i++) {
			let entity = this.entities[i];
			for(let j = 0; j<entity.components.length; j++) {
				let component = entity.components[j];
				if(component instanceof Light) {
					for(let k = 0; k<1000; k++) {
						this.emit(component.emit(), 0);
					}
				}
			}
		}

	}

	emit(photon: Photon, depth: number) {
		this.photons.push(photon);

		for(let i = 0; i<this.entities.length; i++) {
			let entity = this.entities[i];
			for(let j = 0; j<entity.components.length; j++) {
				let component = entity.components[j];
				if(component instanceof Renderer) {
					var hitRecord = new HitRecord();

					if(component.hit(photon, hitRecord)) {

						if(depth < 50) {
							var photons = component.material.scatter(photon, hitRecord);
						
							for(let k = 0; k<photons.length; k++) {
								this.emit(photons[k], depth+1);
							}
						}
					}

				}
			}
		}

		

	}

	addEntity(entity: Entity) {
		this.entities.push(entity);
	}
}