function getMaxLessThanK(n, k){
    var maximum = 0
    for (let i = 1; i <= n; i++){
        for (let j = i + 1; j <= n; j++){
            if((i & j) > maximum && (i & j) < k){
                maximum = i & j
            }
        }
    }
    return maximum
}