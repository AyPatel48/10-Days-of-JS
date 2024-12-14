/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    var s = ""
    if(a > 0){
        s = "YES";
    }
    else if(a === 0){
        throw new Error("Zero Error")
    }
    else if(a < 0){
        throw new Error("Negative Error")
    }
    return s;
}
