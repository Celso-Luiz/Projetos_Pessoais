let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

function substituiPares(array) {
    if (!array) return -1;
    if(!array.length) return -1;

    for(let i = 0; i <array.length; i++){
        if(array[i] === 0){
            console.log("Você já é zero!!");
        }else if(array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }
    return array;
}

console.log(substituiPares(arr));