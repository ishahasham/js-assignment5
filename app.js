// Chapter 21-25 
// // String method 

var linebreak="<br>";

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

var name1=prompt("Enter your first name");
var name2=prompt("Enter your last name");
var full=name1+" "+name2;
console.log("Hello "+full);

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

var phone=prompt("Enter your favorite mobile phone model:");
document.write("My favorite phone is : "+phone+linebreak+"length of string: "+phone.length);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser

var a1="Pakistani";
var a2=a1.indexOf("n");
document.write(linebreak+"String: "+a1+linebreak+"index of 'n': "+a2)

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

var a3="Hello world";
var a4=a3.lastIndexOf("l");
document.write(linebreak+"String: "+a3+linebreak+"index of 'n': "+a4)

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

var char=a1.charAt(3);
document.write(linebreak+"String: "+a1+linebreak+"Character at index 3: "+char)

// 6. Repeat Q1 using string concat() method.

var name1=prompt("Enter your first name");
var name2=prompt("Enter your last name");
var full=name1.concat(" "+name2);
console.log("Hello "+full);

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

var a5="Hyderabad";
var a6=a5.replace("Hyder","Islam");
document.write(linebreak+"City: "+a5+linebreak+"After replacement: "+a6)

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

var a7="Ali and Sami are best friends. They play cricket and football together.";
var a8=a7.replace(/and/g,"&");
console.log(a8);

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

var a9="427";
var a10=Number(a9);
document.write(linebreak+"Value: "+a9+linebreak+"Type: "+typeof a9+linebreak+"Value"+a10+linebreak+"Type: "+typeof a10);

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

var a11="peanut";
var a12=a11.toUpperCase();
document.write(linebreak+"User input: "+a11+linebreak+"Upper case: "+a12);

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var a13=35.36;
var a14=a13.toString().replace(".","");
document.write(linebreak+"Number: "+a13+linebreak+"Result: "+a14);


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability.

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search=prompt("Welcome to ABC Bakery. What do you want to order sir/madam?");
var update=search.toLowerCase();
var flag=false;
for(i=0; i<A.length; i++){
    if(A[i]===update){
        flag=true;
        break;
    }
}
    
if(flag===true){
    document.write(linebreak+search+"is <b>available</b> at index "+i+" in our bakery")
}
else{
    document.write(linebreak+"We are sorry."+search+" is <b>not available</b> in our bakery.")
}

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

var password=prompt("Enter your password");
var flag=false;
for(var i=0; i<password; i++){
    if(password.length[i]<6 || password.length[i]==toString || password[i]!=Number){
        flag=true;
        break;
    }
   
}
if(flag===true){
    alert("Incorrect password")
    password=prompt("Enter valid password now")
}
else{
    alert("Now password is correct")
}

// 17. Write a program to display the last character of a user
// input.

var a15=prompt("User input:");
document.write(linebreak+"User input: "+a15+linebreak+"Last character of index: "+a15.charAt(a15.length -1));

// question for 21 -25

// Type the characters that are missing from this code. var allLower =
// userInput.toLowerCase; Note: Correct this statement by yourself.
var allLower =userInput.toLowerCase(); 

// Convert the string represented by x to lower-case and assign the result to
// the same variable.
var x="ABCD"
x=x.toLowerCase();

// Convert the string represented by y to upper-case and assign the result to
// the same variable.
var y="abcd"
 y= y.toUpperCase();

// Display in an alert the upper-case version of the string represented by a
// variable.
alert(variable.toUpperCase());

// &quot;captain&quot; has been assigned to variable “sameWords”. You want to slice
// &quot;ap&quot; out of it.
var sameWords="captain"
sameWords = sameWords.slice(1, 3);

// The number of characters in the string will be assigned to the variable.
var numberOfCharacters = yourString.length;

// Find the the 5th character in a string represented by input and assign it
// to cha, which hasn&#39;t been declared beforehand.
var cha = input.charAt(4);