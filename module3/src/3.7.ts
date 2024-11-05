{
    // statik..................................................................

    class Counter {

        // counter: number = 0;
        // increMent() {
        //    return this.counter += 1;
        // }
        // decreMent() {
        //   return  this.counter -= 1;
        // }

        //   use statick
        static counter: number = 0;
        static increMent() {
            return Counter.counter += 1;
        }
        static decreMent() {
            return Counter.counter -= 1;
        }
    }

    // simple counter
    // const inputCounter = new Counter()
    // console.log(inputCounter.increMent())
    // 
    // 


    // statick counter  derect use Main class name 
    console.log(Counter.increMent())
    console.log(Counter.increMent())
    console.log(Counter.increMent())
    console.log(Counter.increMent())
    console.log(Counter.increMent())
    console.log(Counter.increMent())
    // 
    // 
}

