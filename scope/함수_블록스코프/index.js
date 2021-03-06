// <함수 스코프 & 블록 스코프

// function loop() {
//     var sum = 0;

//     for (var i=0;i<5;i++) {
//         sum += i;
//     }

//     console.log(sum, i); // 10, 5
// }

(function () {
    function loop() {
        let sum = 0;

        for (let i = 0; i < 5; i++) { // let는 블록스코프를 갖기때문에 아래의 log로는 출력할수 없다.
            sum += i;
        }

        // console.log(sum, i); // Uncaught ReferenceError: i is not defined
    }

    loop();
})();

// 함수 스코프 & 블록 스코프 />

(function () {
    const now = new Date;
    const data = [1, 2, 3, 4, 5];
    const log = (...args) => (console.log(`${(new Date - now) / 1000}초 ${args[0]}`));

    // function callLog() {
    //     for (var i = 0; i <= data.length; i++) { // i가 var로 선언될 경우 i의 범위가 함수 전역에 해당되므로 data[5](undefined)로 출력
    //         setTimeout(function () {
    //             log(data[i]);
    //         }, i * 1000);
    //     }
    // }

    // function callLog() {
    //     for (var i = 0; i <= data.length; i++) {
    //         (function (i) { // 즉시 실행 함수를 사용
    //             setTimeout(function () { // 해당 함수 내의 i는 앞에서 전달받은 i
    //                 log(data[i]);
    //             }, i * 1000);
    //         })(i);
    //     }
    // }

    function callLog() {
        for (let i = 0; i < data.length; i++) { // i가 let으로 선언될 경우 블록 스코프를 갖기 때문에 클로저가 i를 참조할때 블록 영역 내부의 i를 참조함
            setTimeout(function () {
                log(data[i])
            }, i * 1000);
        }
    }

    // callLog();
})();

// <렉시컬 스코프 
(function () {
    var x = 1;

    function foo() {
        var x = 10;
        bar(boo);
        function boo() {
            console.log(x);  // 선언된 시점 스코프가 결정됨
            var y = 100;
            function bang() {
                var y = 20;
                console.log(y);
            }

            console.dir(bang);
            
        }
        console.dir(boo);
    }

    function bar(fn) {
        console.log(x);
        if (fn) fn();
    }

    foo(); // ?
    bar(); //
    console.dir(foo);
    console.dir(bar);
})();
// 렉시컬 스코프 />

(function() {
    var fns = [];

    function bindValue() {
        for (var i = 0;i<5;i++) {
            fns.push((function() {
                return function() {
                    console.log(i);
                }
            })());
        }
    }

    bindValue();

    fns.forEach((item) => (item()));
})();



(function() {
    var x = 'xxx';

    function foo(x) {
        var y = 'yyy';
        console.dir(bar);
        bar(y);
        function bar(y) {
            var z = 'zzz';
            console.dir(hoo);
            hoo(z);
            function hoo(z) {
                console.log(x + y + z);
            }
        }
    }

    console.dir(foo);
    foo(x);
})();

(function() {
    console.dir(foo);
    var foo = '1';
    function foo() {
        console.log('foo');
    }
})();

(function() {
    function createObject(o) {
        function F() {};
        F.prototype = o;
        return new F();
    }

    const person = {name: 'sim'};

    const student = createObject(person);
    console.log(student.constructor);
})();

(function() {
    const person = {name: 'sim'};

    const student = Object.create(person);
    console.dir(student);
    console.log(student.constructor);
})();

(function() {
    const Person = function(name, age) {this.name = name; this.age = age;};
    const Student = function() {
        // if (Person.hasOwnProperty('_init_')) {
        //     Person._init_.apply(this, arguments);
        // }

        // if (Student.prototype.hasOwnProperty('_init_')) {
        //     Student.prototype._init_.apply(this, arguments);
        // }

        // if (Student.prototype.hasOwnProperty('name')) {
        //     Student.prototype.apply(this, arguments);
        // }
        Person.apply(this, arguments);
    };

    const Empty = function() {};
    Empty.prototype = Person.prototype;
    Student.prototype = new Empty();
    Empty.constructor = Student;

    const person = new Person('kim');
    const student = new Student('sim', 28);
    console.dir(person);
    console.dir(student);
})();

(function() {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }

    class Child extends Person {
        constructor(name) {
            super(name);
        }
    }

    const person = new Person('kim');
    const student = new Child('sim');

    console.dir(person);
    console.dir(student);

    console.dir(Person);
    console.dir(Child);
})();