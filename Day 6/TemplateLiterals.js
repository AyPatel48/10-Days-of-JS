/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    var area = expressions[0]
    var perimeter = expressions[1]
    var s1 = (perimeter + Math.sqrt((perimeter * perimeter) - (16 * area))) / 4
    var s2 = (perimeter - Math.sqrt((perimeter * perimeter) - (16 * area))) / 4
    
    var array = [s1, s2]
    if (s1 > s2){
        array[0] = s2
        array[1] = s1
    }
    return array
}
