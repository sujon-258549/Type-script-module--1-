{
    // conditiolonal type 


    type A1 = null;
    type A2 = undefined;

    type resultA1 = A1 extends null ? true : false


    type resultA2 = A1 extends null ? true : A1 extends undefined ? true : any


    type Shek = {
        car: string;
        ship: string;
        bike: string;
        ManyGoold: string;
    };
    
    type CheckValidity<T> = T extends keyof Shek ? true : 'this is no shek';

    type CarCheck = CheckValidity<'car'>;
    
    // This will evaluate to 'this is no shek' since 'plane' is not a key in Shek
    type PlaneCheck = CheckValidity<'plane'>;
    








    // 
    // 
}