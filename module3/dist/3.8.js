"use strict";
{
    // polymarfigom use 
    class Parson {
        getSleep() {
            console.log('Daily sleeping time 10 hour');
        }
    }
    class Student extends Parson {
        getSleep() {
            console.log('Daily sleeping time 8 hour');
        }
    }
    class Developer extends Parson {
        getSleep() {
            console.log('Daily sleeping time 7 hour');
        }
    }
    const allManSleepingTime = (time) => {
        time.getSleep();
    };
    const parson = new Parson();
    const student = new Student();
    const develoer = new Developer();
    allManSleepingTime(parson);
    allManSleepingTime(student);
    allManSleepingTime(develoer);
    class Calculate {
        getInput() {
            return 0;
        }
    }
    class Shape extends Calculate {
        constructor(radious) {
            super();
            this.radious = radious;
        }
        getInput() {
            return Math.PI * this.radious * this.radious;
        }
    }
    class Metarscore extends Calculate {
        constructor(height, width) {
            super();
            this.height = height;
            this.width = width;
        }
        getInput() {
            return this.height * this.width;
        }
    }
    class Hapmetar extends Calculate {
        constructor(height, width) {
            super();
            this.height = height;
            this.width = width;
        }
        getInput() {
            return .5 * this.height * this.width;
        }
    }
    const inputData = (params) => {
        return console.log(params.getInput());
    };
    const shep = new Shape(10);
    const metarscore = new Metarscore(5, 10);
    const hapmetar = new Hapmetar(5, 10);
    inputData(shep);
    inputData(metarscore);
    inputData(hapmetar);
    // const area = new Metarscore(5, 5)
    // console.log(area.getInput())
    // 
}
