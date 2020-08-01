export default class Vector3 {
	constructor(public x: number, public y: number, public z: number) {}

	static zero() {
		return new Vector3(0,0,0);
	}

	add(vector: Vector3) {
		return new Vector3(this.x + vector.x, this.y + vector.y, this.z + vector.z);
	}

	subtract(vector: Vector3) {
		return new Vector3(this.x - vector.x, this.y - vector.y, this.z - vector.z);
	}

	multiply(c: number) {
		return new Vector3(this.x * c, this.y * c, this.z * c);
	}

	divide(c: number) {
		return new Vector3(this.x / c, this.y / c, this.z / c);
	}

	unit() {
		return this.divide(this.length());
	}

	dot(vector: Vector3) {
        return (this.x * vector.x) + (this.y * vector.y) + (this.z * vector.z);
    }

    cross(vector: Vector3) {
		return new Vector3(this.y * vector.z - this.z * vector.y,
							this.z * vector.x - this.x * vector.z,
							this.x * vector.y - this.y * vector.x);
	}
	
	length() {
        return Math.sqrt(this.squaredLength());
	}
	
	squaredLength() {
        return (this.x * this.x) + (this.y * this.y) + (this.z * this.z);
    }
}