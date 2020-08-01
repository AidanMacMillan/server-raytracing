import Vector3 from "../vector3";
import Ray from "../ray";
import LightRay from "../lightRay";

export default abstract class Renderer {
	abstract hit(ray: LightRay, tMin: number, tMax: number, hitRecord: HitRecord): boolean
}

export class HitRecord {
	point = Vector3.zero();
	normal = Vector3.zero();
	t = 0;

	constructor() {}
}