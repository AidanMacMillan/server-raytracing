import Ray from "./ray";
import Color from "./color";
import Vector3 from "./vector3";

export default class LightRay extends Ray {
	public length = Infinity;

	constructor(public origin: Vector3, public direction: Vector3, public color: Color) {
		super(origin, direction);
	}
}