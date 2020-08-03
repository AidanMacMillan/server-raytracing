import Scene from "../model/scene";
import Entity from "../model/entity";
import PointLight from "../model/components/lights/pointLight";
import SphereRenderer from "../model/components/renderers/sphereRenderer";
import Vector3 from "../model/vector3";
import Diffuse from "../model/materials/diffuse";

var main = new Scene();

main.addEntity(new Entity([new PointLight(new Vector3(0,0,2))]));
main.addEntity(new Entity([new SphereRenderer(new Vector3(0,0,0), 1, new Diffuse())]));

main.bakePhotons();

