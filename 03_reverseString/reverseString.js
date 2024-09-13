const reverseString = function(text) {
    let textArr = [];
    for (let i = 0; i < text.length; i++) {
       textArr.unshift(text.charAt(i));
    }
    return textArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
