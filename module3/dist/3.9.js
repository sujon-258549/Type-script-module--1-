"use strict";
{
    class Manmamegmenttime {
        etingTime() {
            console.log('This is eating 2.00 time');
        }
        sleepingTime() {
            console.log('sleeping time 12.00');
        }
        workTime() {
            console.log('work time 9.00 - 12.00');
        }
        heltfeet() {
            console.log('i am feet ');
        }
    }
    // const manegmenttime = new Manmamegmenttime()
    // manegmenttime.heltfeet()
    // interface class use intrerface 
    class Man2 {
        heltfeet() {
            console.log('i am feet ');
        }
    }
    class Manmamegmenttime2 extends Man2 {
        etingTime() {
            console.log('This is eating 2.00 time');
        }
        sleepingTime() {
            console.log('sleeping time 12.00');
        }
        workTime() {
            console.log('work time 9.00 - 12.00');
        }
    }
    const manmanegment = new Manmamegmenttime2();
    manmanegment.sleepingTime();
    // //////////////////////////
}
