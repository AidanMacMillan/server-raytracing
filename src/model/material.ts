import Photon from "./photon";
import { HitRecord } from "./components/renderer";

export default abstract class Material {
	abstract scatter(photon: Photon, hitRecord: HitRecord): Photon[]
}