import * as Post from './post'
console.log('post--',Post)
var policStr = ""
Post.allArticles.forEach(e => {
    policStr += `<div>
<div class="uk-inline-clip uk-transition-toggle" tabindex="0">
<img src='${e.data.img}' alt="" class="uk-transition-scale-up uk-transition-opaque">
<div class="uk-position-bottom-center uk-padding-small uk-padding-remove-vertical policy_content">
<a class="uk-panel uk-panel-box uk-text-truncate uk-h2" href="../../page/article/?p=${e.name}">${e.data.title}</a>
<div>${e.data.time}</div>
</div>
</div>
</div>`
})
//拼接完字符串数组后用innerHTML把它渲染到页面中
document.getElementById("dynamicsSection").innerHTML = policStr;