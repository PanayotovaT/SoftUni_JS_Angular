export abstract class Employee {

   salary: number;
   tasks: string[] = [];

   private currentWorkIndex = 0;

    constructor(public name: string, public age: number) {

    }

    work(): void {
        console.log(this.tasks[this.currentWorkIndex]);
        this.currentWorkIndex = (this.currentWorkIndex + 1) % this.tasks.length;
        
    }

    collectSalary(): void {
        console.log(`${this.name} received ${this.calculateSalary()}.`)
    }

    protected abstract calculateSalary();
}

export class Junior extends Employee {
    tasks: string[] = [`${this.name} is working on a simple task.`]

    protected calculateSalary(): number {
        return this.salary;
    }
}

export class Senior extends Employee {
    tasks: string[] = [`${this.name} is working on a complicated task.`,
    `${this.name} is taking time off work`,
    `${this.name} is supervising junior workers.`];

    protected calculateSalary(): number {
        return this.salary;
    }
}

export class Manager extends Employee {
    divident: number;
    tasks: string[] = [`${this.name} schedualed a meeting.`,
    `${this.name} is preparing quarterly report.`]

    protected calculateSalary(): number {
        return this.salary + this.divident;
    }
}