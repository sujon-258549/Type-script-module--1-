"use strict";
{
    const studentData = (student) => {
        const studentExperience = 'web Developer';
        console.log(Object.assign(Object.assign({}, student), { studentExperience }));
        return Object.assign(Object.assign({}, student), { studentExperience });
    };
    const inputStudentData3 = studentData({
        name: 'sujon', roll: 45545, email: 'sujon258549@gmail.com'
    });
    const inputStudentData14 = studentData({
        name: 'sujon', roll: 45545, email: 'mia258549@gmail.com', home: 'rangpur'
    });
    // 
}
