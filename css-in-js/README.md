# CSS-in-JS
- CSS 모델을 컴포넌트 레벨로 추상화하는 개념

## React 인라인 스타일 동작 예
```
    const textStyles = {
    color: white,
    backgroundColor: black
    }

    <p style={textStyles}>inline style!</p>
```

## CSS-in-JS 동작 방식
```
    import styled from 'styled-components';

    const Text = styled.div`
        color: white,
        background: black;
    `

    <Text>Hello CSS-in-JS</Text>
```

## CSS-in-JS 장점
- 컴포넌트 레벨로 유지보수가 가능
-- 스타일 시트의 묶음을 유지보수할 필요가 없음
- Javascript 환경을 최대한 활용하여 CSS를 향상시킴
- 상속으로부터 분리
-- 부모를 자동으로 상속하지 않기에 독립적으로 사용 가능
- 스코프 독립
-- CSS는 전역 네임스페이스 하나를 가지고 사용하기때문에 다른 컴포넌트에 정의된 CSS에도 영향을 줄 수 있음
- 벤더 프리픽스
- 코드 공유
-- JS와 CSS사이에 함수와 상수를 쉽게 공유할수 있음
- 데드코드 제거
- CSS 유닛테스트 가능

## CSS-in-JS 단점
- 학습 곡선
- 새로운 의존성