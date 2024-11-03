
{
    //////

    //utility type ..........................................
    // pike type
    type userInformaction = {
        name: string;
        age?: number;
        contactEmail?: string;
        phone: number
    }


    type AgeNameContact = Pick<userInformaction, 'age' | 'name' | 'contactEmail'>

    // Omit.................................. bad dea


    type Email = Omit<userInformaction, 'age'>

    // requad ..................................................
    type RequerdInformaction = Required<userInformaction>

    // partila .........................................
    type PartilaOperator = Partial<userInformaction>

// red only 
    type Readonly ={
      readonly name:'sujon',
      readonly fother:'nazrul'
    }
    // ////
    
    // type record
     type Records = Record<string, string>
     const record:Records={
        name:'sujon',
        homeL:'Rangpur',
        // Phoen:01845545 number no use for string 
     }
    // 
}