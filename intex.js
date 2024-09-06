function hello()
{
document.getElementById('dem').innerHTML='date';
}
var price = 34500
var product = "mobile"
var tax = 500
console.log(product)
var total=price+tax;
console.log(total)

var fruitname = "orange"
var count = 6
var price = 70
console.log(fruitname)
console.log(70*6)

// function

function Blue(){
    console.log("premium")
}
Blue()
function red(){
    console.log("coding")
}
function yellow(){
    console.log("courses")
}
function green(){
    console.log("programiz")
}
red()
yellow()
green()

var a=10
var b=15

function add()
{
    console.log(a+b)
}
add()



// type

console.log(typeof(true))
console.log(typeof(false))

// Array
let vehicle= ["car", "bus", "bike", "van" ,"lorry"];

    console.log(vehicle[0])
    console.log(vehicle[1])
    console.log(vehicle[2])
    console.log(vehicle[3])
    console.log(vehicle[4])

    var factor="vijay";
    var fplayer="doni";
    var fmovie="naam";
    
    function favourite()
    {
        console.log("my fav actor:", factor);
         console.log("my fav actor:", fplayer);
          console.log("my fav actor:", fmovie);
    }
       favourite()

       function area(l,b)
    {
    
       var a=l*b
       console.log("Area is:"+a)
    }
       area(25,35)

       function hello()
       {
       document.getElementById('dem').innerHTML='date';
       }
       var price = 34500
       var product = "mobile"
       var tax = 500
       console.log(product)
       var total=price+tax;
       console.log(total)
       
       var fruitname = "orange"
       var count = 6
       var price = 70
       console.log(fruitname)
       console.log(70*6)
       function Blue(){
        console.log("premium")
    }
   
    
    if(false)

        {
            console.log("its true")
        }
        else{
            console.log("its false")
        }
        
        var abc=(false)
        if(abc)
        {
            console.log("true")
        }
        else{
            console.log("false")
        }
        
        var result=90;
        if(result<60){
            console.log("abcd")
        }
        if(result<=60)
        {
            console.log("efgh")
        }
        if(result>80){
            console.log("ijkl")
        }
    

    function checkEvenOrOdd(number) {
        if ( number % 4==0) {
            console.log("The number is even");
        } else {
            console.log("The number is odd");
        }
    }
    checkEvenOrOdd("9")

    function checkVowelsOrConsonant(char){ 
        if (char === 'a'|| char === "e" || char === 'i' || char === "o" || char === 'u' ){
            console.log("It's a vowel")
        }
        else{
             console.log("It's a Consonant")
        }
    }
    
checkVowelsOrConsonant("m")

// for loop
for(count=1;count<=20;count=count+1)
    {
        console.log("agalya")
    }

    for(count=1;count<=10;count=count+3)
        {
            console.log(count)
        }

        // reverse

        for(let count=15;count >= 1;count--)
            {
                console.log(count)
            }

            // tables
            for(let count=1;count <= 10;count++)
                {
                    console.log(count+"x2="+(count*2))
                }