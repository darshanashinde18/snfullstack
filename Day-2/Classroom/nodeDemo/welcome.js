var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.showName = function (uname, email) {
        console.log("welcome to TS ".concat(uname, " ").concat(email));
    };
    return MyClass;
}());
var userdata = ['admin', 'manager'];
console.log.apply(console, userdata);
var classDemo = new MyClass();
classDemo.showName('admin', 'aa@mn.com');
