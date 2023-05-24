const myName = 'Rod';
const myAge = 20;
const sum = (a: number, b: number) => {
  return a + b;
};
sum(12, 14);

class Person {
  constructor(private age: number, private _name: string) {}

  public getSummary() {
    return `Hello, ${this._name}, ${this.age}`;
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
const person = new Person(myAge, myName);
console.log(person.getSummary());
console.log(person.name);
person.name = 'Rodd';
console.log(person.name);
