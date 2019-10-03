(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.C = exports.P = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var P = function P() {
  _classCallCheck(this, P);

  this.name = 'sim';
};

exports.P = P;

var C =
/*#__PURE__*/
function (_P) {
  _inherits(C, _P);

  function C() {
    _classCallCheck(this, C);

    return _possibleConstructorReturn(this, _getPrototypeOf(C).call(this));
  }

  return C;
}(P);

exports.C = C;
var p = new P();
},{}],2:[function(require,module,exports){
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
},{"./es6":1}]},{},[2]);
