/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        var split_s = s.split('')
        var reverse_s = split_s.reverse()
        var final_s = reverse_s.join('')
        console.log(final_s);
    } catch(err){
        console.log(err.message);
        console.log(s)
    }
}