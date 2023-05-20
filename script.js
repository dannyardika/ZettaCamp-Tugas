const input = [8, 7, 7, 9, 5, 4, 2, 9]

function result(input) {
    const median = Math.floor(input.length / 2);
    const hasil = [...input].sort((a, b) => a - b);

    return input.length % 2 !== 0 ? hasil[median] : (hasil[median - 1] + hasil[median]) / 2;
}

console.log(result(input))