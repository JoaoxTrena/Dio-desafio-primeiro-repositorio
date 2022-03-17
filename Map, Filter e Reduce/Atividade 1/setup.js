const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapConThis (array, thisArg){
    return array.map(function(item){
        return item * this.value;
    }, thisArg)
}

const nums = [1, 2];


console.log('this -> maçã', mapConThis(nums, maca));

console.log('this -> laranja', mapConThis(nums, laranja));
