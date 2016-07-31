// Each employee array should become an instance of an object
var scout = new Employee("Scout", "6243", "74750", 5);
var atticus = new Employee("Atticus", "2405", "47000", 3);
var jem = new Employee("Jem", "62347", "63500", 4);
var boo = new Employee("Boo", "11435", "54000", 3);
/*
The first index holds the employees name.
The second index has their employee number.
The third index contains their annual salary.
The fourth index contains their review rating.
*/

function Employee(name, empNum, salary, rank) {
    this.empName = name;
    this.empNum = empNum;
    this.sal = salary;
    this.rating = rank;
}

var employees = [];
employees.push(scout, atticus, jem, boo);
// adjust the rest of the logic to accept properties rather than array index.


function stiCalc(input) {
    input.forEach(function(emp, i) {
        var newArray = [];
        newArray[0] = emp.empName;
        var sti;
        switch (emp.rating) {
            case 3:
                sti = 0.04;
                break;
            case 4:
                sti = 0.06;
                break;
            case 5:
                sti = 0.10;
                break;
            case 0:
            case 1:
            case 2:
            default:
                sti = 0;
                break;
        }
        if (emp.empNum.length == 4) {
            sti += 0.05;
        }
        emp.sal = parseInt(emp.sal);
        if (emp.sal > 65000) {
            sti -= 0.01;
        }
        if (sti > 0.13) {
            sti = 0.13;
        }
        var bonus = Math.round(emp.sal * sti);
        newArray[1] = sti;
        newArray[2] = parseInt(emp.sal) + bonus;
        newArray[3] = bonus;
        console.log(newArray);
    });
}

stiCalc(employees);

/*
The first index should also contain the employee's name.
The second index should contain the percentage of STI the employee is to receive. See section below for calculation instructions.
The third index should be the adjusted annual compensation (base annual + STI)
The fourth index should be the employee's total bonus rounded to the nearest dollar.

Those who have a rating of a 2 or below should not receive a bonus.
Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
If they have 4 employee numbers, this means they have been with the company for longer than 15 years, and should receive an additional 5%.
However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
No bonus can be above 13% total.
*/
