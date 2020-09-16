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
var sum = function (arr) {
    var s = 0;
    for (var i = 0; i < arr.length; i++) {
        s += arr[i];
    }
    return s;
};
console.log(sum([1, 2, 3, 4]));
var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false }
];
var filter = function (arr, f) {
    console.log(f);
};
filter(users, function () { 1 + 1; });
