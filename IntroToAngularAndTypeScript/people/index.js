"use strict";
exports.__esModule = true;
var employee_1 = require("./employee");
var junior = new employee_1.Junior('Alex', 3);
junior.work(); //simple task
junior.work(); //simple task
var senior = new employee_1.Senior('Sofi', 2);
senior.work(); //complicated task
senior.work(); //time off
senior.work(); //supervising
var manager = new employee_1.Manager('Tedi', 33);
manager.work();
manager.work();
manager.work();
manager.salary = 3000;
manager.divident = 2000;
manager.collectSalary();
