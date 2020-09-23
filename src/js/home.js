import * as Post from './post'

var policStr = ""
Post.index_banner.forEach(e => {
    policStr += `<li>
<img src="${e.img}" alt="" uk-cover>
</li>`
})
//拼接完字符串数组后用innerHTML把它渲染到页面中
document.getElementById("index_banner").innerHTML = policStr;

var sectionStr = ""
Post.index_section.forEach(e => {
    sectionStr += `<div>
<div class="uk-card uk-card-body secion_hover border_style uk-border-rounded">
<div>
<img src="${e.img}" alt="" class="banner_bottom_image">
</div>
<div class="uk-h3">${e.name}</div>
<div class="uk-padding uk-padding-remove-horizontal font-size18">${e.dec}</div>
<div uk-lightbox>
<a class="uk-button uk-button-default uk-border-pill service_background" href="${e.href_img}">查看联系方式</a>
</div>
</div>
</div>`
})
document.getElementById("index_section").innerHTML = sectionStr;

var sectionStr1 = ''
Post.index_service.forEach(e => {
    sectionStr1 += `<div class="uk-text-center curson">
<div class="uk-inline-clip uk-transition-toggle" tabindex="0">
    <img src="${e.img}" alt="">
    <div class="uk-overlay-primary uk-position-cover uk-border-rounded"></div>
    <div class="uk-position-center  text-color font-size24">
    <div>${e.name}</div>
    <div>${e.dec}</div>
</div>
    <div class="uk-transition-slide-bottom uk-position-bottom policy_content padding20 uk-border-rounded border-radius uk-visible@s">
        <div class="uk-margin-small-right uk-position-center">
        <a href="${e.href}" class="uk-margin-remove text-color font-size18">查看详情</a>
        <img src="${require('../images/arrow-right.png')}" alt="" class="arrow">
</div>
</div>
<div class="uk-position-bottom policy_content uk-padding-small uk-padding-remove-horizontal uk-border-rounded border-radius uk-hidden@s">
<div class="uk-position-center uk-margin-small-right">
 <a href="${e.href}" class="uk-margin-remove text-color font-size18">查看详情</a>
    <img src="${require('../images/arrow-right.png')}" alt="" class="arrow-right">
</div>
</div>
</div>
</div>`
})
document.getElementById("index_service").innerHTML = sectionStr1;

var bottomStr = ""
Post.index_bottom.forEach(e => {
    bottomStr += `<div>
<a href="${e.img}" class="uk-inline">
<img src="${e.img}" alt="" class="policy_image">
</a>
</div>`
})
//拼接完字符串数组后用innerHTML把它渲染到页面中
document.getElementById("index_bottom").innerHTML = bottomStr;
