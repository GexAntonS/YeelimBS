function createPoint(x, y) { //factory method
    return {x, y}
}
function createPerson(id, firstName, lastName) {
    return {id, firstName, lastName};
}
const my_person = createPerson(123, 'Moshe', 'Mishin')

function displayPerson() {
    console.log(`id = ${this.id}, firstName = ${this.firstName}`);
}
const my_point = createPoint(3, 4);
const his_point = createPoint(5, 6);

function displayPoint(z, t) {
    console.log(`x=${this.x}; y=${this.y}; z=${z}; t=${t}`);
}
const displayMyPoint = displayPoint.bind(my_point);
const displayHisPoint = displayPoint.bind(his_point, 100, 300);
displayMyPoint(20, 30);
displayHisPoint();
Function.prototype.my_bind = function(thisObject,...args) {
    const objFn = this;
    console.log(args)
    return function (...params) {
        return objFn.apply(thisObject, args.concat(params));
    }
}
console.log('what\'s about all my\'s')
const displayMyPointMyBind = displayPoint.my_bind(my_point, 20, 30);
displayMyPointMyBind();
displayPerson.my_bind(my_person)();