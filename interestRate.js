const data=[
    {
        principal:2500,
        time:1.8
    },
    {
        principal:1000,
        time:5
    },
    {
        principal:3000,
        time:1
    },

    {
        principal:2000,
        time:3
    }
];
function mydata(data){
    let interestdata=[];
    for (let i = 0; i < data.length; i++) {
        let interest='';
        let rate=0;
        //create new object
        let myob={};
        let prin=data[i].principal;
        let t=data[i].time;
        
        if(prin>=2500 && t>1 && t<=3){
            rate=3;
        }
        else if(prin>=2500 && t>=3){
           rate=4
        }
        else if(prin<2500 || t<=1){
            rate=2;
           
        }else{
            rate=1
        }
        
        
        interest=(prin*rate*t)/100;
        myob={
            principal:prin,
            rate:rate,
            time:t,
            interest:interest

        };
    //push the object to the array
    interestdata.push(myob);
        
    }
    
    console.log(interestdata);

    return interestdata;
    
}
//calling of the function i cretaed
 mydata(data);
//console.log(mydata(princ));