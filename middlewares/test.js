function myt() {
    this.anem = "sdsds"
}
myt.prototype = {
    display: () => {
        console.log("00022020")
    },
    dispatch: () => {}
}
var obj = new myt();
//console.dir(obj);
var proto = Object.getPrototypeOf(obj);
//console.log(proto);
var newp = Object.create(proto);
newp.pk = () => {
    console.log("this is pk");
}
Object.setPrototypeOf(obj, newp);
/*var nprop = Object.getPrototypeOf(obj);
console.log(nprop);
var nnprop = Object.getPrototypeOf(nprop);
console.log(nnprop);*/

function propshow(obj, level = undefined) {
    var cen = 1;
    if (level < 1) {
        level = 1;
    }
    var tempobj = Object.getPrototypeOf(obj);
    while (tempobj && tempobj !== Object.prototype && level && (cen <= level)) {
        console.log("00000")
        console.log(tempobj);
        cen++;
        tempobj = Object.getPrototypeOf(tempobj);
    }
}

propshow(obj, 1)