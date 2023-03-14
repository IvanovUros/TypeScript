"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
    // return 'hello'
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper('uros');
signUpUser('uros', 'ivanov', false);
loginUser('h', "h@h.com");
// function getValue(myVal: number) {
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }
var getHello = function (s) {
    return "";
};
var heroes = ["thor", "spiderman", "ironman"];
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
