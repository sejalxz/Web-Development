const add = (x, y) => x+y;

const PI = 3.14159;

const sqaure = x => x*x;

// module.exports.add = add;
// module.exports.sqaure = sqaure;
// module.exports.PI = PI;

        //oR

// const math = {
//     add : add,
//     PI: PI,
//     sqaure : sqaure
// }

// module.exports = math;

            //OR

// module.exports.add = (x, y) => x+y;

// module.exports.PI = 3.14159;

// module.exports.sqaure = x => x*x;

            //OR

exports.sqaure = sqaure;
exports.add = add;
exports.PI = PI;