import * as Post from './post';
var policStr = ""
Post.allArticles.forEach(e => {
    policStr += `<div>
<div class="uk-inline-clip uk-transition-toggle" tabindex="0">
<img data-src='${e.data.img}' alt="" class="uk-transition-scale-up uk-transition-opaque" uk-img>
<div class="uk-position-bottom-center uk-padding-small uk-padding-remove-vertical policy_content">
<a class="uk-panel uk-panel-box uk-text-truncate font-size18 text-color uk-margin-remove" href="../page/article?p=${e.name}" uk-tooltip="title: ${e.data.title}; pos: top">${e.data.title}</a>
<div class="text-color">${e.data.time}</div>
</div>
</div>
</div>`
})
//拼接完字符串数组后用innerHTML把它渲染到页面中
document.getElementById("dynamicsSection").innerHTML = policStr;

var bottomStr = ""
Post.dynamics_bottom.forEach(e => {
    bottomStr += `<div>
<a href="${e.img}" class="uk-inline">
<img data-src="${e.img}" alt="" class="policy_image" uk-img>
</a>
</div>`
})
//拼接完字符串数组后用innerHTML把它渲染到页面中
document.getElementById("dynamics_bottom").innerHTML = bottomStr;
