function outside() {
    function inside2() {
        console.log(`inside2 ${this.name}`);
    }

    const inside = () => {
        console.log(`inside: ${this.name}`);
    }

    console.log(`outside: ${this.name}`);
    inside();
    inside2();
}

// outside();

const obj = {
    name: 'obj'
};

const objs_outside = outside.bind(obj);
objs_outside();
// outside();

(function() {
    function show() {
        console.log(`My name is ${this.name}`);
    }

    const jake = {name: 'jake'};
    const john = {name: 'john'};
    const carl = {name: 'carl'};
    const iamJake = show.bind(jake);
    iamJake();
    show.call(john);
    show.apply(carl);
})();