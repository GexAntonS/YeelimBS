function createPoint(x, y) { //factory method
    // return {x: x, y: y}
    return {x, y}
}
const my_point = createPoint(3,4);
const his_point = createPoint(5,6);

function displayPoint(z) {
    console.log(`x = ${this.x}; y = ${this.y}; z = ${z}`);
}

const displayMyPoint = displayPoint.bind(my_point, 20);   //у всех обьектов функции есть функция bind -- !мы не вызываем дисплей поинт!
const displayHisPoint = displayPoint.bind(his_point, 100);

displayMyPoint();
displayHisPoint();


// displayPoint.my_bind = function (thisObject) {
Function.prototype.my_bind = function (thisObject, ...args) { //!это не спред оператор!
    // return this.bind(thisObject); !trick!
    const objFn = this;
    return function () {
        return objFn.call(thisObject, args);
    }
}

console.log('what\'s about all my\'s')
const displayMyPointMyBind = displayPoint.my_bind(my_point);
displayMyPointMyBind();

// bind возвращает копию обьект с привязанным зисом
// call - не возвращает, а вызывает функцию (первый параметр у кола - не аргумент, спрятанный аргумент -> this)
// call - вызывает функцию с передачей первым параметром this