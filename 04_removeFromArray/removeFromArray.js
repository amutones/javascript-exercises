const removeFromArray = function(arr, ...item) {
    for (let i = 0; i < item.length; i++) {
        while(arr.indexOf(item[i]) !=-1) {
            let position = 0;
            position = arr.indexOf(item[i]);
            arr.splice(position, 1);
        }
    } 
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
