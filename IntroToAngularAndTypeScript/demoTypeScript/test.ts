// let isOpen: boolean;


// let list: number[] = [1, 2, 3];

// isOpen = true;
// console.log(isOpen);

// const userRole = {
//     Admin:1,
//     Client: 2
// }

enum UserRole {
    Admnin,
    Client
}
interface IUserNewData {
    newName: string; 
    newAge: number;
    newRole: number;
}

class Person {
    constructor(
        public name: string, 
        protected age: number,
        private role: UserRole
        // public age: number,
        // protected gender: string,
        ) { }
    // getAge(): void {
    //     return void this.age;
    //     //void returns undefined. We put it when we don't want a funtion to return a result
    // }
    getAge() {
        return this.age;
    }

    setData(newData: IUserNewData) {
        this.age = newData.newAge;
        this.name =newData.newName;
        this.role = newData.newRole;
    }
    info() {
        return `${this.name} ${this.age}`
    }
}

let alex = new Person('Alex', 3, UserRole.Admnin);
let sofi = new Person('Sofi', 2, UserRole.Client);
const newData: IUserNewData = {newAge:5, newName: 'Alexander', newRole: 1}
alex.setData(newData);

console.log(alex)
function identify<T> (arg: T): T {
    return arg;
}

let value =1;
const test = identify(value);