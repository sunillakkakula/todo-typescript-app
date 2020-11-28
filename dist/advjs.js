"use strict";
const old_names = ['first ', 'Second', ' Third', 'asdas'];
//const new_names = old_names;
const new_names = ['Fifth',];
new_names.push(...old_names);
console.log(new_names);
const personality = {
    name: 'SAI',
    address: 'space',
    key1: 'key1',
    key2: 'key2',
};
const new_added_features = {
    city: 'HYD', age: '101'
};
const { key2 } = personality;
console.log(key2);
const updated_personality = Object.assign(Object.assign({}, personality), { new_added_features });
console.log(updated_personality);
const [clone_copy_names_first, clone_copy_names_second, ...clone_copy_names_all] = old_names;
console.log(clone_copy_names_all);
