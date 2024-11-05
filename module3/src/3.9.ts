{
    // abastaction..............................................................

    // interface use abstaction..................
    interface Man {
        etingTime(): void
        sleepingTime(): void
        workTime(): void

    }


    class Manmamegmenttime implements Man {  //abstaction
        etingTime(): void {
            console.log('This is eating 2.00 time')
        }
        sleepingTime(): void {
            console.log('sleeping time 12.00')
        }
        workTime(): void {
            console.log('work time 9.00 - 12.00')
        }
        heltfeet() {
            console.log('i am feet ')
        }
    }


    // const manegmenttime = new Manmamegmenttime()
    // manegmenttime.heltfeet()



    // interface class use intrerface 
   abstract class Man2 {
       abstract etingTime(): void 
       abstract sleepingTime(): void 
       abstract workTime(): void 
        heltfeet() {
            console.log('i am feet ')
        }
    }

    class Manmamegmenttime2 extends Man2 {
        etingTime(): void {
            console.log('This is eating 2.00 time')
        }
        sleepingTime(): void {
            console.log('sleeping time 12.00')
        }
        workTime(): void {
            console.log('work time 9.00 - 12.00')
        }

    }

const manmanegment = new Manmamegmenttime2()
manmanegment.sleepingTime()


    // //////////////////////////
}