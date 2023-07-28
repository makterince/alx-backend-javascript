const cloneData = Symbol('cloneData');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this[cloneData] = {};
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    const newCar = new this.constructor();
    Object.assign(newCar[cloneData], this);
    return newCar;
  }
}

export default Car;
