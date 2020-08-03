import Vector3 from "../vector3";
import Ray from "../ray";
import LightRay from "../photon";
import Component from "../component";
import Material from "../material";

export default abstract class Renderer extends Component {
	constructor(public material: Material) {
		super();
	}

	abstract hit(ray: LightRay, hitRecord: HitRecord): boolean
}

export class HitRecord {
	point = Vector3.zero();
	normal = Vector3.zero();
	t = 0;

	constructor() {}
}