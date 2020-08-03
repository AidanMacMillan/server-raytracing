import Light from "../light";
import Vector3 from "../../vector3";
import Photon from "../../photon";
import Color from "../../color";

export default class PointLight extends Light {
	constructor(public position: Vector3) {
		super();
	}

	emit() {
		return new Photon(this.position, Vector3.random(), Color.white, 1);
	}
}