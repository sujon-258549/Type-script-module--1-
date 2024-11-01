{
    const search = (value: string | null) => {
        if (value) {
            // console.log('serching')
        } else {
            // console.log('pleace inter your value')
        }
    }
    search(null)

    const data = (scoremetar: unknown) => {

        if (typeof scoremetar === 'number') {
            const mainData = scoremetar * scoremetar
            console.log(`${mainData} Scoremetor`)
        }
        if (typeof scoremetar === 'string') {
            const [newData, data] = scoremetar.split(' ')
            const finaldata = (parseFloat(newData) * parseFloat(newData))
            console.log(finaldata)
        }
        else {
            console.log('Pleace Inter Your valid Data')
        }
    }
    data("10 mitor")

    const errorMessage = (msg: string) => {

        throw new Error(msg);
        

    }
    errorMessage('thisis error')

    
    //type assartion
    let anything: any;
    anything = 'This is any thing'; //string
    anything = 222; // numner
    (anything as string)  // use number sugest number and use string sagetion number type 


    const gramtoKg = (value: string | number | undefined) => {
        if (typeof value === 'number') {
            const getValue = value * 1000
            console.log(getValue)
        }
        if (typeof value === 'string') {
            const getValue = parseFloat(value) * 1000
            console.log(getValue)
        }
        else{
            console.log(undefined)
        }
    }



}