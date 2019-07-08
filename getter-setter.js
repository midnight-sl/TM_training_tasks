class AA {
  constructor() {
    this._b = 1;
    this._c = 2;
  }
  get value() {
    return this._b;
  }
  set value(number) {
    this._b = number
  }
}
  const number = new AA;
  number.value = 10;
  console.log(number.value, 'value');
