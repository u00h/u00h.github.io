$(document).ready(function () {
    $('.download_wrapper > label').click(function (e) {
        // 화살표를 180도 회전한다
        $('.menu-icon-svg').toggleClass('open');
        // 리스트를 표시한다
        $('.download_wrapper > ul').toggleClass('open');
    });

    // 아이템 컨테이너 복사하기
    for (var i = 0; i < 3; i++) {
        var card = $("div.items").clone();
        card.appendTo(".items_container");
    }

    // AOS 사용하기
    AOS.init();

    // 상단 메뉴 고정소스
    var offset = $("#header_container").offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > offset.top) {
            $("#header_container").addClass("fixed");
        }
        else {
            $("#header_container").removeClass("fixed");
        }
    });
});