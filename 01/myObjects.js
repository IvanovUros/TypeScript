"use strict";
exports.__esModule = true;
var User = {
    name: 'uros',
    email: 'uros@gmail.com',
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: 'Uros', isPaid: false, email: 'Uros@gmail.com' };
createUser({ name: 'uros', isPaid: false });
createUser(newUser);
function createCourse() {
    return { name: 'reactjs', price: 399 };
}
