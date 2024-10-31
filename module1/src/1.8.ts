{
    // destractaring
    // 
    // Object
    const biodata = {
        myName: {
            firstName: 'Md sujon Mia',
            lastName: 'sujon'
        },
        constactInfo: {
            email: "sujon258549@gmail.com",
            phone: "01790876529"
        },
        address: "Rangppur Bangladesh"
    }
    const {
        myName: { firstName: mainName, lastName }, // main name change variabile
        constactInfo: { email, phone }
    } = biodata;


    // array destaring
    const district = ['Rangpur', 'Dhaka', "Rajsahi", "Lalmonirhat", 'Dinajpur']
    const [, , , , Dinajpur] = district
}



