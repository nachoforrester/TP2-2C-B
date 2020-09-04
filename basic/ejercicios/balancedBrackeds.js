// Complete the isBalanced function below.
function isBalanced(s) {
    if (s.length % 2 === 1)
        return 'NO';

    while(s.length!==0) {
        index1 = s.indexOf("()")
        index2 = s.indexOf("[]")
        index3 = s.indexOf("{}")
        if (index1 === -1 && index2 === -1 && index3 === -1){
            return 'NO';
        } else if (index1 !== -1) {
            s = s.substring(0,index1) + s.substring(index1+2,s.length);
        } else if (index2 !== -1) {
            s = s.substring(0,index2) + s.substring(index2+2,s.length);
        } else if (index3 !== -1) {
            s = s.substring(0,index3) + s.substring(index3+2,s.length);
        } 

    }
    return 'YES'
}

// TESTS
console.log(isBalanced('{[()]}') == 'YES');
console.log(isBalanced('{[(])}') == 'NO');
console.log(isBalanced('{{[[(())]]}}') == 'YES');
console.log(isBalanced('{{[[(())]]}}{}()') == 'YES');
