///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
console.log("Answer 1: ");
const summedPrice = cart.reduce((total, curr) => total + curr.price, 0);
console.log("Sum of all the food = " + summedPrice + "$");



//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/
console.log("Answer 2: ")
//CODE HERE
function calcFinalPrice(carTotal, couponValue, tax){

   let carTax = carTotal * tax;
   //console.log(carTax);
   const finalPrice = carTotal - couponValue + carTax;
   return finalPrice;
}
console.log("Final price of the car is = " + calcFinalPrice(5000, 100, 0.06) + "$");

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/
console.log("Answer 3: ");
/*
    TEXT ANSWER HERE
> I would like to have these 4 properties in the customer object:
'firstname', 'lastname', phone-number and 'email'.
> The firstname and lastname properties will help us in identification.
> The phone-number is the most helpful information to contact the customer.
> email-id helps us to inform the customer on any deals or any information.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
class customer{   

    constructor( firstname, lastname, phone, email ){
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;    
        this.email = email;
      }
}

const customerOne = new customer('Ananya', 'Kumaraswamy', 97298978, 'ananya.gmail.com');

console.log("Customer one details: ",customerOne);
