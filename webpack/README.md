# Webpack

## TreeShaking
- Webpack이 JS모듈을 번들링할때 사용하지 않는 코드를 최적화하는 과정
- 나무를 흔들면 나뭇잎이 떨어지는 것을 묘사
- CommonJS는 지원하지 않음
- Webpack에서는 Bundler가 죽은 코드를 식별?하고 Uglyfy.js가 죽은 코드(주석 사용하지 않는 코드)를 삭제함

## 코드 스플릿
- 현재 사용하지 않는 서드 파티 라이브러리 등이 번들에 모두 들어있으면 로딩시간이 길어지는 것을 해소하기 위한 방안
- 현재 시점에 필요한 모듈만 lazy 로딩 한다.

### entry point
- entry point에 별도의 이름을 추가하여 분리하는 방법
```
entry: {
    index: './src/index.js',
    another: './src/another-module.js',
  },
```
### 중복 방지
- 아래의 코드를 웹팩 설정 파일에 추가한다.
- chunks는 inital, async, all 값을 갖는다.
    - initial: 초기 로딩되는 것을 청크에 추가한다.
    - async: 동적 로딩되는 것을 청크에 추가한다.
    - all: initial + async 이다.
```
optimization: {
    splitChunks: {
      chunks: 'all',
    },
  }
```
### Dynamic Import

```
/**
* 일반
*/
import {sum} from './Util';
sum(1, 2);

/**
* lazy 로딩
*/
import('./Util').then(sum => sum(1, 2))
```