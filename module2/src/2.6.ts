{

    // consten 

    interface StudentInfonmactionType { 
        name: string, roll: number, email: string 
    }

    const studentData = <T extends StudentInfonmactionType>(student: T) => {

        const studentExperience = 'web Developer';
        console.log({ ...student, studentExperience })
        return {
            ...student,
            studentExperience
        }
    }

    
    const inputStudentData3 = studentData(
        {
            name: 'sujon', roll: 45545, email: 'sujon258549@gmail.com'
        })
    const inputStudentData14 = studentData(
        {
            name: 'sujon', roll: 45545, email: 'mia258549@gmail.com' , home:'rangpur'
        })














    // 

}