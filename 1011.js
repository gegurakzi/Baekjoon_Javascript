const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var input = [];

var mainFunc = function(j){
    const line = input[j+1].split(' ').map((el)=>parseInt(el));
    var dist = line[1] - line[0];
    var depth = [1];
    var arr = [1];
    var check = 0;
    var iter = 0;
    while(check == 0){
        var len = arr.length;
        for(var i=0; i<len; i++){
            if ((arr[i] == 1 || arr[i] == 2) && depth[i] == dist-1){
                check = 1;
                break;
            }
        }
        iter++;
        if(check == 1){
            console.log(iter + 1);
            break;
        }
        else{
            var index = 0
            for(var i=0; i<len; i++){
                if(arr[index] == 1){
                    arr.splice(index, 1, 1, 2);
                    depth.splice(index, 1, depth[index]+1, depth[index]+2);
                    index = index +2;
                }
                else{
                    arr.splice(index, 1, arr[index]-1, arr[index], arr[index]+1);
                    depth.splice(index, 1, depth[index]+arr[index]-1, depth[index]+arr[index], depth[index]+arr[index]+1);
                    index = index +3;
                }
            }
        }
    }
}


rl.on('line', function(line){
    input.push(line);
    if(input.length > parseInt(input[0])){
        for(var j=0; j < parseInt(input[0]); j++){
            mainFunc(j);
        };
        process.exit();
    }
}).on('close', function(){
    process.exit();
})
