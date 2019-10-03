let x = 1;

function* foo() {
    x++;
    yield;
    console.log('x:', x);
}

function bar(){
    x++;
}

const it = foo();
it.next();
bar();
it.next();