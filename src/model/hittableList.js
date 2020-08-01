import Hittable from "./hittable";

class HittableList extends Hittable {
	constructor(hittables) {
        super();
        this._list = hittables || [];
	}

	get size () {
        return this._list.length;
	}
	
	hit(ray, tMin, tMax, hitRecord) {
        var hit = false;
		var closestHit = tMax;
		
        for(var i = 0; i < this._list.length; i++) {
            if(this._list[i].hit(ray, tMin, closestHit, hitRecord)) {
                hit = true;
                closestHit = hitRecord.t;
            }
        }
        return hit;
    }
}