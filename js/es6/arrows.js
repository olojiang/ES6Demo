"use strict";

var evens = [1, 3, 5, 7];

// Function definition as expression
var odds = evens.map(v => v + 1);
console.info("odds:", odds);

// Multiple parameters, value as expression will be returned
var nums = evens.map((v, i) => v * i);
console.info("nums:", nums);

var fields = [];
nums.forEach(v => {
    if (v >= 10) {
        fields.push(v);
    }
});

console.info("fields:", fields);

// Note the inner most this point to the object
// That means this express of function will set this as the parent
var obj = {
    name: 'Olojiang',
    friends: [],
    printFriends: function () {
        this.friends.forEach(v => {
            // Pay attention to following this, it point to execution context's this
            console.info("this.name:", this.name, "v:", v);
        });
    }
};

obj.friends.push("Li Guang Qun");
obj.friends.push("Yun Jia Li");
obj.friends.push("Liu Bing Qing");
obj.printFriends();

