"use strict";

var _es = require("./es6");

function Person() {}

;
Person.prototype.hand = 2;
Person.prototype.body = 1;
Person.prototype.nose = 1;
var kim = new Person();
var park = new Person();
console.dir(kim);
console.dir(park);
console.dir(Person);
/* 프로토 타입 */

/* 프로토 타입 체이닝 */

/* 프로토 타입 상속 */
// new 생성자를 사용한 상속

(function () {
  function Parent() {}

  ;

  function Child() {}

  ;
  Child.prototype = new Parent();
  var child = new Child();
  console.dir(Child);
  console.dir(child); // Child는 체이닝을 통해 Parent의 constructor를 반환
  // Child의 constructor가 깨짐

  console.log(Child.constructor === Parent.constructor);
})(); // Object.create를 사용한 상속


(function () {
  function Parent(name) {
    this.name = name;
  }

  ;
  var child = Object.create(Parent.prototype); // 상속을 했지만 name이 없음
  // Parent.call(child, 'child'); // name을 초기화, 객체 프로퍼티 설정

  console.dir(child);
})(); // new + Object.create()를 이용한 상속


(function () {
  function Parent(name) {
    this.name = name;
  }

  function Child(name) {
    Parent.call(this, name);
  }

  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
  var child = new Child('child');
  console.dir(child.name);
})(); // 위임형 상속
// 연결형 상속


(function () {
  var proto = {
    hello: function hello() {
      return "Hello, my name is ".concat(this.name);
    }
  };
  var george = Object.assign({}, proto, {
    name: 'George'
  });
  var msg = george.hello();
  console.log(msg); // Hello, my name is George
})(); // 함수형 상속


(function () {
  function Person() {}

  Person.prototype.say = function () {
    console.log("Hello! My name is ".concat(this.name));
  };

  var rawMixin = function rawMixin() {
    var attrs = {};
    return Object.assign(this, {
      set: function set(name, value) {
        attrs[name] = value;
      },
      get: function get(name) {
        return attrs[name];
      }
    }, Person.prototype);
  };

  var mixinModel = function mixinModel(target) {
    return rawMixin.call(target);
  };

  var george = {
    name: 'george'
  };
  var model = mixinModel(george);
  model.say();
  console.dir(model);
  console.dir(model.__proto__ === Person.prototype);
})();

(function () {
  var p = new _es.P();
  var c = new _es.C();
  console.dir(p);
  console.dir(c);
})();