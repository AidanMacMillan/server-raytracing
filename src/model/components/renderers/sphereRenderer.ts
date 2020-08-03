import Renderer, { HitRecord } from "../renderer";
import Vector3 from "../../vector3";
import Photon from "../../photon";
import Material from "../../material";

export default class SphereRenderer extends Renderer {
	constructor(public center: Vector3, public radius: number, material: Material) {
		super(material);
	}

	update() {}

	hit(ray: Photon, hitRecord: HitRecord) {
		
		var tMin = 0.001;
		var tMax = ray.length;

		var originCenter = ray.origin.subtract(this.center);
		var a = ray.direction.dot(ray.direction);
        var b = originCenter.dot(ray.direction);
		var c = originCenter.dot(originCenter) - (this.radius * this.radius);
		var discriminant = (b * b) - (a * c);

		if(discriminant > 0) {
			var root = Math.sqrt(discriminant);

			var temp = (-b - root) / a;
			if(temp < tMax && temp > tMin) {
				hitRecord.t = temp;
				hitRecord.point = ray.getPoint(hitRecord.t);
				hitRecord.normal = hitRecord.point.subtract(this.center).divide(this.radius);

				return true;
			}

			temp = (-b - root) / a;
			if(temp < tMax && temp > tMin) {
				hitRecord.t = temp;
				hitRecord.point = ray.getPoint(hitRecord.t);
				hitRecord.normal = hitRecord.point.subtract(this.center).divide(this.radius);

				return true;
			}
		}

		return false;
	}
}