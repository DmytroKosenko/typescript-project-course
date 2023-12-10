var product = {
    id: "abc1",
    price: 12.99,
    tags: ["great-offer", "hot-and-new"],
    details: {
        title: "Red Carpet",
        description: "A great carpet - almost brand-new!",
    },
};
var person = {
    name: "Max",
    age: 30,
    hobbies: ["Sports", "Cooking"],
};
var favpuriteActivities; //any for all types, or we can make it for specific type, like 'string'
favpuriteActivities = ["Sports", 1];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
