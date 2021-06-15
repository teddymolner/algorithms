// Outputs ascending fibonacci sequence until the specified max argument is reached.

function fib(max){
    let count = 0;
    let previous = 1;
    let legacy = 1;
    while(count <= max){
        console.log(count);
        legacy=count;
        count+=previous;
        previous=legacy;
    };
};