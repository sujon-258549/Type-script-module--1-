
{
    // sparate oparator
    const allName :string[]= ["md","sujon",'mia']
    const allName2 :string[]= ["md","sujon",'mia']
    // allName.push(allName)
    allName.push(...allName)

    const country={
        toplavel:'cina',
        midlavel:"India",
        lowlavel:'Bangladesh'
    }
    const country2={
        toplavel:'cina2',
        midlavel:"India2",
        lowlavel:'Bangladesh2'
    }

    const allCountry={
        ...country,
        ...country2
    }
    // rest oparator
    // 
    const myFrendlist =(...frends :string[])=>{
        return frends.forEach((frend:string) => console.log(`Hi Frend,${frend}`))
    }
    myFrendlist('siddek', 'sunmun','mehedi', 'subel')
    // distractating
}