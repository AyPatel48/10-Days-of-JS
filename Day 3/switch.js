function getLetter(s) {
    let letter;
    // Write your code here
    let found = false
    var s_arr = s.split('')
    const re = /^[a-z]/
    for(let i = 0; (i < s_arr.length) && found === false; i++){
        if (re.test(s)){
            found = true
            switch (s[0]){
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                    letter = 'A'
                    break
                case 'b':
                case 'c':
                case 'd':
                case 'f':
                case 'g':
                    letter = 'B'
                    break
                case 'h':
                case 'j':
                case 'k':
                case 'l':
                case 'm':
                    letter = 'C'
                    break
                case 'n':
                case 'p':
                case 'q':
                case 'r':
                case 's':
                case 't':
                case 'v':
                case 'w':
                case 'x':
                case 'y':
                case 'z':
                    letter = 'D'
                    break
                default:
                    letter = ''            
            }
        }
    }
    
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}