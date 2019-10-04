# 제너레이터
## 특징
- yield 명령어를 사용하여 완전-실행이 되지 않도록 할수 있다.
- 흐름을 제어할수있다. 원하는 비동기 실행을 설정하고 yield를 사용하면 yield 이후의 실행문 이전에 다른 구문을 실행할수있음
- 비동기 호출의 조합에 자유도가 더 늘어나는 느낌이다.
- 가령 아래의 예를 살펴보면
```
    function 비동기1(): Promise {/.../}
    function 비동기2(): Promise {/.../}
    function 비동기3(): Promise {/.../}

    async function A() {
        await 비동기1();
        await 비동기2();
        await 비동기3();
    }

    A();
```
위의 코드가 실행되면 비동기1 -> 비동기2 -> 비동기3 순으로 실행될것이다.

만일 A 함수를 크게 고치지 않고 위의 순서에 하나의 단계를 더 추가하려고 하면 제너레이터를 이용하면 되지않을까?

2와 3사이에 4라는 비동기 호출을 넣는다면?

```
    function A() {
        yield 비동기1();
        yield 비동기2();
        yield 비동기3();
    }

    function 비동기4(): Promise {/.../}

    const it = A();
    it.next(); // 1
    it.next(); // 2
    비동기4();
    it.next(); // 3

```

위와 같이 구현을 하면 된다.

- yield를 사용하여 값을 주고 받을 수 있다.

```
    function * foo() {
        const x = yield 2;
        console.log(x);
    }

    const it = foo();
    const res = it.next().value; // yield 까지 실행되고 2를 반환
    console.log(res);
    it.next(4); // yield부터 다시 시작, 4를 넘겨주어 foo 함수의 x를 4로 설정
```

- 인터리빙


## 이터레이터
- 제너레이터를 제어하는 객체
- 변수에 할당할수있고, next() 함수를 사용하여 제너레이터가 현재 위치에서 다음 yield 또는 끝까지 실행시킬수있다.

# 참고
- https://dev.to/rfornal/use-cases-for-javascript-generators-1npc