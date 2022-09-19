let x;

if ((typeof(x) == 'number')&&(!isNaN(x))) {
    console.log("X is Number");
} else if (typeof(x) == 'string') {
    console.log("X is String");
} else if (typeof(x) == 'boolean') {
    console.log("X is Boolean");
} else {
    console.log("X is undefined");
}
