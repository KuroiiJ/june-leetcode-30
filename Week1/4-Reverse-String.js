/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let temp = s.toString(), j = 0, n = s.length-1
    
    for (let i = n; i>=0; i--) {
        let elem = temp[j]
        s.splice(i, 1, elem)
        j+=2
    } 
   
};