function avgNumber(arr) {
    let total = 0;
    for (let num of arr)
    {
        total =+ num
    }
    return total / arr.length;
}