"use strict";
{
    const maitiFication = (num1, num2) => {
        // check and validity
        if (typeof num1 === 'number' && typeof num2 === 'number') {
            return num1 * num2;
        }
        // itis bad request
        else {
            return num1.toString() + num2.toString();
        }
    };
    const inputData = maitiFication(10, "10");
    console.log(inputData);
    const checkUser = (user) => {
        if ("role" in user) {
            return `user name ${user.name} User role ${user.role}`;
        }
        else {
            return `user name ${user.name}`;
        }
    };
    const normalUser = {
        name: 'sujon'
    };
    const adminUser = {
        name: 'sujon',
        role: 'admin'
    };
    const inputCheckUser = checkUser(adminUser);
    console.log(inputCheckUser);
    // 
}
