//*********************************************** class number 3 *******************************************//
// any ********************************************************************/
var test1 = false;
test1 = 2567;
test1 = "summai shah";
test1 = true;
console.log(typeof test1);
// unknown **********************************************************/
// This prints the datatype of the value as undefined:
var test2;
test2 = 2567;
test2 = "summai shah";
test2 = true;
console.log(typeof test2);
// function *************************************************************/
function first(var1) {
    return (console.log("".concat(var1)));
}
first("summai shah");
// arrow function **********************************************************/
var first2 = function (var2) {
    return (console.log("".concat(var2)));
};
first2("mhummad nadeem khan");
// split **********************************************************/
// Split only accesses numbers:
// Before returning, the function's return type is void.
// And when we define any datatype in the return statement, the return type changes accordingly.
var variable1 = function (palian) {
    var variable2 = palian.split("").reverse().join();
    return variable2;
};
console.log(variable1("summai shah"));
// default parameters ***************************************************/
// example No.1
var greet2 = function (userName, userEmail) {
    return "welcome, ".concat(userName, " and your id is ").concat(userEmail);
};
console.log(greet2("summai shah"));
// example No.2
// Function with if, elseif, and else conditions:
function greet(userName, userEmail) {
    if (!userName) {
        console.log("Name not found");
        return;
    }
    else if (!userEmail) {
        console.log("Email not found");
        return;
    }
    return "User: ".concat(userName, ", Email: ").concat(userEmail);
}
var result = greet("summaishah", "summ@ishahgmail.com");
console.log(result);
// Array
// In TypeScript, an array is a datatype that can store multiple values of different datatypes sequentially.
// example no.1
var number1 = [1, 2, 3, 4, 5];
// // example no.2
var number2 = new Array(1, 2, 3, 4, 5);
// // example no.3
var number3 = Array("first", "second", "third", "fourth", "fifth");
console.log(number3.length);
console.log(number3[4]);
