
const arr=[{city:'tel aviv',days:{
sunday:{day:'27(C)',night:'16(C)',condition:'CLEAR'},
monday:{day:'28(C)',night:'17(C)',condition:'CLEAR'},
tuesday:{day:'22(C)',night:'11(C)',condition:'CLOUDY'},
wednesday:{day:'21(C)',night:'12(C)',condition:'CLOUDY'},
thursday:{day:'27(C)',night:'16(C)',condition:'CLEAR'},
friday:{day:'22(C)',night:'11(C)',condition:'CLOUDY'},
saturday:{day:'21(C)',night:'12(C)',condition:'CLOUDY'}
}},

{city:'haifa',days:{
    sunday:{day:'28(C)',night:'17(C)',condition:'CLEAR'},
    monday:{day:'27(C)',night:'16(C)',condition:'CLEAR'},
    tuesday:{day:'22(C)',night:'11(C)',condition:'CLOUDY'},
    wednesday:{day:'21(C)',night:'12(C)',condition:'CLOUDY'},
    thursday:{day:'27(C)',night:'16(C)',condition:'CLEAR'},
    friday:{day:'21(C)',night:'12(C)',condition:'CLOUDY'},
    saturday:{day:'22(C)',night:'11(C)',condition:'CLOUDY'},
    }}
    ,
{city:'jerusalem',days:{
    sunday:{day:'30(C)',night:'15(C)',condition:'CLEAR'},
    monday:{day:'28(C)',night:'17(C)',condition:'CLEAR'},
    tuesday:{day:'22(C)',night:'13(C)',condition:'CLOUDY'},
    wednesday:{day:'18(C)',night:'12(C)',condition:'CLOUDY'},
    thursday:{day:'27(C)',night:'16(C)',condition:'CLEAR'},
    friday:{day:'22(C)',night:'13(C)',condition:'CLOUDY'},
    saturday:{day:'22(C)',night:'12(C)',condition:'CLOUDY'}
    }}
    ,
{city:'ashdod',days:{
    sunday:{day:'27(C)',night:'16(C)',condition:'CLEAR'},
    monday:{day:'28(C)',night:'17(C)',condition:'CLEAR'},
    tuesday:{day:'22(C)',night:'11(C)',condition:'CLOUDY'},
    wednesday:{day:'21(C)',night:'12(C)',condition:'CLOUDY'},
    thursday:{day:'27(C)',night:'16(C)',condition:'CLEAR'},
    friday:{day:'22(C)',night:'11(C)',condition:'CLOUDY'},
    saturday:{day:'21(C)',night:'12(C)',condition:'CLOUDY'}
    }}
    ,
{city:'beer sheva',days:{
    sunday:{day:'27(C)',night:'16(C)',condition:'CLEAR'},
    monday:{day:'28(C)',night:'17(C)',condition:'CLEAR'},
    tuesday:{day:'22(C)',night:'11(C)',condition:'CLOUDY'},
    wednesday:{day:'21(C)',night:'12(C)',condition:'CLOUDY'},
    thursday:{day:'27(C)',night:'16(C)',condition:'CLEAR'},
    friday:{day:'22(C)',night:'11(C)',condition:'CLOUDY'},
    saturday:{day:'21(C)',night:'12(C)',condition:'CLOUDY'}
    }}
    ,
{city:'netanya',days:{
    sunday:{day:'27(C)',night:'16(C)',condition:'CLEAR'},
    monday:{day:'28(C)',night:'17(C)',condition:'CLEAR'},
    tuesday:{day:'22(C)',night:'11(C)',condition:'CLOUDY'},
    wednesday:{day:'21(C)',night:'12(C)',condition:'CLOUDY'},
    thursday:{day:'27(C)',night:'16(C)',condition:'CLEAR'},
    friday:{day:'22(C)',night:'11(C)',condition:'CLOUDY'},
    saturday:{day:'21(C)',night:'12(C)',condition:'CLOUDY'}
    }}
    ,
{city:'acco',days:{
    sunday:{day:'27(C)',night:'16(C)',condition:'CLEAR'},
    monday:{day:'28(C)',night:'17(C)',condition:'CLEAR'},
    tuesday:{day:'22(C)',night:'11(C)',condition:'CLOUDY'},
    wednesday:{day:'21(C)',night:'12(C)',condition:'CLOUDY'},
    thursday:{day:'27(C)',night:'16(C)',condition:'CLEAR'},
    friday:{day:'22(C)',night:'11(C)',condition:'CLOUDY'},
    saturday:{day:'21(C)',night:'12(C)',condition:'CLOUDY'}
    }}
    ,
{city:'eilat',days:{
    sunday:{day:'27(C)',night:'16(C)',condition:'CLEAR'},
    monday:{day:'28(C)',night:'17(C)',condition:'CLEAR'},
    tuesday:{day:'22(C)',night:'11(C)',condition:'CLOUDY'},
    wednesday:{day:'21(C)',night:'12(C)',condition:'CLOUDY'},
    thursday:{day:'27(C)',night:'16(C)',condition:'CLEAR'},
    friday:{day:'22(C)',night:'11(C)',condition:'CLOUDY'},
    saturday:{day:'21(C)',night:'12(C)',condition:'CLOUDY'}
    }}
    ,
{city:'qiryat shmona',days:{
    sunday:{day:'27(C)',night:'16(C)',condition:'CLEAR'},
    monday:{day:'28(C)',night:'17(C)',condition:'CLEAR'},
    tuesday:{day:'22(C)',night:'11(C)',condition:'CLOUDY'},
    wednesday:{day:'21(C)',night:'12(C)',condition:'CLOUDY'},
    thursday:{day:'27(C)',night:'16(C)',condition:'CLEAR'},
    friday:{day:'22(C)',night:'11(C)',condition:'CLOUDY'},
    saturday:{day:'21(C)',night:'12(C)',condition:'CLOUDY'}
    }
}];






function find(){

  
    let check = document.getElementById('username').value;
    let show = arr.filter((item)=>(item.city==check));
    let print1 ='';
    let print2 ='';
    let print3 ='';
    let print4 ='';
    let print5 ='';
    let print6 ='';
    let print7 ='';
    let print8 ='';
    let print9 ='';
    let print10 ='';
    let print11 ='';
    let print12 ='';
    let print13 ='';
    let print14 ='';
    let print15 ='';
    let print16 ='';
    let print17 ='';
    let print18 ='';
    let print19 ='';
    let print20 ='';
    let print21 ='';

    let cityshow ='';

    show.forEach(element => {
       cityshow+=element.city;
    });
    document.getElementById('header').innerHTML = 'weather in' + '  ' + cityshow;


    show.forEach(element => {
        print1+=element.days.sunday.day;
    });
    document.getElementById('sunday1').innerHTML = print1;

    show.forEach(element => {
        print2+=element.days.sunday.night;
    });
    document.getElementById('sunday2').innerHTML = print2;

    show.forEach(element => {
        print3+=element.days.sunday.condition;
    });
    document.getElementById('sunday3').innerHTML = print3;

    
    show.forEach(element => {
        print4+=element.days.monday.day;
    });
    document.getElementById('monday1').innerHTML = print4;

    show.forEach(element => {
        print5+=element.days.monday.night;
    });
    document.getElementById('monday2').innerHTML = print5;

    show.forEach(element => {
        print6+=element.days.monday.condition;
    });
    document.getElementById('monday3').innerHTML = print6;






    show.forEach(element => {
        print7+=element.days.tuesday.day;
    });
    document.getElementById('tuesday1').innerHTML = print7;

    show.forEach(element => {
        print8+=element.days.tuesday.night;
    });
    document.getElementById('tuesday2').innerHTML = print8;

    show.forEach(element => {
        print9+=element.days.tuesday.condition;
    });
    document.getElementById('tuesday3').innerHTML = print9;


    
    show.forEach(element => {
        print10+=element.days.wednesday.day;
    });
    document.getElementById('wednesday1').innerHTML = print10;

    show.forEach(element => {
        print11+=element.days.wednesday.night;
    });
    document.getElementById('wednesday2').innerHTML = print11;

    show.forEach(element => {
        print12+=element.days.wednesday.condition;
    });
    document.getElementById('wednesday3').innerHTML = print12;

    

    show.forEach(element => {
        print13+=element.days.thursday.day;
    });
    document.getElementById('thursday1').innerHTML = print13;

    show.forEach(element => {
        print14+=element.days.thursday.night;
    });
    document.getElementById('thursday2').innerHTML = print14;

    show.forEach(element => {
        print15+=element.days.thursday.condition;
    });
    document.getElementById('thursday3').innerHTML = print15;




    
    show.forEach(element => {
        print16+=element.days.friday.day;
    });
    document.getElementById('friday1').innerHTML = print16;

    show.forEach(element => {
        print17+=element.days.friday.night;
    });
    document.getElementById('friday2').innerHTML = print17;

    show.forEach(element => {
        print18+=element.days.friday.condition;
    });
    document.getElementById('friday3').innerHTML = print18;






    show.forEach(element => {
        print19+=element.days.saturday.day;
    });
    document.getElementById('saturday1').innerHTML = print19;

    show.forEach(element => {
        print20+=element.days.saturday.night;
    });
    document.getElementById('saturday2').innerHTML = print20;

    show.forEach(element => {
        print21+=element.days.saturday.condition;
    });
    document.getElementById('saturday3').innerHTML = print21;


    document.getElementById('day11').innerHTML = 'DAY';
    document.getElementById('night11').innerHTML = 'NIGHT';
    document.getElementById('condition11').innerHTML = 'COND';

    document.getElementById('sunday').innerHTML = 'SUN';
    document.getElementById('monday').innerHTML = 'MON';
    document.getElementById('tuesday').innerHTML = 'TUES';
    document.getElementById('wednesday').innerHTML = 'WED';
    document.getElementById('thursday').innerHTML = 'THUR';
    document.getElementById('friday').innerHTML = 'FRI';
    document.getElementById('saturday').innerHTML = 'SAT';


    document.getElementById('suntd').innerHTML ="<img src=\"sun.png\" width=\"45px\" height=\"45px\">";;


    





}
