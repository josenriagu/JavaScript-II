const items2 = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function contains(item, list, cb) {
    // contains checks if an item is present inside of the given array/list.
    // Pass true to the callback if it is, otherwise pass false.
    let itemsFound = [];
    for (let i = 0; i < list.length; i++) {
        if (item == list[i]) {
            itemsFound.push(list[i]);
        }
    }
    return cb(itemsFound.length > 0);
}

contains('Gums', items, (containsItem) => {
    console.log(containsItem);
})


function outer() {
    let count = 0;
    return () => {
        count = count + 1;
        console.log(count)
    }
}

//As a one-liner

// function outer() {let count = 0; return () => {count = count + 1; console.log(count)}}
const hello = outer();

hello();
hello();
// hello();
// inner();
// inner();
// inner();
// inner();
// inner();
// inner();
// inner();
// inner();