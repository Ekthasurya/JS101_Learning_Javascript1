var name1 = "suraj";
var name2 = "suraj";

if(name1==name2)
{
  console.log("Names are Equal");
}
else
{
  console.log("Names are not equal");
}


var total_bill = 399;
var discount_start_price = 500;

if(total_bill>=discount_start_price){
  console.log("Discount Availaible");
}
else{
  console.log("No discount");
}


var total_bill = 399;

if(total_bill > 1000)
{
  console.log("20 % discount");
}
else if(total_bill > 500)
{
  console.log("10 % discount");
}
else
{
  console.log("No discount");
}



var rice_availaible = false ;
var wheat_availaible = false;
var apple_availaible = true;

if(rice_availaible)
{
  console.log("Buy rice");
}
else if(wheat_availaible)
{
  console.log("Buy Wheat");
}
else if(apple_availaible)
{
  console.log("Buy apple");
}
else
{
  console.log("Nothing is availaible");
}


//Logical Operator

(or)
var a = true;
var b = true;

var c = a && b;
console.log(c);

a = true;
b = false;
console.log(a&&b);

a = false;
b = true;
console.log(a&&b);

a = false;
b = false;
console.log(a&&b);

//Ist Part : Without AND

if(5>3)
{
	if(6>3)
	{
		console.log("Both are true");
	}
}

// IInd Part : With AND

if(5>3 && 6>3)
{
	console.log("Both are true");
}


//For English Subject, Check whether Rahul passed or not

var subject = "english";
var passing_marks = 70;

var rahul_marks = 75;
var rahul_subject = "english";

if((rahul_subject == subject) && (rahul_marks >= passing_marks))
{
	console.log("Rahul Passed");
}
else
{
	console.log("Rahul not passed");
}


var a = 2;
var b = 3;
var c = "hello";

console.log(a,b,c);
console.log(a+b+c);

// Case 2 : Integers
var a = 2;
var b = 3;
console.log(a+b);
console.log(a,b);

// Case 3 : Strings
var a = "Hello";
var b = "World";

console.log(a+b);

// Case 4 : Integer with Strings
var a = 2;
var b = "hello";

console.log(a,b);
console.log(a+b);

(OR)

var a = true;
var b = true;

var c = a || b;
console.log(c);

a = true;
b = false;
console.log(a||b);

a = false;
b = true;
console.log(a||b);

a = false;
b = false;
console.log(a||b);

console.log(true || false || true);
console.log(false || true || false);
console.log(false || false || true);

var number = 16;
var remainder = number % 3;

if(remainder == 0)
{
  console.log("Multiple of 3");
}
else
{
  console.log("Not multiple of 3");
}

var yob = 1996;
var age = 2021-yob;

console.log(age);
if(age >= 18){
  console.log("Can Apply for license");
}
else{
  console.log("NA");
}


//Swicth case

var option = 1;

switch(option)
{
	case 1 :
				   console.log("Day 1 : Scrum + Coding");

	case 2 :
					 console.log("Day 2 : Scrum + Coding + Skillathon");

	case 3 :
					 console.log("Day 3 : Scrum + Skillathon + Standups");

	default :
							console.log("Holiday");

}

//with break

var option = 5;

switch(option)
{
	case 1 :
				   console.log("Day 1 : Scrum + Coding");
					 break;

	case 2 :
					 console.log("Day 2 : Scrum + Coding + Skillathon");
					 break;

	case 3 :
					 console.log("Day 3 : Scrum + Skillathon + Standups");
           break;

	default :
					 console.log("Holiday");
}

//Problem 2 : Given any character, if it is a vowel print "Vowel"

var char = "s";

if((char == "a") || (char=="e") || (char=="i") || (char=="o") || (char=="u") )
{
  console.log("is a vowel");
}
else{
  console.log("not a vowel");
}


//Switch Case
var char = "j";

switch(char)
{
	case "a":
	case "e":
	case "i":
	case "o":
	case "u":console.log("vowel");
	          break;
	default : console.log("Not a vowel");
}




