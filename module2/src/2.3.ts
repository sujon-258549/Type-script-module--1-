{
    // genetic type 

    type ArrayString = Array<string>
    // custom type use 
    type CustomArrayType<T> = Array<T>

    //1. baseck or old systed type declor 
    const arrayString: string[] = ['s', 'e', 'd']

    //2. normal stander
    const arrayString2: Array<string> = ['s', 'e', 'd']
    //3. normal stander short formet use 
    const arrayString3: ArrayString = ['s', 'e', 'd']
    //4. main stander 
    const arrayString4: CustomArrayType<string> = ['s', 'e', 'd']
    //4. main stander  use 
    const userData: CustomArrayType<{ userName: string, old: number, home: string, role?: string }> = [
        {
            userName: 'sujon',
            old: 10,
            home: 'Rangpur'
        },
        {
            userName: 'sujon',
            old: 10,
            home: 'ra'
        },
        {
            userName: 'sujon Admin',
            old: 10,
            home: 'Rangpur',
            role: 'admin'
        }

        
    ]



    // genarik tupol 
    // fast system
    const manePluse: [string, string] = ['male', 'female']







    // baseck or old systed type declor 
    const arrayNumber: number[] = [2, 5000, 2, 14]
    // normal stander
    const arrayNumber2: Array<number> = [2, 5000, 2, 14]

    // baseck or old systed type declor 
    const arrayBoolean: boolean[] = [true, true, false]
    // normal stander
    const arrayBoolean2: boolean[] = [true, true, false]



















    // dynamic create type 
}