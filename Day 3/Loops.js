/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var vowels = [];
    var consonants = [];
    var nVowels = 0;
    var nConsonants = 0;
    function add(string, isVowel){
        if (isVowel){
            vowels[nVowels] = string;
            nVowels++;
        }else{
            consonants[nConsonants] = string;
            nConsonants++;
        }
    }
    function print(array){
        for(let j = 0; j < array.length; j++){
            console.log(array[j]);
        }
    }
    var vowels_str = "aeiou";
    var consonants_str = "bcdfghjklmnpqrstvwxyz";
    var s_arr = []
    s_arr = s.split('');
    for(let i = 0; i < s_arr.length; i++){
        var character = s_arr[i];
        if (vowels_str.includes(character)){
            add(character, true);
        }else if(consonants_str.includes(character)){
            add(character, false);
        }
    }
    
    print(vowels);
    print(consonants);
}

