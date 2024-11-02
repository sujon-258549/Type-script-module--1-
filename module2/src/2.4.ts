{
    // jenerik type 



    interface Developer<T, X = null> {
        name: string;
        conputer: {
            brand: string;
            prosasor: string;
            resone: string
        };
        watch: T  // t get props
        Wife: X
    }

    type Wife = boolean;

    type DeveloperFristDAta = {
        model: string;  //dynamic props psost 
        brand: string
    }
    const developerData: Developer<DeveloperFristDAta> = {
        name: 'sujon',
        conputer: {
            brand: 'raison',
            prosasor: 'raison 5600g',
            resone: '18-19'
        },
        watch: {
            model: '550d',
            brand: 'apple'
        },  
           
       Wife:null
    }



    interface WatchBrandData {
        model: string;
        brand: string;
        display: string,
        official: boolean
    }


    const developerData2: Developer<WatchBrandData,Wife> = {
        name: 'sujon 454545454',
        conputer: {
            brand: 'raison',
            prosasor: 'intel conri9 13gen',
            resone: '18-19'
        },
        watch: {
            model: '550d',
            brand: 'sumsong',
            display: 'amulate',
            official: true
        },
        Wife:false
    }
























    //////////////////////////////////////////////////////////
}