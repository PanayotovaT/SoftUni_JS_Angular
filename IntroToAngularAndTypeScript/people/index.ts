import { Junior, Senior, Manager } from './employee';

const junior =  new Junior('Alex', 3);

junior.work(); //simple task
junior.work(); //simple task

const senior = new Senior('Sofi', 2);
senior.work(); //complicated task
senior.work(); //time off
senior.work(); //supervising


const manager = new Manager('Tedi', 33);
manager.work();
manager.work();
manager.work();
manager.salary = 3000;
manager.divident = 2000;
manager.collectSalary();