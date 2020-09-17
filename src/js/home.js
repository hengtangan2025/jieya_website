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
<div class="uk-padding uk-padding-remove-horizontal font-size20 ">${e.dec}</div>
<div uk-lightbox>
<a class="uk-button uk-button-default uk-border-pill service_background" href="${e.href_img}">查看联系方式</a>
</div>
</div>
</div>`
})
document.getElementById("index_section").innerHTML = sectionStr;

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
