$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['#c52b38', '#285134', '#131313'],
        anchors: ['section1', 'section2', 'section3'],
        navigation: true, // FullPage.js 내비게이션 활성화
        navigationPosition: 'right', // 내비게이션 위치 (right, left)
    });
});

    // 더보기
    $('#moreButton').click(function () {
        $('.submenu').toggle();
    });