import * as Post from './post';
var policStr = ""
Post.service_top.forEach(e => {
    policStr += `<div>
<div class="uk-border-rounded service_background uk-padding-small">
<a href="${e.img}" class="uk-inline">
<img src="${e.img}" alt="" class="uk-padding-small uk-padding-remove-horizontal">
</a>
<div class="uk-padding-small uk-padding-remove-horizontal uk-padding-remove-top">${e.name}</div>
</div>
</div>`
})
document.getElementById("service_top_data").innerHTML = policStr;
var bottomStr = ""
Post.service_bottom.forEach(e => {
    bottomStr += `<div>
<div class="uk-border-rounded service_background uk-padding-small">
<a href="${e.img}" class="uk-inline">
<img src="${e.img}" alt="" class="uk-padding-small uk-padding-remove-horizontal">
</a>
<div class="uk-padding-small uk-padding-remove-horizontal uk-padding-remove-top">${e.name}</div>
</div>
</div>`
})
document.getElementById("service_bottom_data").innerHTML = bottomStr;