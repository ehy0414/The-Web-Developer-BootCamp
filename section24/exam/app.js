// ClassList 실습
// index.html을 보면 6개의 <li> 요소가 있으며, 이 중 2개에는 'highlight'클래스가 적용되어 있습니다.

// JavaScript와 classList 속성을 사용하여 highlight클래스를 가진 요소를 반전하세요.

// 기본적으로 모든 <li> 요소를 순회하면서 각 요소의 'highlight' 클래스를 토글하세요. 최종 결과는 다음과 같아야 합니다

const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
    item.classList.toggle('highlight');
});

const btn = document.querySelectorAll('h1').forEach(100)
