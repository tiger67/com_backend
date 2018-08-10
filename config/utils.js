function protoShow(obj, level = undefined) {
    var cen = 1;
    if (level < 1) {
        level = 1;
    }
    var tempobj = Object.getPrototypeOf(obj);
    while (tempobj && tempobj !== Object.prototype && tempobj !== Function.prototype && !level || level && (cen <= level)) {
        console.log(`--------------level${cen}-------------------------------------`)
        console.log(tempobj);
        cen++;
        tempobj = Object.getPrototypeOf(tempobj);
    }
}
console.log("text run ing");

module.exports = {
    protoShow
}