const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const res = arr.filter((value, index, fullArray) => {
    return value > 5;
})

console.log(res)

module.export = {
    res
}