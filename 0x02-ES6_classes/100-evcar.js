import Car from './10-car.js';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    const newCar = new Car();
    Object.assign(newCar, this);
    return newCar;
  }
}

export default EVCar;
