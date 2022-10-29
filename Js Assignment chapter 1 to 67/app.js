/************************* Chapter 1 to 20 **********************/

/****************   Chapter One ******************/

//Task 1. Write a script to greet your website visitor using JS alert box.
/*
window.alert("Welcome to My Website");

//Task 2. Write a script to display following message on your web page:

var a=prompt("Enter Your Password:");
if (a=="shahbaz") 
    {
    window.alert("You Type Right Password");
    } else {
    window.alert("Error! Please Enter a Valid Password");
}

//Task 3. Write a script to display following message on your web page: (Hint : Use line break)

window.alert("welcome to JS Land.... \n Happy Coding!");

// 4. Write a script to display following messages in sequence

window.alert("welcome to Js land... ");
window.alert("Happy Coding...\n Prevent this page From creating additional dialogs.");

//Task 5. Generate the following message through browser’s developer console:

window.alter("Hello,.. I can run JS my web browser's console");

//Task 6. Make use of alerts in your new/existing HTML & CSS project.

function showAlert(){
    var a="This is Task 6 using Button";
    window.alert(a);
}
*/
/*************************  Chapter Two ******************/
/*
// TASK 01. 
var username;

// TASK 02. 
var myName="Shahbaz Khan";

// TASk 03.
var message="Hello World!";
window.alert(message);

// TASK 04.
var stdName="Jhone Doe";
var stdAge="15 Year Old";
var stdCertificate="Certified mobile application Development";

window.alert(stdName);
window.alert(stdAge);
window.alert(stdCertificate);

// TASK 05.
var pizza=" PIZZA \n PIZZ \n PIZ \n PI \n P";
window.alert(pizza);

// TASK 06.
var email="example@example.com";
window.alert("My email address is "+email);

// TASK 07.
var book="A smarter way to learn Javascript";
alert("I am trying to learn from the Book "+book);

// TASK 08.
document.write("Yah! I can Write HTML content through JavaScript");

// TASK 09.
var b="__________________ஜ۩۞۩ஜ__________________";
alert(b);
*/

/*************************  Chapter Three ******************/
/*
//TASK 01.
var age=21;
alert("I am "+age+" years old");

//TASK 02.

for(var i =0; i<=1000; i++)
{
    alert("You have visited this site "+i+" times");
}
    // TASK 03.
    var birthYear="1990";
    document.write("My birth year is "+birthYear);
    
   // TASK 04
var a= prompt("Visitor's Name");
var b=prompt("Product title");
var c=prompt("Quantity");

document.write(+a+" Ordered "+ c , b+" (s) on XYZ Clothing store.");
*/

/*************************  Chapter Four ******************/
/*
// TASK 01.
var FirstName="Dr.";
var SecName="Allama";
var lastName="Iqbal";

document.write(FirstName+" "+" "+SecName+" "+" "+lastName);

//TASK 02.
var a1, a2,a3,a4,a5;
var 1b, 2b, 3b, 4b, 5b;

// TASK 03.
document.write("a) A heading stating “Rules for naming JS variables <br> b) Variable names can only contain ______, ______, ______ and ______.<br> For example $my_1stVariable. <br> c) Variables must begin with a ______, ______ or _____. For example $name, _name or name. <br> d) Variable names are case _________.<br> e) Variable names should not be JS _________.");
*/
/*************************  Chapter Five ******************/
/*
//TASK 01.
var a=+prompt("Enter First Number: ");
var b=+prompt("Enter Second Number: ");
var sum=a + b;
window.alert("The Sum of "+a+" and "+b+" is "+sum);

// TASK 02.
var a=+prompt("Enter First Number: ");
var b=+prompt("Enter Second Number: ");
var sum=a + b;
window.alert("The Sum of "+a+" and "+b+" is "+sum);

var sub=a-b;
window.alert("The Subtraction of "+a+" and "+b+" is "+sub);

var mul=a*b;
window.alert("The Multiplication of "+a+" and "+b+" is "+mul);

var div=a/b;
window.alert("The Division of "+a+" and "+b+" is "+div);

var mod=a%b;
window.alert("The Modulus of "+a+" and "+b+" is "+mod);

// TASK 03.
var a;
document.write("Value after variable declaration is: "+a);
a=5;
document.write("<br> Initial value: "+a);
a++;
document.write("<br> Value after increament is : "+a);
sum=a+7;
document.write("<br> Value after addition is: "+sum);
sum--;
document.write("<br> Value after decrement is :"+sum);
var re=sum%3;
document.write("<br> The remainder is: "+re);

// TASK 04.
var cost=600;
var buy=+ prompt("Movies Ticket is price is "+cost+" how many ticket you want?");
var total=cost*buy;
document.write("Total cost to buy "+buy+" tickets to a movie is "+total+" PKR");

//TASK 05.
var a=prompt("Enter a number to print a table: ");
document.write("Table of " +a);
for(var i=1; i<=20; i++)
{
    document.write("<br>" +a+ " x " +i+ " = " +a*i);
}

// TASK 06.
var celcius=25;
var fahr=(25*9/5)+32;
document.write(celcius+" <sup>0</sup>C is "+fahr+" <sup>0</sup>F <br>");

var fahr1=70;
var celcius1=(70-32)*5/9;
document.write(fahr1+" <sup>0</sup>F is "+celcius1+" <sup>0</sup>C");

// TASK 07.

var price1=650;
var qty1=3;
var price2=100;
var qty2=7;
var shippingCharge=100;
totalCost=(price1*qty1)+(price2*qty2)+shippingCharge;
document.write("<h1> Shipping Cart </h1>");
document.write("Price of item 1 is "+price1+"<br>Quantity of item 1 is "+qty1+"<br>Price of item 2 is "+price2+"<br>Quantity of item 2 is "+qty2+"<br>Shipping charges "+shippingCharge+"<br><br><br>Totla cost of your order is "+totalCost);

//TASK 08.
var marks=980;
var marksObt=804;
var per=(marksObt/marks)*100;

document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: "+marks+"<br> Marks obtained: "+marksObt+"<br>Percentage: "+per+"%");

// TASK 09.
var dollar=10;
var saudiRiyals=25;
var Pak=(dollar*104.80)+(saudiRiyals*28);

document.write("<h1>Currency In PKR</h1>");
document.write("Total currency in PKR: "+Pak);

//TASK 10.
var num=2;
var add=num+5;
var mul=num*10;
var div=num/2;

document.write("Number is: "+num+"<br>ADD 5 in number: "+add+"<br>Multiply by 10: "+mul+"<br>Divide by 2: "+div);

// TASK 11.
var CurrentYear=2020;
var birthYear=1997;
var years=CurrentYear - birthYear;
document.write("<h1>Age Calculator</h1>");
document.write("Current Year: "+CurrentYear);
document.write("<br>Birth Year: "+birthYear);
document.write("<br>Your age is: "+years);

//TASK 12.
var radius=20;
var circum=2*3.142*radius;
var area=3.142*radius*radius;

document.write("<h1>The Geometrizer</h1>");
document.write("<br>The Radius of a circle: "+radius);
document.write("<br>The Circumference of a circle: "+circum);
document.write("<br>The Area of a circle: "+area);

//TASK 13.
var favSnack="Chocolate chip";
var currentAge=21;
var maxAge=60;
var snackPerDay=2;
var total=(maxAge - currentAge)*2;

document.write("<h1>The Life Time Supply Calculator</h1>");
document.write("<br>Favourite Snacks: "+favSnack);
document.write("<br>Current age: "+currentAge);
document.write("<br>Estimate Maximum age: "+maxAge);
document.write("<br>Amount of Snacks Per Day: "+snackPerDay);
document.write("<br>You will need "+total+" chocolate chip to last you until the ripe old age of "+maxAge);
*/

/*************************  Chapter Six to Eight ******************/
/*
//TASK 01.
var a=10;

document.write("Result: <br>The value of a is: "+a);
document.write("<br>...................<br>");
document.write("<br>The vlaue of ++a is: " + ++a + "<br>Now the value of a is: "+a);

document.write("<br><br>The value of a++ is: "+ a++ + "<br>Now the value of a is: "+ a);

document.write("<br><br>The value of --a is: "+ --a + "<br>Now the value of a is: "+a);

document.write("<br><br>The value of a-- is: "+ a-- + "<br>Now the value of a is: "+ a);

// TASK 02.
var a=2;
document.write("a is "+a);
var b=1;
document.write("<br>b is "+b);
var result= --a - --b + ++b + b-- ;
//           1  -  0  + 1   + 1 = 3
document.write("<br>result is "+result);

// Task 03.
var username=prompt("Enter your name: ");
document.write("Hy! "+username+" Welcome to our awesome website");

// TASk 04.
// Task 05.
var num=parseInt(prompt("Enter a number which print a table: "));
if (num===num) {
    document.write("<h1>Table of 5 </h1><br>");

    for(var i=1; i<=20; i++)
    {
        document.write("<br>" +num+ " x " +i+ " = " +num*i);
    }
    } else {
    document.write("<h1>Table of "+num+ "</h1> <br>");
    for(var i=1; i<=20; i++)
    {
        document.write("<br>5 x "+i+" = "+5*i);
    }
}

// Task 06.
var eng=+prompt("Enter Your English Marks: ");
var math=+prompt("Enter Your Mathematics Marks: ");
var phy=+prompt("Enter Your Physics Marks: ");
var totalMarks=100;
var sumTotal=100 + 100 + 100;
var obtMarks= eng + math + phy;
var perEng= (eng/totalMarks)*100;
var perMath= (math/totalMarks)*100;
var perPhy= (phy/totalMarks)*100;
var totalPer= (perEng + perMath + perPhy)/3;

document.write("<table>");
    document.write("<tr>");
    document.write("<th>Subjects</th>");
    document.write("<th> Total Marks</th>");
    document.write("<th> Obtain Marks</th>");
    document.write("<th> Percentage</th>");
    document.write("</tr>");
    document.write("<tr>");
    document.write("<td>English</td>");
    document.write("<td>" +totalMarks+ "</td>" );
    document.write("<td>" +eng+ "</td>");
    document.write("<td>" +perEng+ "%</td>");
    document.write("</tr>");
    document.write("<tr>");
    document.write("<td>Mathematics</td>");
    document.write("<td>" +totalMarks+ "</td>" );
    document.write("<td>" +math+ "</td>");
    document.write("<td>" +perMath+ "%</td>");
    document.write("</tr>");
    document.write("<tr>");
    document.write("<td>Physics</td>");
    document.write("<td>" +totalMarks+ "</td>" );
    document.write("<td>" +phy+ "</td>");
    document.write("<td>" +perPhy+ "%</td>");
    document.write("</tr>");
    document.write("<tr>");
    document.write("<th></th>");
    document.write("<th>" +sumTotal+ "</th>");
    document.write("<th>" +obtMarks+ "</th>");
    document.write("<th> " +totalPer+ "%</th>");
    document.write("</tr>");

document.write("</table>");
*/
/*************************  Chapter Nine to Ten ******************/
// Task 01.
/*
var city=prompt("Enter a city Name: ");
var k="karachi";

if(city=="karachi")
    {
        document.write("Welcome to city of lights");
    }
    else{
        document.write("City = "+city);
    }

//Task 02.
var gender=prompt("Enter a Gender: ");
if(gender=="male")
    {
        document.write("Good Morning Sir");
    }else
    if(gender=="female")
    {
        document.write("Good Morning Ma’am");
    }

// Task 03.
var signalColor=prompt("Enter a Trafic Signal Color: ");
if(signalColor==="red")
    {
        document.write("Must Stop!");
    }else 
    if (signalColor==="yellow") {
        document.write("Ready to Move");
    } else 
    if(signalColor==="green"){
        document.write("Move no ");
    }
    
// Task 04.
var fuel=prompt("How many remaining Fuel in your car, litres");
if (fuel==="0.25") {
    document.write("Please refill the fuel in your car");
}

// Task 05.
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

// Task 06.
var obt1=parseInt(prompt("Enter Obtain Marks of Subject One"));
var obt2=parseInt(prompt("Enter Obtain Marks of subjects Two"));
var obt3=parseInt(prompt("Enter Obtain Marks of subjects Three"));
var obtMarks= obt1 + obt2 + obt3;
var totalMarks=300;
var per=(obtMarks/totalMarks)*100;

document.write("<h1>Marks Sheet</h1>");
document.write("<br>Total Marks: "+totalMarks+"<br>Marks Obtain: "+obtMarks+"<br> Percentage: "+per+"% <br>");


if (per>=80) {
    var grade="A-one";
    document.write("Remarks : Execellent!<br>");
} else if (per>=70) {
    document.write("Grade: A <br>Remarks : Good<br>");
} else if (per>=60) {
    document.write("Grade: B <br>Remarks : You need to improve<br>");
} else if(per<60){
    document.write("Grade: Fail <br>Remarks : Sorry!");
}

// Task 07.
var secret=7;
var guess=+prompt("Guess a number and Enter: ");
if (secret===guess) {
    document.write("Bingo! Correct answer");
} else if(guess===8){
    document.write("Close enough to the correct answer");
}

// Task 08.
var a=parseInt(prompt("Enter a number: "))
if (a%3===0) {
    document.write("Given number is Divisible by 3");
} else {
    document.write("Given is not Divisible by 3");    
}

// Task 09.
var num=parseInt(prompt("Enter a number"))
if (num%2===0) {
    document.write("Given Number is Even");
} else {
    document.write("Given Number is Odd");
}

// Task 10.
var temp = parseInt(prompt("Enter a temperature"));

if (temp > 40) {
    document.write("It is too hot outside.");
} else
    if (temp > 30) {
        document.write("The weather today is normal.");
    } else
        if (temp > 20) {
            document.write("Today's Weather is cool.");
        } else
            if (temp > 10) {
                document.write("OMG! Today's Weather is so cool.");
            }

// Task 11.
var number1=parseInt(prompt("Enter First Numbers: "));
var number2=parseInt(prompt("Enter Second Numbers: "));
var op=prompt("Enter a operator: ");
if (op==="+") {
    var sum = number1 + number2;
    document.write(number1+" + "+number2+" = "+ sum);
} else if (op==="-") {
    var sub=number1-number2;
    document.write(number1+" - "+number2+" = "+ sub);
} else if (op==="*") {
    var mul = number1 * number2;
    document.write(number1+" * "+number2+" = "+ mul);
} else if (op==="/") {
    var div=number1/number2;
    document.write(number1+" / "+number2+" = "+ div);
}else if (op==="%") {
    var rem = number1 % number2;
    document.write(number1+" % "+number2+" = "+ rem);
} 
*/
/*************************  Chapter 12 to 13 ******************/

// Task 01.
/*
var num=prompt("Enter a Character or ASCII Code:");
if((num>='A' && num<='Z') || (num>='65' && num<='90'))
{
     document.write("Given Input is Uppercase Letter:");
} else 
if((num>='a' && num<='z') || (num>='97' && num<='122'))
{
    document.write("Given Input is Lowercase Letter:");
} 

//Task 02.
var num1=parseInt(prompt("Enter First Integar: "));
var num2=parseInt(prompt("Enter second integar:"));
if (num1 > num2) {
    document.write(num1+" is Greater than "+num2);
} else if(num1===num2) {
    document.write("Both Integars are equals "+num1+" = "+num2);
}else {
    document.write(num2+" is greater than "+num1);
}

// Task 03.
var x=parseInt(prompt("Ente a number"));
if(x>0)
    {
        document.write("Given Number is Positive");
    }
    else if (x<0) {
        document.write("Given number is Negative");
    } else if(x===0){
        document.write("Given number Is Zero");
    }

// Task 04.
var char=prompt("Enter one Character");
if (char==='A'||char==='a'||char=== 'E' || char==='e' ||char==='I' ||char=== 'i' ||char==='O' || char==='o' || char==='U' || char==='u') {
    document.write("Given character is Vowel: True");
} else {
    document.write("Given character is not Vowel: False");
}

// Task 05.
var pass=prompt("Enter your Passord");
var correctPass="12345";
if(pass===""){
    document.write("Please enter your Password");
}else if (pass===correctPass) {
    document.write("Correct! The password you entered matches the original password");
} else if(pass!=correctPass){
    document.write("Incorrect! Password.");
}

// Task 06.
var greeting = "";
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    document.write(greeting);
}
else {
    greeting = "Good evening";
    document.write(greeting);
}

//Task 07.
var time=parseInt(prompt("Enter a time in 24 formate (i.e 1900)"));

if (time===1300) {
    document.write("<br>1300 = 1pm ");
} else if (time===1400) {
    document.write("<br>1400 = 2pm");
} else  if (time===1500) {
    document.write("<br>1500 = 3pm");
} else if (time===1600) {
    document.write("<br>1600 = 4pm");
} else if (time===1700) {
    document.write("<br>1700 = 5pm");
} else if (time===1800) {
    document.write("<br>1800 = 6pm");
} else if (time===1900) {
    document.write("<br>1900 = 7pm");
} else if (time===2000) {
    document.write("<br>2000 = 8pm");
} else if (time===1300) {
    document.write("<br>2100 = 9pm");
} else if (time===2200) {
    document.write("<br>2200 = 10pm");
} else if (time===2300) {
    document.write("<br>2300 = 11pm");
} else if (time===2400) {
    document.write("<br>2400 = 12pm");
} 

if (time>=0000 && time<1200) {
    document.write("<br>Good Morning");
} else if (time>=1200 && time<1700) {
    document.write("<br>Good Aftrenoon");
} else if (time>=1700 && time<2100) {
    document.write("<br>Good Evening");
} else if (time>=2100 && time<2359) {
    document.write("<br>Good Night");
}
*/
/*************************  Chapter 14 to 16 ******************/
/*
//Task 01.
var array = [];
for(var i=0; i<3; i++)
{
    // input from user of Students names
    array[i]=prompt("Enter Students Name: " + (i+1));
}
document.write(array);

//Task 02.
var obj = {
    Student : 'Shahbaz Khan',
    fee: 2500,
    address: 'Karachi'
  };
  console.log(obj);

// Task 03.
var arr=['Shahhbaz Khan'];
document.write(arr);

// Task 04.
var arrn=[ 0308 , 3237903];
document.write(arrn);

// Task 05.
var bool=[true,false];
document.write(bool);

// Task 06.
var mixArr=['Shahbaz', 0308, true];
document.write(mixArr);

// Task 07.
var edu=[];
    edu[1]="SSC";
    edu[2]="HSC";
    edu[3]="BCS";
    edu[4]="BS";
    edu[5]="BCOM";
    edu[6]="MS";
    edu[7]="M.Phil.";
    edu[8]="PhD";
    documen.write("<h2>Qualifications:</h2>");
for(var i=1; i<=8; i++)
    {
        document.write("<br>"+i+") " +edu[i]);
    }

// Task 08.
var stu=['Michael', 'John', 'Tony'];
var score=[320, 230, 480];
var totalMarks=500;
var per1=(320/totalMarks)*100;
var per2=(230/totalMarks)*100;
var per3=(480/totalMarks)*100;

document.write("<br>Score of "+stu[0]+" is "+score[0]+". Percentage: "+per1+"%");
document.write("<br>Score of "+stu[1]+" is "+score[1]+". Percentage: "+per2+"%");
document.write("<br>Score of "+stu[2]+" is "+score[2]+". Percentage: "+per3+"%");

// Task 09.
var color=[];
color.unshift(prompt("What color you want to add to the begning in Array: "));
color [1]=prompt("Add two more color to the begning in Array: ");
color [2]=prompt("Add two more color to the begning in Array: ");
color.push(prompt("What color you want to add to the last in Array: "));
document.write(color+"<br>");
// d)
color.shift();
document.write(color+"<br>");
// e)
color.pop();
document.write(color+"<br>");
// f)
color.splice(prompt("In whcih index you want to add color: "),2, prompt("Add a color name in array: "));
document.write(color+"<br>");
// g)
color.splice(prompt("Ho many index you want top delete a colors: "),prompt("In whcih index you want to delete a color: "), " ");
document.write(color+"<br>");

// Task 10.

// Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort method.


var stdScore=['320','230','480','120'];
stdScore.sort();
document.write(stdScore);

// Task 11.

// Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array


var citiesName=['Karachi','Lahore','Islamabad', 'Quetta', 'Peshawar'];
var selectedCities=citiesName.slice(2,4);
document.write("Cities List: <br>"+citiesName);
document.write("<br><br>Selected Cities List :"+selectedCities);

// Task 12.

// Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)


var arr=["This", "is","my","cat"];
var combine=arr.join(' ');
document.write("Array: <br>"+arr);
document.write("<br>String: <br>"+combine);

// Task 13.

// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)


var devices=['Keyboard','Mouse','Printer','Monitor'];
document.write("<b>Devices:</b> <br>"+devices);
document.write("<br>");

for(var i=0; i<=3; i++)
{
    document.write("<br>Out: <br>"+devices.shift());
}

// Task 14.
/* 
// Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out) 


var devices=['Keyboard','Mouse','Printer','Monitor'];
document.write("<b>Devices:</b> <br>"+devices);
document.write("<br>");

for(var i=0; i<=3; i++)
{
    document.write("<br>Out: <br>"+devices.pop());
}

//Task 15.

var mobiles = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony' , 'Haier'],
select = document.getElementById( 'mobiles' );

for( mobile in mobiles ) {
    
    select.add( new Option( mobiles[mobile] ) );
    
};

*/

/*************************  Chapter 17 to 20 ******************/
/*

// Task 01.    Declare and initialize an empty multidimensional array. (Array of arrays) 


var multiArray=[
    [,],
    [,],
    [,]
];

// Task 02.  Declare and initialize a multidimensional array representing the following matrix: 


var multiArr=[
    [0 ,1 ,2 ,3 ],
    [1 ,0 ,1 ,2 ],
    [2 ,1 ,0 ,1 ]
];
document.write(multiArr[0][0]);
document.write(multiArr[0][1]);  
document.write(multiArr[0][2]);
document.write(multiArr[0][3]);  
document.write("<br>"+multiArr[1][0]);
document.write(multiArr[1][1]);
document.write(multiArr[1][2]);  
document.write(multiArr[1][3]);
document.write("<br>"+multiArr[2][0]); 
document.write(multiArr[2][1]);
document.write(multiArr[2][2]);  
document.write(multiArr[2][3]);

// Task 03.  Write a program to print numeric counting from 1 to 10. 


for(var i=1; i<=10; i++)
{
    document.write("<br>"+i);
}

// Task 04.

//  Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user. 


var i=parseInt(prompt("Enter a number to show its multipilcation number: "));
var j=parseInt(prompt("Enter the lenght of multiplication table"));
document.write("Multiplication Table of: "+i+"<br> Lenght: "+j+"<br>");
for(var k=1; k<=j; k++)
{
    document.write("<br>"+i+" x "+k+ " = "+ i*k);
}

// Task 05.

//  Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
 


var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var j=0; j<=4; j++)
{
    document.write("<br>"+fruits[j]);
}
document.write("<br><br>");
for(var i=0; i<=4; i++)
{
    document.write(" <br> Element at index "+ i +" is " +fruits[i]);
}

// Task 06. 

//  Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k 


document.write("<h2>Counting: </h2>");
for(var i=1; i<=20; i++) 
{
    document.write(i+" ");
}
for(var h=20; h<=1; h--) 
{
    document.write(h+" <br> ");
}
document.write("<h2>Reverse Counting: </h2>");
for(var j=20; j>=1; j--)
{
    document.write(j+" ");
}
document.write("<h2>Even: </h2>");
for(var i=1; i<=20; i++) 
{
    if (i%2==0) {
        document.write(i+" ");
    }
}
document.write("<h2>Odd: </h2>");
for(var i=1; i<=20; i++) 
{
    if (i%2!=0) {
        document.write(i+" ");
    }
}
document.write("<h2>Series: </h2>");
for(var i=1; i<=20; i++) 
{
        document.write(i+"k ");
}

// Task 07.   

//  You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not.


var item = ["cake", "apple pie", "cookie", "chips", "patties"];
var UserInput = prompt("Welcome to ABC Bakery! What do you want to order sir/ma'am?");
var incr = 0;

for (i = 0; i <= item.length; i++) {
        if (item[i] === UserInput) {
            incr = 1;
            document.write(UserInput + " " + "is available at index" + " " + i + " " + "in our bakery");
        }
    }
    if (incr == 0) {
           document.write("We are sorry." + " " + UserInput + " " + "is not available in our bakery")
    }
    document.write("<br>" + "<br>");

// Task 08.     Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].
   
var arr = [24, 53, 78, 91, 12];
    var largeNum = arr[0];

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] > largeNum) {

            largeNum = arr[i];
        }
    }
    document.write("Array Items: "+" "+arr+ "<br>");
    document.write("The largest no is : "+" "+largeNum);

// Task 09. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]

var A=[24, 53, 78, 91, 12];
var smallest=A[0];

for (var i = 0; i < A.length; i++) {

        if (A[i] < smallest) {

            smallest = A[i];
        }
    }
    document.write("Array Items: "+" "+A+ "<br>");
    document.write("The Smallest no is : "+" "+smallest);

// Task 10.     Write a program to print multiples of 5 ranging 1 to 100.

for(var i=5; i<=100; i+=5)
    {
        document.write(i+", ");
    }
*/


/************************* Chapter 21 to 25 **********************/
// Task 01.      
//Write a program that takes two user inputs for first and last name using prompt 
//and merge them in a new variable titled fullName. Greet the user using his full name.
/*
var firstName=prompt("Enter Your First Name: ");
var lastName=prompt("Enter Your Last Name: ");
var FullName=firstName +" "+ lastName;
document.write("Hy! "+FullName+" welcome to our website.");

// Task 02. 
//Write a program to take a user input about his favorite mobile phone model. 
//Find and display the length of user input in your browser

var phone=prompt("Enter Your Favorite Mobile Model: ");
document.write("My favorite Phone is: "+ phone+"<br>Length of string: "+ phone.length);

// Task 03.
//Write a program to find the index of letter “n” in the word “Pakistani” 
//and display the result in your browser.

var word="Pakistani";
for(var i=0; i<word.length; i++){
    if(word.charAt(i)==='n'){
        document.write("String: "+word+"<br>Index of 'n': "+i);
    }
}

// Task 04.
// Write a program to find the last index of letter “l” in the word “Hello World” 
//and display the result in your browser.

var word="hello world";
var str = word.charAt(word.length-2);
document.write("String: "+word+"<br>Last Index of "+str+" : "+word.lastIndexOf(str));

// Task 05.
//Write a program to find the character at 3rd index in the word “Pakistani” 
//and display the result in your browser.

var word="Pakistani";
var str=word.charAt(3);
document.write("String: "+word+"<br>Character at Index 3: "+str);

//Task 06.
//epeat Q1 using string concat() method.

var firstName=prompt("Enter Your First Name: ");
var lastName=prompt("Enter Your Last Name: ");
var con= firstName.concat(lastName);
document.write("Hy! "+con+" welcome to our website.");

// Task 07.
//Write a program to replace the “Hyder” to “Islam” in theword “Hyderabad” 
//and display the result in your browser.

var str="Hyderabad";
var rep=str.replace("Hyder","Islam");
document.write("City: "+str+"<br> After replacement: "+rep);

//Task 08.
//Write a program to replace all occurrences of “and” in the string with “&” and 
//display the result in your browser. 
//var message = “Ali and Sami are best friends. They play cricket and football together.”;

var msg="Ali and Sami are best friends. They play cricket and football together.";
var str=msg.replace(/and/g,"&");
document.write("Messeage: "+msg+"<br> After Replacement: "+str);

//Task 09.
//Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

var value="472";
var num= parseInt(472);
document.write("Value: "+value+"<br>Type: "+typeof(value)+"<br> Value: "+num+"<br> Type: "+typeof(num));

//Task 10.
// Write a program that takes user input. Convert and show the input in capital letters.
 var a=prompt("Enter a String: ");
 var capital=a.toUpperCase();
 document.write("User Input: "+a+"<br>Upper Case: "+capital);

//Task 11.
//Write a program that takes user input. Convert and show the input in title case.

var str=prompt("Enter a String");
var firstChar=str.slice(0,1);
var lastChar=str.slice(1);
var firstChar=firstChar.toUpperCase();
var lastChar=lastChar.toLowerCase();
var strTitle=firstChar+lastChar;
document.write("User Input: "+str+"<br>Title Case: "+strTitle);

//Task 12.
const num=35.36;
const str=num.toString().replace(".", "");
document.write("Number: "+num+"<br>Result: "+str);

// Task 13.
//Write a program to take user input and store username in a variable. If the username contains 
//any special symbol among [@ . , !], prompt the user to enter a valid username.
//For character codes of [@ .


var userName=prompt("Enter User name: ");
// for(var i=0; i<userName.length; i++){
//     if(userName.charAt(i)==="@"|| userName.charAt(i)==="." || userName.charAt(i)==="," || userName.charAt(i)==="!"){
//        alert("Please Enter a Valid User Name: ");
//         break;
//     }
// }

// var char = String.fromCharCode(64)
// OR Using ASCII Code

// for(var i=0; i<userName.length; i++){
//     if(userName.charCodeAt(i)===(33) || userName.charCodeAt(i)===(44) || userName.charCodeAt(i)===(46) || userName.charCodeAt(i)===(64) ){
//        alert("Please Enter a Valid User Name: ");
//         break;
//     }
// }
//     alert("Name: "+userName);

// Task 14.
// You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]. Write a program 
// to enable “search by user input” in an array. After searching, prompt the user whether 
// the given item is found in the list or not. Note: Perform case insensitive search. Whether 
// the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. 

var array=["cake", "apple pie", "cookie", "chips", "patties"];
var arr=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var arr=arr.toLowerCase();

var incr=0;
for(var i=0; i<array.length; i++){

    if(array[i]===arr){
        incr=1;
        document.write(arr+" is <b>available</b> at index "+i+" in our bakery");
                      }
    }
    if(incr==0){
        document.write("We are sorry "+arr+" is <b>not available</b> in our bakery");
            }
            document.write("<br>" + "<br>");

// Task 15.

// Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
 
var password = prompt("Enter your password")

var numbers = false;
var lowerCaseLetter = false;
var upperCaseLetter = false;
var length = true;
var firstChar = true;


for (x = 0; x <= password.length - 1; x++) {
    if (password.charCodeAt(x) >= 97 && password.charCodeAt(x) <= 122) {
        lowerCaseLetter = true;
    }
    if (password.charCodeAt(x) >= 48 && password.charCodeAt(x) <= 57) {
        numbers = true;
    }
    if (password.charCodeAt(x) >= 65 && password.charCodeAt(x) <= 90) {
        upperCaseLetter = true;
    }

}

if (password.length <= 6) {
    length = false;
}

for (i = 0; i <= 10; i++) {
    if (password.startsWith(i, 0)) {
        firstChar = false;
    }
}

if (numbers == false || upperCaseLetter == false || lowerCaseLetter == false || length == false || firstChar == false) {
    alert("you enter an invalid password")
    if (numbers == false || upperCaseLetter == false || lowerCaseLetter == false) {
        alert("password must contain a upeercase letter, a lower case letter and a number")
    }
    if (length == false) {
        alert("lenght of password must be maximum 6 characters")
    }
    if (firstChar == false) {
        alert("password can not start with a number")
    }
}
else {
    alert("password approved")
}

// Task 16.

// Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”; Display the elements of array in your browser.

var uni="University Of Karachi";
var array=uni.split("");
for(var i=0; i<uni.length; i++){
  document.write(array[i]+"<br>");
}

// Task 17.

// Write a program to display the last character of a user input.

var user=prompt("Enter a String:");
var lastChar=user.charAt(user.length-1);
document.write("User Input: "+user+"<br>Last Character of input: "+lastChar);

// Task 18.
//You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of
//occurrences of word “the” in given string.

var str="The quick brown fox jumps over the lazy dog";
str=str.toLowerCase();
var word="the";
var temp=str.split(" ");
var count=0;
for(var i=0; i<temp.length; i++){
  if(word===temp[i]){
    count++;
  }
}
document.write(str+"<br>There are "+count+" occurance(s) of word "+word);
*/
/************************* Chapter 26 to 30 **********************/

// Task 01.
/*
//Write a program that takes a positive integer from user & display the following in your browser.
// a. number b. round off value of the number
// c. floor value of the number d. ceil value of the number

var num=parseFloat(prompt("Enter a Positive Integar: "));
var round=Math.round(num);
var floor=Math.floor(num);
var ceil=Math.ceil(num);
document.write("Number: "+num+"<br>Round off Value: "+round+"<br>Floor Value: "+floor+"<br>Ceil Value:"+ceil);

// Task 02

//Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number b. round off value of the number
// c. floor value of the number d. ceil value of the number

var num=parseFloat(prompt("Enter a Negative Integar: "));
var round=Math.round(num);
var flor=Math.floor(num);
var ceil1=Math.ceil(num);
document.write("Number: "+num+"<br>Round off Value: "+round+"<br>Floor Value: "+flor+"<br>Ceil Value:"+ceil1);

// Task 03.

//Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
 
var user=parseInt(prompt("Enter a number which gives you Absolute Value: "));
var num=Math.abs(user);
document.write("The Absolute Value of "+user+" is "+num);

// Task 04.
//Write a program that simulates a dice using random() method of JS Math class. 
// Display the value of dice in your browser.:

var num=(Math.random()*6 )+1;
var count=num.toFixed(0);
document.write("Randon dice Value: "+count);

// Task 05.
//Write a program that simulates a coin toss using random() method of JS Math class. 
// Display the value of coin in your browser

var toos=Math.random()*4;
var flor=Math.floor(toos);
if(flor===2){
  document.write(flor+"<br>Random coin value: Head");
}else
if(flor===1){
  document.write(flor+"<br>Random coin value: Tails");
}

// Task 06. 

//Write a program that shows a random number between 1 and 100 in your browser.

var num=Math.floor(Math.random()*100)+1;
num=num.toFixed(0);
document.write("Random number between 1 to 100: "+num);

//Task 07.

//Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.

var weight=parseFloat(prompt("Enter your Wieght: "));
document.write("The weight of user is: "+weight+" kilograms");

// Task 08.

// Write a program that stores a random secret number from 1 to 10 in a variable. 
// Ask the user to input a number between 1 and 10. If the user input equals the secret
// number, congratulate the user

var num=parseFloat(prompt("Enter a number between 1 to 10: "));
var num1=Math.floor(Math.random()*10)+1;
var count=1;

if(num1 === num){
  document.write("Congratulation!");
}else if(num > num1)
{
  count++;
  document.write("Try again!");
}else if(num < num1)
{
  count++;
  document.write("Try again1!");
}
*/
/************************* Chapter 31 to 34 **********************/

// Task 01.
/*
//Write a program that displays current date and time in your browser
 var date=new Date();
 document.write(date);

// Task 02.
var date=new Date();
var month=new Array();
month=['January','February','March','April','May','June','July', 'August','September','October','November','December'];
for(var i=0; i<=11; i++){
  month[i];
}
var m=month[date.getMonth()];
document.write("Current Month: "+m);

// Task 03.

//. Write a program that alerts the first 3 letters of the current day, 
// for example if today is Sunday then alert will show Sun.

var date=new Date();
var day= new Array();
day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
for(var i=0; i<=11; i++){
  day[i];
}
var today=day[date.getUTCDay()];
document.write("Today is "+today);

// Task 04.

// Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

var date=new Date();
var day= new Array();
day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
for(var i=0; i<=11; i++){
  day[i];
}
if(day[6]==='Saturday' || day[7]==='Sunday'){
  var today=day[date.getUTCDay()];
document.write("It's Fun Day Because Today is: "+today);
}

// Task 05.

// Write a program that shows the message “First fifteen days of the month” 
// if the date is less than 16th of the month else shows “Last days of the month”.

var d=new Date();
var date=d.getUTCDate();
if(date<16){
  document.write("First fifteen Days of the Month");
}else if(date>16){
  document.write("Last Days of the Month")
}

// Task 06.

//Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like to represent the Date object.

var a=new Date("Jan 1, 1970");
var date=new Date();
var aMili=date.getTime();
var aMinute= aMili/(1000*60*60);
document.write("Current Date: "+date+"<br>Elapsed millisecond since Jan 1, 1970: "+aMili+"<br>Elapsed minutes since Jan 1, 1970: "+aMinute);

// Task 07.

//Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

var date=new Date();
var hour=date.getHours();
var a= hour >= 12 ? 'PM' : 'AM';
document.write("It's "+a);

// Task 08.
//Write a program that creates a Date object for the last day of the last month of 2020 
// and assigns it to variable named laterDate.

var date= new Date();
var lastDay=new Date(date.getFullYear(),12,0);
document.write("Last Date: "+lastDay);

// Task 09.
//Create a date object of the starting date of this Ramadan and alert the number of days 
// past since 1st Ramadan? Note: 1st Ramadan was on April 24, 2020

var RamadanDate= new Date("April 25, 2020");
var date=new Date();
var diff=(date - RamadanDate) / (1000 * 60 * 60 * 24);
document.write(Math.floor(diff)+" days have passed since 1st Ramadan, 2020");

// Task 10.
// Write a program that displays in your browser the seconds that elapsed between the reference date and  the beginning of 2015.

var date = new Date("Dec 5, 2015");
var beginning = new Date("Jan 1, 2015");
var diff=(date - beginning)/1000;
document.write("On reference date "+date+", <br>"+diff+" Seconds has passed since begining of 2015");

// Task 11.
// . Create a Date object for the current date and time. Extract the hours, reset the date object 
// an hour ahead and finally display the date object in your browser.

var current= new Date();
document.write("Current Date: "+current+"<br>");

current.setHours(current.getHours()-1);
document.write("1 hour ago, it was: "+current);

// Task 12.
// Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

var d = new Date();
document.write("Current Date: "+d);

d.setFullYear(d.getFullYear()-100);
document.write("<br>100  years back, it was "+d);

// Task 13.
//Write a program to ask the user about his age. Calculate and show his birth year in your browser.

var userAge=new Date(prompt("Enter Your Age","Jan 1, 1970"));
var current=new Date();
var AgeCal=(current - userAge)/(1000 * 60 * 60 * 24 * 365.25);
document.write("Your age is: "+Math.floor(AgeCal)+"<br>Your birthday Year is: "+userAge.getFullYear());

// Task 14.
//Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off 
// to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


var custName=prompt("Enter Customer Name: ");
var month=prompt("Enter Current Month: ");
var NoUnit= parseFloat(prompt("Enter Number of Unit: "));
var chargeUnit=parseFloat(prompt("Enter the Charges per Unit: "));

var netAmount= NoUnit * chargeUnit;
var LateCharge= 350;
var grossAmount= netAmount + LateCharge;

document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: "+custName+"<br>Month: "+month+"<br>Number of Unit: "+NoUnit+"<br>Charges per Unit: "+chargeUnit+"<br>");
document.write("<brs><br><br>Net Amount Payable(with Due Date): "+netAmount+"<br>Late Payment SurCharge:"+LateCharge+"<br>Gross Amount Paybale (After Due Date): "+grossAmount);
*/
/************************* Chapter 35 to 38 **********************/

// Task 01.
//Write a function that displays current date & time in your browser.
/*
function date(a)
{ 
  var a = new Date();
  return (a);
}
var fun=date();
document.write("Current Date And Time: "+fun);

// Task 02.
// Write a function that takes first & last name and then it greets the user using his full name.

function name(a,b){
  a=prompt("Enter Your First Name: ");
  b=prompt("Enter Your Last Name: ");
  var fullName= a + " " + b;
  return (fullName);
}
var fun= name();
document.write("Hy! "+fun)

// Task 03.
//. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
 
function add(a,b){
  a=parseInt(prompt("Enter Your First Number: "));
  b=parseInt(prompt("Enter Your Last Number: "));
  var sum = a + b;
  document.write("The Sum of "+a+" and "+b+" is "+sum);
}
add();

// Task 04.
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. 
// Return and show the desired result in your browser.

function Calculator(a,b,op){
  a=parseInt(prompt("Enter Your First Number: "));
  b=parseInt(prompt("Enter Your Last Number: "));
  op=prompt("Enter Your Operator, (i.e. +, -, *, /, % ) What operation you want to perform: ");

  if(op==="+"){
    var sum = a + b ;
    document.write("The Sum of "+a+" and "+b+" is "+sum);
  }else if(op==="-"){
    var sub = a - b ;
    document.write("The Subtration of "+a+" and "+b+" is "+sub);
  }else if(op==="*"){
    var multi = a * b ;
    document.write("The Multiplication of "+a+" and "+b+" is "+multi);
  }else if(op==="/"){
    var div = a / b ;
    document.write("The Division of "+a+" and "+b+" is "+div);
  }else if(op==="%"){
    var rem= a % b ;
    document.write("The Reminder of "+a+" and "+b+" is "+rem);
  }else{
    document.write("Incorrect Character: ");
  }
  return 0;
}
Calculator();

// Task 05.
//Write a function that squares its argument

function square(a){
  a=parseInt(prompt("Enter a Number which print Square of that number: "));
  var sqr=a*a;
  document.write("The Square of "+a+" is "+sqr);
}
square();

// Task 06.
// Write a function that computes factorial of a number

function Factorial(num){

  var num=parseInt(prompt("Enter a number Which print a FActorial"));

  if(num===0 || num === 1){
    return (1);
  }
  for(var i=num-1; i>=1; i--){
    num *= i;
  }
  return num;

}
var a=Factorial();
document.write("The Factorial of is "+ a);

// Task 07.
//Write a function that take start and end number as inputs & display counting in your browser

function Counting(start,end){
   for(var i=start; i<=end; i++){
     document.write(i+"<br>");
   }
 }
var start=parseInt(prompt("Enter a start number:"));
var end=parseInt(prompt("Enter a end number:"));
Counting(start,end);

// Task 08.
//Write a nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

function calculateHypotensue(base,perp){

  function calculateSquare(num){
    return (num*num);
  }

  var hypo = calculateSquare(base) + calculateSquare(perp);
  sqr= Math.sqrt(hypo);
  return (hypo);

}
var base=parseInt(prompt("Enter a Base of right triangle: "));
var perp=parseInt(prompt("Enter a Perpendicular of right triangle: "));
var Right= calculateHypotensue(base,perp);
document.write("The Hypotenuse of a Right Triangle: "+Right);

// Task 09.
//Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
//  i. Arguments as value
// ii. Arguments as variables

function calculateArea(width,height){

  var area = width * height;
  return (area);
}
 width = 20;
 height = 10;
document.write("The width Area is: 20 <br>Height of Area is: 10 <br>Area of Rectangle is: "+calculateArea(width,height)+" square");

// Task 10.
// Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

function palindrome(word){
  var word = word.toLowerCase();
  var reverse= word.split("").reverse().join('');
  return (word===reverse);
}
var str=prompt("Enter a string Check it is Palindrome or not");
document.write("Is the given word palindrome: "+palindrome(str));

// Task 11.
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

  function FirstLetterUpper(str){
    var text = str.split(' ');
    var temp = [];

  for(var i=0; i<text.length; i++){
    temp.push(text[i].charAt(0).toUpperCase() + text[i].slice(1));
  }
  return (temp.join(' '));

}
alert(FirstLetterUpper("the quick brown fox"));

// Task 12.
//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

function longestWord(str) {
  var string = str.split(" ");
  var longest = 0;
  var word = null;
  for (var i = 0; i <= string.length - 1; i++) {
      if (longest < string[i].length) {
          longest = string[i].length;
          word = string[i];
      }
  }
  return word;
}
alert(longestWord("Web Development Tutorial"));

// Task 13.
// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count
// the number of occurrences of the specified letter within the string. Sample arguments : 'JSResourceS.com', 'o'

function CheckLetter(str,letter){

  var count=0;
  var string = str.split('');
  for(var i=0; i < string.length; i++){
    if(string[i] === letter){
      count++;
    }
  }
return (count);
}
var str = prompt("Enter a string");
var letter = prompt("Enter a letter");

document.write("This "+letter+" is present "+CheckLetter(str,letter)+" times");

// Task 14.
//Create 2 functions that calculate properties of a circle, using the definitions here.
  // Create a function called calcCircumference:
  //    • Pass the radius to the function.
  //    • Calculate the circumference based on the radius, and output
  // "The circumference is NN".
  // Create a function called calcArea:
  //    • Pass the radius to the function.
  //    • Calculate the area based on the radius, and output "The area is NN".
  // Circumference of circle = 2πr
  // Area of circle = πr2

  function calcCircumference(radius){

    var circumF = (2 * Math.PI * radius); 

    
    return (circumF);
  }
  function calcArea(rad){

    var area = (2 * Math.PI * rad) ;
    return (area);
  }
  var radius = 4;
  var rad = 4;
document.write("The Circumference of the Circle is: "+calcCircumference(radius)+"<br>The area of Circle is: "+calcArea(rad));
*/


/************************* Chapter 21 to 25 **********************/
// Task 01.      
//Write a program that takes two user inputs for first and last name using prompt 
//and merge them in a new variable titled fullName. Greet the user using his full name.
/*
var firstName=prompt("Enter Your First Name: ");
var lastName=prompt("Enter Your Last Name: ");
var FullName=firstName +" "+ lastName;
document.write("Hy! "+FullName+" welcome to our website.");

// Task 02. 
//Write a program to take a user input about his favorite mobile phone model. 
//Find and display the length of user input in your browser

var phone=prompt("Enter Your Favorite Mobile Model: ");
document.write("My favorite Phone is: "+ phone+"<br>Length of string: "+ phone.length);

// Task 03.
//Write a program to find the index of letter “n” in the word “Pakistani” 
//and display the result in your browser.

var word="Pakistani";
for(var i=0; i<word.length; i++){
    if(word.charAt(i)==='n'){
        document.write("String: "+word+"<br>Index of 'n': "+i);
    }
}

// Task 04.
// Write a program to find the last index of letter “l” in the word “Hello World” 
//and display the result in your browser.

var word="hello world";
var str = word.charAt(word.length-2);
document.write("String: "+word+"<br>Last Index of "+str+" : "+word.lastIndexOf(str));

// Task 05.
//Write a program to find the character at 3rd index in the word “Pakistani” 
//and display the result in your browser.

var word="Pakistani";
var str=word.charAt(3);
document.write("String: "+word+"<br>Character at Index 3: "+str);

//Task 06.
//epeat Q1 using string concat() method.

var firstName=prompt("Enter Your First Name: ");
var lastName=prompt("Enter Your Last Name: ");
var con= firstName.concat(lastName);
document.write("Hy! "+con+" welcome to our website.");

// Task 07.
//Write a program to replace the “Hyder” to “Islam” in theword “Hyderabad” 
//and display the result in your browser.

var str="Hyderabad";
var rep=str.replace("Hyder","Islam");
document.write("City: "+str+"<br> After replacement: "+rep);

//Task 08.
//Write a program to replace all occurrences of “and” in the string with “&” and 
//display the result in your browser. 
//var message = “Ali and Sami are best friends. They play cricket and football together.”;

var msg="Ali and Sami are best friends. They play cricket and football together.";
var str=msg.replace(/and/g,"&");
document.write("Messeage: "+msg+"<br> After Replacement: "+str);

//Task 09.
//Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

var value="472";
var num= parseInt(472);
document.write("Value: "+value+"<br>Type: "+typeof(value)+"<br> Value: "+num+"<br> Type: "+typeof(num));

//Task 10.
// Write a program that takes user input. Convert and show the input in capital letters.
 var a=prompt("Enter a String: ");
 var capital=a.toUpperCase();
 document.write("User Input: "+a+"<br>Upper Case: "+capital);

//Task 11.
//Write a program that takes user input. Convert and show the input in title case.

var str=prompt("Enter a String");
var firstChar=str.slice(0,1);
var lastChar=str.slice(1);
var firstChar=firstChar.toUpperCase();
var lastChar=lastChar.toLowerCase();
var strTitle=firstChar+lastChar;
document.write("User Input: "+str+"<br>Title Case: "+strTitle);

//Task 12.
const num=35.36;
const str=num.toString().replace(".", "");
document.write("Number: "+num+"<br>Result: "+str);

// Task 13.
//Write a program to take user input and store username in a variable. If the username contains 
//any special symbol among [@ . , !], prompt the user to enter a valid username.
//For character codes of [@ .


var userName=prompt("Enter User name: ");
// for(var i=0; i<userName.length; i++){
//     if(userName.charAt(i)==="@"|| userName.charAt(i)==="." || userName.charAt(i)==="," || userName.charAt(i)==="!"){
//        alert("Please Enter a Valid User Name: ");
//         break;
//     }
// }

// var char = String.fromCharCode(64)
// OR Using ASCII Code

// for(var i=0; i<userName.length; i++){
//     if(userName.charCodeAt(i)===(33) || userName.charCodeAt(i)===(44) || userName.charCodeAt(i)===(46) || userName.charCodeAt(i)===(64) ){
//        alert("Please Enter a Valid User Name: ");
//         break;
//     }
// }
//     alert("Name: "+userName);

// Task 14.
// You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]. Write a program 
// to enable “search by user input” in an array. After searching, prompt the user whether 
// the given item is found in the list or not. Note: Perform case insensitive search. Whether 
// the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. 

var array=["cake", "apple pie", "cookie", "chips", "patties"];
var arr=prompt("Welcome to ABC Bakery. What od you want to order sir/ma'am?");
var arr=arr.toLowerCase();

var incr=0;
for(var i=0; i<array.length; i++){

    if(array[i]===arr){
        incr=1;
        document.write(arr+" is <b>available</b> at index "+i+" in our bakery");
                      }
    }
    if(incr==0){
        document.write("We are sorry "+arr+" is <b>not available</b> in our bakery");
            }
            document.write("<br>" + "<br>");

// Task 15.

// Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
 
var password = prompt("Enter your password")

var numbers = false;
var lowerCaseLetter = false;
var upperCaseLetter = false;
var length = true;
var firstChar = true;


for (x = 0; x <= password.length - 1; x++) {
    if (password.charCodeAt(x) >= 97 && password.charCodeAt(x) <= 122) {
        lowerCaseLetter = true;
    }
    if (password.charCodeAt(x) >= 48 && password.charCodeAt(x) <= 57) {
        numbers = true;
    }
    if (password.charCodeAt(x) >= 65 && password.charCodeAt(x) <= 90) {
        upperCaseLetter = true;
    }

}

if (password.length <= 6) {
    length = false;
}

for (i = 0; i <= 10; i++) {
    if (password.startsWith(i, 0)) {
        firstChar = false;
    }
}

if (numbers == false || upperCaseLetter == false || lowerCaseLetter == false || length == false || firstChar == false) {
    alert("you enter an invalid password")
    if (numbers == false || upperCaseLetter == false || lowerCaseLetter == false) {
        alert("password must contain a upeercase letter, a lower case letter and a number")
    }
    if (length == false) {
        alert("lenght of password must be maximum 6 characters")
    }
    if (firstChar == false) {
        alert("password can not start with a number")
    }
}
else {
    alert("password approved")
}

// Task 16.

// Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”; Display the elements of array in your browser.

var uni="University Of Karachi";
var array=uni.split("");
for(var i=0; i<uni.length; i++){
  document.write(array[i]+"<br>");
}

// Task 17.

// Write a program to display the last character of a user input.

var user=prompt("Enter a String:");
var lastChar=user.charAt(user.length-1);
document.write("User Input: "+user+"<br>Last Character of input: "+lastChar);

// Task 18.
//You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of
//occurrences of word “the” in given string.

var str="The quick brown fox jumps over the lazy dog";
str=str.toLowerCase();
var word="the";
var temp=str.split(" ");
var count=0;
for(var i=0; i<temp.length; i++){
  if(word===temp[i]){
    count++;
  }
}
document.write(str+"<br>There are "+count+" occurance(s) of word "+word);
*/
/************************* Chapter 26 to 30 **********************/

// Task 01.
/*
//Write a program that takes a positive integer from user & display the following in your browser.
// a. number b. round off value of the number
// c. floor value of the number d. ceil value of the number

var num=parseFloat(prompt("Enter a Positive Integar: "));
var round=Math.round(num);
var floor=Math.floor(num);
var ceil=Math.ceil(num);
document.write("Number: "+num+"<br>Round off Value: "+round+"<br>Floor Value: "+floor+"<br>Ceil Value:"+ceil);

// Task 02

//Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number b. round off value of the number
// c. floor value of the number d. ceil value of the number

var num=parseFloat(prompt("Enter a Negative Integar: "));
var round=Math.round(num);
var flor=Math.floor(num);
var ceil1=Math.ceil(num);
document.write("Number: "+num+"<br>Round off Value: "+round+"<br>Floor Value: "+flor+"<br>Ceil Value:"+ceil1);

// Task 03.

//Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
 
var user=parseInt(prompt("Enter a number which gives you Absolute Value: "));
var num=Math.abs(user);
document.write("The Absolute Value of "+user+" is "+num);

// Task 04.
//Write a program that simulates a dice using random() method of JS Math class. 
// Display the value of dice in your browser.:

var num=(Math.random()*6 )+1;
var count=num.toFixed(0);
document.write("Randon dice Value: "+count);

// Task 05.
//Write a program that simulates a coin toss using random() method of JS Math class. 
// Display the value of coin in your browser

var toos=Math.random()*4;
var flor=Math.floor(toos);
if(flor===2){
  document.write(flor+"<br>Random coin value: Head");
}else
if(flor===1){
  document.write(flor+"<br>Random coin value: Tails");
}

// Task 06. 

//Write a program that shows a random number between 1 and 100 in your browser.

var num=Math.floor(Math.random()*100)+1;
num=num.toFixed(0);
document.write("Random number between 1 to 100: "+num);

//Task 07.

//Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.

var weight=parseFloat(prompt("Enter your Wieght: "));
document.write("The weight of user is: "+weight+" kilograms");

// Task 08.

// Write a program that stores a random secret number from 1 to 10 in a variable. 
// Ask the user to input a number between 1 and 10. If the user input equals the secret
// number, congratulate the user

var num=parseFloat(prompt("Enter a number between 1 to 10: "));
var num1=Math.floor(Math.random()*10)+1;
var count=1;

if(num1 === num){
  document.write("Congratulation!");
}else if(num > num1)
{
  count++;
  document.write("Try again!");
}else if(num < num1)
{
  count++;
  document.write("Try again1!");
}
*/
/************************* Chapter 31 to 34 **********************/

// Task 01.
/*
//Write a program that displays current date and time in your browser
 var date=new Date();
 document.write(date);

// Task 02.
var date=new Date();
var month=new Array();
month=['January','February','March','April','May','June','July', 'August','September','October','November','December'];
for(var i=0; i<=11; i++){
  month[i];
}
var m=month[date.getMonth()];
document.write("Current Month: "+m);

// Task 03.

//. Write a program that alerts the first 3 letters of the current day, 
// for example if today is Sunday then alert will show Sun.

var date=new Date();
var day= new Array();
day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
for(var i=0; i<=11; i++){
  day[i];
}
var today=day[date.getUTCDay()];
document.write("Today is "+today);

// Task 04.

// Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

var date=new Date();
var day= new Array();
day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
for(var i=0; i<=11; i++){
  day[i];
}
if(day[6]==='Saturday' || day[7]==='Sunday'){
  var today=day[date.getUTCDay()];
document.write("It's Fun Day Because Today is: "+today);
}

// Task 05.

// Write a program that shows the message “First fifteen days of the month” 
// if the date is less than 16th of the month else shows “Last days of the month”.

var d=new Date();
var date=d.getUTCDate();
if(date<16){
  document.write("First fifteen Days of the Month");
}else if(date>16){
  document.write("Last Days of the Month")
}

// Task 06.

//Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like to represent the Date object.

var a=new Date("Jan 1, 1970");
var date=new Date();
var aMili=date.getTime();
var aMinute= aMili/(1000*60*60);
document.write("Current Date: "+date+"<br>Elapsed millisecond since Jan 1, 1970: "+aMili+"<br>Elapsed minutes since Jan 1, 1970: "+aMinute);

// Task 07.

//Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

var date=new Date();
var hour=date.getHours();
var a= hour >= 12 ? 'PM' : 'AM';
document.write("It's "+a);

// Task 08.
//Write a program that creates a Date object for the last day of the last month of 2020 
// and assigns it to variable named laterDate.

var date= new Date();
var lastDay=new Date(date.getFullYear(),12,0);
document.write("Last Date: "+lastDay);

// Task 09.
//Create a date object of the starting date of this Ramadan and alert the number of days 
// past since 1st Ramadan? Note: 1st Ramadan was on April 24, 2020

var RamadanDate= new Date("April 25, 2020");
var date=new Date();
var diff=(date - RamadanDate) / (1000 * 60 * 60 * 24);
document.write(Math.floor(diff)+" days have passed since 1st Ramadan, 2020");

// Task 10.
// Write a program that displays in your browser the seconds that elapsed between the reference date and  the beginning of 2015.

var date = new Date("Dec 5, 2015");
var beginning = new Date("Jan 1, 2015");
var diff=(date - beginning)/1000;
document.write("On reference date "+date+", <br>"+diff+" Seconds has passed since begining of 2015");

// Task 11.
// . Create a Date object for the current date and time. Extract the hours, reset the date object 
// an hour ahead and finally display the date object in your browser.

var current= new Date();
document.write("Current Date: "+current+"<br>");

current.setHours(current.getHours()-1);
document.write("1 hour ago, it was: "+current);

// Task 12.
// Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

var d = new Date();
document.write("Current Date: "+d);

d.setFullYear(d.getFullYear()-100);
document.write("<br>100  years back, it was "+d);

// Task 13.
//Write a program to ask the user about his age. Calculate and show his birth year in your browser.

var userAge=new Date(prompt("Enter Your Age","Jan 1, 1970"));
var current=new Date();
var AgeCal=(current - userAge)/(1000 * 60 * 60 * 24 * 365.25);
document.write("Your age is: "+Math.floor(AgeCal)+"<br>Your birthday Year is: "+userAge.getFullYear());

// Task 14.
//Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off 
// to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


var custName=prompt("Enter Customer Name: ");
var month=prompt("Enter Current Month: ");
var NoUnit= parseFloat(prompt("Enter Number of Unit: "));
var chargeUnit=parseFloat(prompt("Enter the Charges per Unit: "));

var netAmount= NoUnit * chargeUnit;
var LateCharge= 350;
var grossAmount= netAmount + LateCharge;

document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: "+custName+"<br>Month: "+month+"<br>Number of Unit: "+NoUnit+"<br>Charges per Unit: "+chargeUnit+"<br>");
document.write("<brs><br><br>Net Amount Payable(with Due Date): "+netAmount+"<br>Late Payment SurCharge:"+LateCharge+"<br>Gross Amount Paybale (After Due Date): "+grossAmount);
*/
/************************* Chapter 35 to 38 **********************/

// Task 01.
//Write a function that displays current date & time in your browser.
/*
function date(a)
{ 
  var a = new Date();
  return (a);
}
var fun=date();
document.write("Current Date And Time: "+fun);

// Task 02.
// Write a function that takes first & last name and then it greets the user using his full name.

function name(a,b){
  a=prompt("Enter Your First Name: ");
  b=prompt("Enter Your Last Name: ");
  var fullName= a + " " + b;
  return (fullName);
}
var fun= name();
document.write("Hy! "+fun)

// Task 03.
//. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
 
function add(a,b){
  a=parseInt(prompt("Enter Your First Number: "));
  b=parseInt(prompt("Enter Your Last Number: "));
  var sum = a + b;
  document.write("The Sum of "+a+" and "+b+" is "+sum);
}
add();

// Task 04.
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. 
// Return and show the desired result in your browser.

function Calculator(a,b,op){
  a=parseInt(prompt("Enter Your First Number: "));
  b=parseInt(prompt("Enter Your Last Number: "));
  op=prompt("Enter Your Operator, (i.e. +, -, *, /, % ) What operation you want to perform: ");

  if(op==="+"){
    var sum = a + b ;
    document.write("The Sum of "+a+" and "+b+" is "+sum);
  }else if(op==="-"){
    var sub = a - b ;
    document.write("The Subtration of "+a+" and "+b+" is "+sub);
  }else if(op==="*"){
    var multi = a * b ;
    document.write("The Multiplication of "+a+" and "+b+" is "+multi);
  }else if(op==="/"){
    var div = a / b ;
    document.write("The Division of "+a+" and "+b+" is "+div);
  }else if(op==="%"){
    var rem= a % b ;
    document.write("The Reminder of "+a+" and "+b+" is "+rem);
  }else{
    document.write("Incorrect Character: ");
  }
  return 0;
}
Calculator();

// Task 05.
//Write a function that squares its argument

function square(a){
  a=parseInt(prompt("Enter a Number which print Square of that number: "));
  var sqr=a*a;
  document.write("The Square of "+a+" is "+sqr);
}
square();

// Task 06.
// Write a function that computes factorial of a number

function Factorial(num){

  var num=parseInt(prompt("Enter a number Which print a FActorial"));

  if(num===0 || num === 1){
    return (1);
  }
  for(var i=num-1; i>=1; i--){
    num *= i;
  }
  return num;

}
var a=Factorial();
document.write("The Factorial of is "+ a);

// Task 07.
//Write a function that take start and end number as inputs & display counting in your browser

function Counting(start,end){
   for(var i=start; i<=end; i++){
     document.write(i+"<br>");
   }
 }
var start=parseInt(prompt("Enter a start number:"));
var end=parseInt(prompt("Enter a end number:"));
Counting(start,end);

// Task 08.
//Write a nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

function calculateHypotensue(base,perp){

  function calculateSquare(num){
    return (num*num);
  }

  var hypo = calculateSquare(base) + calculateSquare(perp);
  sqr= Math.sqrt(hypo);
  return (hypo);

}
var base=parseInt(prompt("Enter a Base of right triangle: "));
var perp=parseInt(prompt("Enter a Perpendicular of right triangle: "));
var Right= calculateHypotensue(base,perp);
document.write("The Hypotenuse of a Right Triangle: "+Right);

// Task 09.
//Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
//  i. Arguments as value
// ii. Arguments as variables

function calculateArea(width,height){

  var area = width * height;
  return (area);
}
 width = 20;
 height = 10;
document.write("The width Area is: 20 <br>Height of Area is: 10 <br>Area of Rectangle is: "+calculateArea(width,height)+" square");

// Task 10.
// Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

function palindrome(word){
  var word = word.toLowerCase();
  var reverse= word.split("").reverse().join('');
  return (word===reverse);
}
var str=prompt("Enter a string Check it is Palindrome or not");
document.write("Is the given word palindrome: "+palindrome(str));

// Task 11.
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

  function FirstLetterUpper(str){
    var text = str.split(' ');
    var temp = [];

  for(var i=0; i<text.length; i++){
    temp.push(text[i].charAt(0).toUpperCase() + text[i].slice(1));
  }
  return (temp.join(' '));

}
alert(FirstLetterUpper("the quick brown fox"));

// Task 12.
//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

function longestWord(str) {
  var string = str.split(" ");
  var longest = 0;
  var word = null;
  for (var i = 0; i <= string.length - 1; i++) {
      if (longest < string[i].length) {
          longest = string[i].length;
          word = string[i];
      }
  }
  return word;
}
alert(longestWord("Web Development Tutorial"));

// Task 13.
// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count
// the number of occurrences of the specified letter within the string. Sample arguments : 'JSResourceS.com', 'o'

function CheckLetter(str,letter){

  var count=0;
  var string = str.split('');
  for(var i=0; i < string.length; i++){
    if(string[i] === letter){
      count++;
    }
  }
return (count);
}
var str = prompt("Enter a string");
var letter = prompt("Enter a letter");

document.write("This "+letter+" is present "+CheckLetter(str,letter)+" times");

// Task 14.
//Create 2 functions that calculate properties of a circle, using the definitions here.
  // Create a function called calcCircumference:
  //    • Pass the radius to the function.
  //    • Calculate the circumference based on the radius, and output
  // "The circumference is NN".
  // Create a function called calcArea:
  //    • Pass the radius to the function.
  //    • Calculate the area based on the radius, and output "The area is NN".
  // Circumference of circle = 2πr
  // Area of circle = πr2

  function calcCircumference(radius){

    var circumF = (2 * Math.PI * radius); 

    
    return (circumF);
  }
  function calcArea(rad){

    var area = (2 * Math.PI * rad) ;
    return (area);
  }
  var radius = 4;
  var rad = 4;
document.write("The Circumference of the Circle is: "+calcCircumference(radius)+"<br>The area of Circle is: "+calcArea(rad));
*/




/************************* Chapter 38 to 42 **********************/
// Task 01.      
//Write a custom function power ( a, b ), to calculate the value of a raised to b. 
/*
function Power(a,b){
    var power = Math.pow(a,b);
    return (power);
    
}
var x=2; 
var y= 3;
document.write("The Base is "+x+" and Power is "+y+" Answer is "+Power(x,y));
*/

// Task 02.
//2. Any year is entered through the keyboard. Write a function to determine 
//whether the year is a leap year or not. Leap years ..., 2012, 2016, 2020, …
/*
var year = prompt("Enter a Year!");
if(year % 400 === 0){
    document.write(year+" is Leap Year.")
    }else if(year % 4=== 0 ){
        document.write(year+" is Leap Year.")
    }
    else{
        document.write(year+" is not a Leap Year.")
    }

//Task 03.
// If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by 
//area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2 
//Calculate area of triangle using 2 functions
/*
var a = parseInt(prompt("Enter The First side of the Triangle: "));
var b = parseInt(prompt("Enter The Second side of the Triangle: "));
var c = parseInt(prompt("Enter The Third side of the Triangle: "));

function SegmentOfTriangle(a,b,c){
    var s = (a+b+c)/2;
    return (s);
}

function Area(a,b,c){
    var s = SegmentOfTriangle(a,b,c);
    var area = (s*(s-a)*(s-b)*(s-c));

    return(area);
}
document.write("Since a ="+a+" ,b = "+b+" and c = "+c+" are the sides of Triangle <br> The Area of Triangle is "+Area(a,b,c));

 //Task 04.
//Write a function that receives marks received by a student in 3 subjects and 
// returns the average and percentage of these marks. there should be 3 functions 
// one is the mainFunction and other are for average and percentage. Call those 
// functions from mainFunction and display result in mainFunction.

var a = parseInt(prompt("Enter The First Subject Marks: "));
var b = parseInt(prompt("Enter The Second Subject Marks: "));
var c = parseInt(prompt("Enter The Third Subject Marks: "));
var total = parseInt(prompt("Enter The Total Marks: "));

function averageMarks(a,b,c){
    var av = (a+b+c)/3;
    return(av);
}
function percentageMarks(a,b,c,total){
    var per = ((a+b+c)/total)*100;
    return (per);
}
function Main(){
    var aver = averageMarks(a,b,c);
    var percen = Math.round(percentageMarks(a,b,c,total));
    
    document.write("The Average Marks is "+aver+"<br>The Percentage is "+percen+" %");
}
Main();

//Task 05.
// You have learned the function indexOf. Code your own custom function that 
// will perform the same functionality. You can code for single character as of now.

var str1 = "Pakistan is beautiful country";
var bool;
function index(str1,str){
 
    for(var i=0; i<=str1.length; i++){
        if(str1[i]===str){
            bool = 1;
            document.write(i);
        }
    }
    bool = 0;
    if(bool = 0){
    document.write("The given word is not walid");
    }
}
index("is");

// Task 06
//Write a function to delete all vowels from a sentence. Assume that the sentence 
//is not more than 25 characters long.

var str = "Pakistan is beautiful country";

 function removeVowel(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    
    return( 
        str.split('').filter(
        function(vol) {
      return (vowels.indexOf(vol.toLowerCase()) == -1);
                    }
                            ).join('')
          );
  }
  
  document.write(removeVowel("Pakistan"));

// Task 07.
//Write a function with switch statement to count the number of occurrences of any 
// two vowels in succession in a line of text. For example, in the sentence
// “Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui.


function findVowel(){
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
   
    for(var i = 0; i<=str.length; i++)
    {
        if((str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'u' )&&(str[i+1] === 'a' || str[i+1] === 'e' || str[i+1] === 'i' || str[i+1] === 'u')){
            count++;
        }
  
    }
    document.write("There are "+count+" occurences of two vowels in succession")
}
findVowel();


// Task 08.
// The distance between two cities (in km.) is input through the keyboard. Write four 
//functions to convert and print this distance in meters, feet, inches and centimeters.


function meters(km){
    return(km/1000);
} 
function feet(km){
    return(km/3280.84);
}
function inches(km){
    return(km/39370.1);
}
function centimeters(km){
    return(km/100000);
}
var km = parseFloat(prompt("Enter The distance between two cities (in km)"));
var m = meters(km);
var f =feet(km);
var i = inches(km);
var c = centimeters(km);

document.write("<br>The distance Between Two Cities in meter is "+m+" meters");
document.write("<br>The distance Between Two Cities in Feet is "+f+" feet");
document.write("<br>The distance Between Two Cities in Inches is "+i+" inches");
document.write("<br>The distance Between Two Cities in Centimeters is "+c+" cm");

// Task 09
// Write a program to calculate overtime pay of employees. Overtime is paid at the 
// rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that 
// employees do not work for fractional part of an hour.


function overTime(){
    var over = 0;
    var time = parseInt(prompt("Enter the Hours for an employee worked above 40 hours: "));
    var i=1;
    while(i<=time){
        over = i*12;
        i++;
    }
    document.write("Over time of Employee is "+over)
}
overTime();

// Task 10
// A cashier has currency notes of denominations 10, 50 and 100. If the amount to be 
// withdrawn is input through the keyboard in hundreds, find the total number of currency
// notes of each denomination the cashier will have to give to the withdrawer.

var amount = parseFloat(prompt("How many Amount you are going to withdraw:"));
function withdraw(amount){

    var hundred = (amount / 100);
    var fifty = (amount % 100) /50;
    var ten = ((amount % 100) %50)/10;
    var remain = (((amount % 100) % 50) % 10);

    document.write("<br>You will have "+Math.floor(hundred)+" hundred notes "+Math.floor(fifty)+" Fifty notes "+Math.floor(ten)+" ten notes");
}
withdraw(amount);
*/

/************************* Chapter 43 to 48 **********************/
// Task 01.
// Show an alert box on click on a link
/*
function boxShow(){
    alert("Hello!");
}
// Task02 
// Display some Mobile images in browser. On click on an image Show the message in alert to user.

//Task 03
// Display 10 student records in table and each row should contain a delete button. 
// If you click on a button to delete a record, entire row should be deleted. 

function Delete(row){
    var a = row.parentNode.parentNode.rowIndex;
    document.getElementById('stdTable').deleteRow(a);   
}

// Task 04. 
//Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.

// Task 05 
//Show a counter in browser. Counter should increase on click on increase button 
// and decrease on click on decrease button. And show updated counter value in browser.
var count = 0;
function Increase(){
    count += 1;
    document.getElementById('count').innerHTML = count;
}
function Decrease(){
    count -= 1;
    document.getElementById('count').innerHTML = count;
}
*/
/************************* Chapter 49 to 52 **********************/
// Task 01 Create a signup form and display form data in your web page on submission.
/*

function signup(){
    var print = document.getElementById('email').value;
    var print1 = document.getElementById('pass').value;

    document.getElementById('p1').innerHTML="Email: "+print+"<br>Pawssord: "+print1;
    document.getElementById('div').display='none';
}


// Task 02
// Suppose in your webpage there is content area in which you have entered your item details, 
// but user can only see some details on first look. When user clicks on “Read more” button, 
// full detail of that particular item will be displayed. 

function readMore(){
    var text = "Early life. Abdul Sattar Edhi was born on 28 July 1928 in Bantva, Gujarat, British India (present-day India) to a Memon family. When Edhi was eleven years old, his mother became paralysed from a stroke and died by the time he turned nineteen in 1947. Founded: Edhi Foundation Born: 28 February 1928, Bantva Spouse: Bilquis Edhi Died: 8 July 2016";
    var paragraph = document.getElementById('para').innerHTML = text;
}

//Task 03 
// In previous assignment you have created a tabular data using javascript. Let’s modify 
// that. Create a form which takes student’s details and show each student detail in table. 
// Each row of table must contain a delete button and an edit button. On click on delete 
// button entire row should be deleted. On click on edit button, a hidden form will appear 
// with the values of that row.

function Delete(row){
    var a = row.parentNode.parentNode.rowIndex;
    document.getElementById('stdTable').deleteRow(a);   
}
function Add(row){
    var add = row.parentNode.parentNode.rowIndex;
    document.getElementById('stdTable').insertRow(add);
}

var count =0;
myFunction = function () {
    Value1 = document.getElementById('jhone').value
    // Value2= document.getElementById('inputtwo').value;
    // Value3 = document.getElementById('inputthree').value;

var R = document.getElementById("stdTable").rows.length;
one = 1;
I = R + one;
var table = document.getElementById("stdTable");
var x = table.insertRow(R);
    x.onclick = function(e){
         count = this.rowIndex;  
         var value = [];
        //for(var i=0;i<3;i++){
         var cell0 = x.cells[0];
         var inp1 = cell0.getElementsByTagName('td');
            value.push(inp1[0].value);
       // }    
        document.getElementById('jhone').value = value[0];   
        // document.getElementById('inputtwo').value = value[1];
        // document.getElementById('inputthree').value = value[2];
      }
// x.insertCell(0).innerHTML = "<input type='text' value='" + Value3 + "' name='" + I + "'>";
// x.insertCell(0).innerHTML = "<input type='text' value='" + Value2 + "' name='" + I + "'>";
x.insertCell(0).innerHTML = "<input type='text' value='" + Value1 + "' name='" + I + "'>";
} 
*/
/************************* Chapter 53 to 57 **********************/

// Task 01 
//Image Light box With Array

// function lightBox(){
//     document.getElementById('model_gallery').style.display = 'block';
//     document.getElementById('gallery').style.display = 'none';
//   }
  
//   var img_arr = [
//     'images/1.jpg',
//     'images/2.jpg',
//     'images/3.jpg',
//     'images/4.jpg',
//     'images/5.jpg',
//     'images/6.jpg',
//     'images/7.png',
//     'images/8.jpg'
//   ];
  
//   var img = document.getElementById('model_img');
//   var i = img_arr.length;
//   function previous_img(){
//     i--;
//     img.src = img_arr[i];
//     if(i<0){
//       i = 7;
//       img.src = img_arr[i];
//     }
//   }
  
//   function next_img(){
//     i++;
//     img.src = img_arr[i];
//     if(i>7){
//       i = 0;
//       img.src = img_arr[i];
//     }
//   }
  
//   function close_img_model(){
//     document.getElementById('model_gallery').style.display = 'none';
//     document.getElementById('gallery').style.display = 'block';
//   }
  
  
  // Task 2
  // Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).
  //  On each click on “zoom in”(+) , add 10px in font size of paragraph.
  //  And on each click on “zoom out”(-) , minus 10px in font size of paragraph
  
  var p = document.getElementById('para');
  
  function incr_f_size(){
    p.style.fontSize = '30px';
  }
  
  function dcr_f_size(){
    p.style.fontSize = '15px';
  }









/************************* Chapter 58 to 67 **********************/
// Task 01
// i. Get element of id “main-content” and assign them in a variable.
// ii. Display all child elements of “main-content” element.
// iii. Get all elements of class “render” and show their innerHTML
// in browser.
// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.


// i. Get element of id “main-content” and assign them in a variable.
// ii. Display all child elements of “main-content” element.

// var main = document.getElementById('main-content');
// console.log(main)

// iii. Get all elements of class “render” and show their innerHTML
// in browser.

// var r = document.getElementsByClassName('render');
// console.log(r);

// iv. Fill input value whose element id first-name using javascript.

// document.getElementById('first-name').value = 'Shahbaz';

//// v. Repeat part iv for id ”last-name” and “email”.

// document.getElementById('last-name').value = 'Khan';

// document.getElementById('emaill').value = 'shahbaz.khan3845@gmail.com';


// Task 2
// use HTML code of question 1 and show the result on browser.


// i. What is node type of element having id “form-content”.

// var x = document.getElementById("form-content").nodeType;
// console.log(x);


// ii. Show node type of element having id “lastName” and its child node.

// var x = document.getElementById("lastName");
// x.nodeType;
// x.childNodes;
// console.log(x)

// iv. Get First and last child of id “main-content”.

// var a = document.getElementById('main-content').firstChild;
// var b = document.getElementById('main-content').lastChild;
// console.log(a,b);

// v. Get next and previous siblings of id “lastName”.

// var l = document.getElementById('lastName').previousSibling;
// var m = document.getElementById('lastName').nextSibling;
// console.log(l,m);

// vi. Get parent node and node type of element having id “email”

// var e = document.getElementById('emaill');
// e.parentNode;
// s = e.nodeType;
// console.log(e,s);























