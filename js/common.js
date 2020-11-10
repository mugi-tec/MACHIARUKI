// JS Information ======================================================
// Site URL:http://machiaruki.com/
// File name:common.js
// Summary:各種共通スクリプト
// Created:2020-11-10
// Last update:2020-11-10 by Sadaoka
// Copyright:(C) BUNKASOZOSHA Co.,Ltd.
//======================================================================

//TOPメインの縦サイズをブラウザーの高さに合わせる
$(function() {
  var $innerHeight=window.innerHeight;
  $('header section.mainvisual .inner').css('height', $(window).innerHeight()+'px');
});

//ハンバーガーメニュー
$(function () {
  $('#nav_toggle').on('click', function() {
    $('body').toggleClass('open');
  });
});

//サムネイル画像にマウスオーバーしたらメイン画像の位置へ表示
$(function(){
  $('.thumbnail_photo li').hover(function(){
      //オーバーしたliのインデックスを取得
      var index = $('.thumbnail_photo li').index(this);
      //オーバーした画像URLを取得
      var imageurl = $('.thumbnail_photo li').eq(index).find('img').attr('src');
      //ulのクラス名を取得（空白で分割）
      className = $(this).parent().attr('class').split(" ");
      //元のメイン画像を保存しておく
      defaultImage = $('img.mainimg.'+className[1]).attr('src');
      $('img.mainimg.'+className[1]).attr('src',imageurl);
  },function(){
      $('img.mainimg.'+className[1]).attr('src',defaultImage);
  });
});

// ページ内をスムースにスクロール
$(function(){
  // #で始まるa要素をクリックした場合に処理
  $('a[href^="#"]').click(function(){
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    var adjust = 0;
    // スクロールの速度（ミリ秒）
    var speed = 500;
    // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
    var href= $(this).attr("href");
    // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
    var position = target.offset().top + adjust;
    // スムーススクロール linear（等速） or swing（変速）
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

// PageTopボタン
$(function() {
  var pagetop=$('.pagetop');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn('fast');
    }
    else {
      pagetop.fadeOut('fast');
    }
  });
});
