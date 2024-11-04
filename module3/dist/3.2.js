"use strict";
{
    // oop inharitanse ..........................................................................
    class Parentclass {
        // name: string;
        // age: number;
        // email: string;
        constructor(name, age, email) {
            // super(name, age, email)
            // this.name = name;
            // this.age = age;
            // this.email = email;
            this.name = name;
            this.age = age;
            this.email = email;
        }
        result(redingTime) {
            console.log(`Name ${this.name} Age ${this.age} Email ${this.email} Reding Time ${redingTime}, Hours`);
        }
    }
    // only use extend parent class .................................................................
    class Student extends Parentclass {
        constructor(name, age, email) {
            super(name, age, email);
        }
    }
    const inputData = new Student('sujon', 22, 'sujon258549@gmail.com');
    inputData.result(10);
    // only use extend parent class ..................................................................
    class Techer extends Parentclass {
        constructor(name, age, email, techerClassTime) {
            super(name, age, email);
            this.techerClassTime = techerClassTime;
        }
        classEndTime(endtime) {
            console.log(`techer name ${this.name}, EndTime ${endtime}`);
        }
    }
    const inputData2 = new Techer('sujon', 22, 'sujon258549@gmail.com', 2);
    inputData2.result(510);
    inputData2.classEndTime(15);
    // 
    // 
    // 
}
