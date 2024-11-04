{
    // type Gard/type narig 

    // tyoe of operator -----> type Gard

    // type declore
    type Duboletype = string | number

    const maitiFication = (num1: Duboletype, num2: Duboletype): Duboletype => {

        // check and validity
        if (typeof num1 === 'number' && typeof num2 === 'number') {
            return num1 * num2
        }
        // itis bad request
        else {
            return num1.toString() + num2.toString()
        }

    }

    const inputData = maitiFication(10, "10")

    console.log(inputData)


    // in gurd

    type User = {
        name: string
    }
    type AdminUser = {
        name: string;
        role: 'admin'
    }

    const checkUser =(user :User | AdminUser)=>{
        if("role" in user){
            return `user name ${user.name} User role ${user.role}`
        }
        else{
             return `user name ${user.name}`
        }
    }

    const normalUser:User={
        name:'sujon'
    }
    const adminUser:AdminUser={
        name:'sujon',
        role:'admin'
    }

    const inputCheckUser =  checkUser(adminUser)


    console.log(inputCheckUser)

    // 
}