{
    // oop inharitanse 
    class Student {
        name: string;
        age: number;
        email: string;

        constructor(name: string, age: number, email: string) {
            this.name = name;
            this.age = age;
            this.email = email;
        }

        result(){
            console.log(`Student Name ${this.name} Age${this.age} Email${this.email}`)
        }
    }
    const inputData = new Student('sujon', 22, 'sujon258549@gmail.com')
















    // 
    // 
    // 
}