const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mainfunc(input){
    var len = parseInt(input[0]);
    var arr = input[1].split(' ').map((el)=>parseInt(el));

    var res = [...Array(len).keys()];
    
    for (let i = 0; i < len; i++) {
        let temp = 0;
        for (let i = 0; i < len - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < len; j++) {
              if (arr[j] < arr[minIndex]) {
                minIndex = j;
              }
            }
            if (i !== minIndex) {
              temp = arr[i];
              arr[i] = arr[minIndex];
              arr[minIndex] = temp;

              temp = res[i];
              res[i] = res[minIndex];
              res[minIndex] = temp;
            }
          }
    }
    var result = Array(len);
    for(let i = 0; i < len; i++){
        result[res[i]] = i;
    }
    console.log(result.join(' '));
}

var input = [];

rl.on('line', function(line){
    input.push(line);
    if(input.length > 1){
        mainfunc(input);
        process.exit();
    }
}).on('close', function(){
    process.exit();
})


