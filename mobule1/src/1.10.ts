{
    // UNION operrator and interseptor
    // union operator 
    type Name = {
        name: 'md sujon Mia' | 'sujon'
    }

    const name: Name = {
        name: 'sujon'
    }

    type UserInfo = {
        name: string;
        fatherName: string,
        mobile: number;
        bladgroup: 'A+' | 'B+' | 'C+'
    }

    const useInfo: UserInfo = {
        name: 'sujon',
        fatherName: 'Nazrul Islam',
        mobile: 1790876529,
        bladgroup: 'A+'

    }
    // inter septor using for typescript
    type Userrole = {
        userSkills: string[];
        normalUseer: 'isUser';
        userName: string
    }
    type Admin ={
        userSkills:string[];
        adminUser:'isAdmin';
        userName:string
    }

    type Mainadmin = Userrole & Admin

    const mainadmin:Mainadmin ={      // mast be all Main admin user role example userole and admin  all data writin no data writing error this time typescritr !!
        userSkills:['goodCommunicaitn', 'timework'],
        normalUseer:'isUser',
        userName:'Md Sujon Mia',
        adminUser:'isAdmin',

    }
}