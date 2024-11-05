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
    // 
}
