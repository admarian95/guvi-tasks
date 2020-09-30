console.log('------------------------------------------------------');
console.log('------------------------------------------------------');
console.log("chunk:");
var chunk = function (arr, no) {
    var arr1 = [];
    var arr2 = [];
    for (var i = 0; i < no; i++) {
        arr1[i] = arr[i];
    }
    for (var j = no; j < arr.length; j++) {
        arr2[j - no] = arr[j];
    }
    return [arr1, arr2];
};
console.log(chunk([1, 2, 3, 4], 3));
console.log('------------------------------------------------------');
console.log('------------------------------------------------------');
console.log("sum:");
var sum = function (arr) {
    var s = 0;
    for (var i = 0; i < arr.length; i++) {
        s += arr[i];
    }
    return s;
};
console.log(sum([1, 2, 3, 4]));
console.log('------------------------------------------------------');
console.log('------------------------------------------------------');
console.log("filter:");
var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 20, 'active': false },
    { 'user': 'fred', 'age': 45, 'active': true },
    { 'user': 'fred', 'age': 19, 'active': false },
    { 'user': 'fred', 'age': 19, 'active': true }
];
var filter = function (arr, f) {
    for (var i in arr) {
        if (f(arr[i])) {
            console.log(arr[i]);
        }
    }
};
filter(users, function (e) { return e.age > 20; });
console.log('------------------------------------------------------');
console.log('------------------------------------------------------');
console.log("find:");
var find = function (arr, f) {
    var foundVal = [];
    var j = 0;
    for (var i in arr) {
        if (f(arr[i])) {
            foundVal[j] = arr[i];
            j++;
        }
    }
    if (foundVal.length === 0) {
        console.log("not found");
    }
    else {
        console.log("filtered obj     =>   ");
        for (var i in foundVal) {
            console.log(foundVal[i]);
        }
    }
};
find(users, function (e) { return e.age === 19 || e.active === true; });
console.log('------------------------------------------------------');
console.log('------------------------------------------------------');
console.log("reduce:");
var reduce = function (arr, f, initVal) {
    var initSum = initVal;
    var array = arr;
    for (var i = 0; i < array.length; i++) {
        initSum = f(initSum, arr[i]);
    }
    return initSum;
};
var ans = reduce([1, 2], function (sum, n) {
    return sum + n;
}, 0);
console.log(ans);
