"use strict";
{
    // statik..................................................................
    class Counter {
        static increMent() {
            return Counter.counter += 1;
        }
        static decreMent() {
            return Counter.counter -= 1;
        }
    }
    // counter: number = 0;
    // increMent() {
    //    return this.counter += 1;
    // }
    // decreMent() {
    //   return  this.counter -= 1;
    // }
    //   use statick
    Counter.counter = 0;
    // simple counter
    // const inputCounter = new Counter()
    // console.log(inputCounter.increMent())
    // 
    // 
    // statick counter  derect use Main class name 
    console.log(Counter.increMent());
    console.log(Counter.increMent());
    console.log(Counter.increMent());
    console.log(Counter.increMent());
    console.log(Counter.increMent());
    console.log(Counter.increMent());
    // 
    // 
}
