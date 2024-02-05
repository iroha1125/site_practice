$(function () {
    $('.slider_img').slick({
        arrows: false,//左右の矢印を非表示
        autoplay: true,//自動スクロール
        autoplaySpeed: 0,//自動再生時のスライド切り替えの時間
        speed: 5000,//スライドが流れるスピード
        infinite: true,
        swipe: false,//スワイプ禁止
        slidesToShow: 6,//表示するスライドの数
        cssEase: 'linear',//画像切り替えのアニメーション"linearは等速"
        pauseOnFocus: false,//フォーカスしても止めない
        pauseOnHover: false,//マウスホバーしても止めない
    });
});