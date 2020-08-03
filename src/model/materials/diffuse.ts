import Material from "../material";
import Photon from "../photon";
import { HitRecord } from "../components/renderer";

export default class Diffuse extends Material {
	scatter(photon: Photon, hitRecord: HitRecord) {
		return [];
	} 
}