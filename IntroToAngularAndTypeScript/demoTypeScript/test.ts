// let isOpen: boolean;

// let list: number[] = [1, 2, 3];

// isOpen = true;
// console.log(isOpen);

class Person {
    constructor(
        public name: string, 
        protected age: number,
        // public age: number,
        // protected gender: string,
        ) {}
    // getAge(): void {
    //     return void this.age;
    //     //void returns undefined. We put it when we don't want a funtion to return a result
    // }
    getAge() {
        return this.age;
    }

    setData(newData: { newName: string, newAge: number}) {
        this.age = newData.newAge;
        this.name =newData.newName;
    }
}

const alex = new Person('Alex', 3);
alex.setData({newAge: 4, newName: 'Alexander'});

console.log(alex);

