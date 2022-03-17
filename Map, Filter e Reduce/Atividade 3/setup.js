function filterp(array){
    return array.filter(callback);
}

function callback(item){
    return item % 2 !== 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4]

console.log(filterp(meuArray));