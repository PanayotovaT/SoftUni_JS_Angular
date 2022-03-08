// let isOpen: boolean;
// let list: number[] = [1, 2, 3];
// isOpen = true;
// console.log(isOpen);
var Person1 = /** @class */ (function () {
    function Person1(name, age) {
        this.name = name;
        this.age = age;
    }
    // getAge(): void {
    //     return void this.age;
    //     //void returns undefined. We put it when we don't want a funtion to return a result
    // }
    Person1.prototype.getAge = function () {
        return this.age;
    };
    Person1.prototype.setData = function (newData) {
        this.age = newData.newAge;
        // this.name =newData.newName;
    };
    return Person1;
}());
var alex1 = new Person1('Alex', 3);
alex1.setData({ newAge: 5, newName: 'Alexander' });
console.log(alex1);
function identify1(arg) {
    return arg;
}
var value1 = 1;
var test1 = identify1(value1);
