import Renderer, { HitRecord } from "../renderer";
import Vector3 from "../../vector3";
import LightRay from "../../lightRay";

class Sphere extends Renderer {
	constructor(public center: Vector3, public radius: number) {
		super();
	}

	hit(ray: LightRay, tMin: number, tMax: number, hitRecord: HitRecord) {
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