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

        // return function
        function myState()
            {
                return ("tamil nadu")

            }
            var a=myState()
            console.log(a)

            function sub(a,b)
            {
                return (a-b)
            }
            let totalValue=sub(80,30)
            console.log(totalValue)

            function fruits(apple,orange)
            {
                return (apple+orange)
            }
            var total=fruits(100,80)
            console.log(total)
        

            var result=50
if(result>60)
{
    console.log("pass")
}
else
{
    console.log("fail")
}

var score=60
if(score>90)
{
    console.log("Agalya")
}
else if(score>=60)
{
    console.log("Ruban")
}
else if(score>10)
{
    console.log("Ams")
} 

function checkOddOrEven(number){
    if(number % 3==0)
    {
        console.log("the number is odd")
    }
    else
    {
        console.log("the number is even")
    }
    }
    checkOddOrEven("8")

    function checkOddOrEven(char){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        {
        console.log("it is 4 vowel letter only")
            
        }
        else
        {
            console.log("it is constant or number")
        }
        
    }
     checkOddOrEven("e")


// eligible or not eligible

let nameOne= "Bavya";
let age = 18;

if (age >= 18) {
    console.log(name + " is eligible to vote.");
}


else {
    console.log(name + " is not eligible to vote.");
}

// for loop
for (count=1;count<=10;count=count+1)
    {
        console.log("Ruban")
    }
    for (count=1;count<=20;count=count+1)
        {
            console.log(count)
        }
       
        for (count=10;count>=1;count=count-1)
            {
                console.log(count)
            } 
            for (count=1;count<=20;count=count+2)
                {
                    console.log(count)
                }
                for (count=1;count<=10;count=count+1)
                    {
                        console.log(count+" x2="+(count*2))
                        }


                        for (count=1;count<=10;count++)
                            {
                                console.log(count)
                            }
                            
                             function reversedName(str)
                            {
                            var reversedName=""
                            for(let i=str.length-1;i>=0;i--){
                            reversedName += str[i]
                            }
                            return reversedName;
                            }
                            var name ="Ruban"
                            console.log(reversedName(name))