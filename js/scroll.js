$(document).ready(function () {
    //ハッシュリンクのアンカータグをクリックするとマッチするidを持つ要素にスクロールする
    $('a[href^="#"]').click(function (event) {

        var id = $(this).attr("href");
        var offset = 60;
        var target = $(id).offset().top - offset;
        $('html, body').animate({ scrollTop: target }, 500);
        event.preventDefault();
        return false;
    });
});