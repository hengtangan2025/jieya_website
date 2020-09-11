import * as Post from './post';

console.log('post--', Post)

function GetUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = encodeURI(window.location.search).substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

//使用获取参数方法
var name = decodeURI(GetUrlParam("p"));
console.log(name);
if (name === undefined) {
    window.location.href = '../../page/login';//404
}
const a = Post.allArticles.find(item => item.name === name)
if (a === undefined) {
    window.location.href = '../../page/login';//404
}
let policStr = ""
console.log(a)
policStr += `

<div class="border_style uk-margin-left uk-margin-right uk-margin-large-top">
<img data-src="${a.data.img}" alt=""  class="" width="100%" uk-img>
<div class="uk-h3 uk-text-center uk-margin-left uk-margin-right">${a.data.title}</div>
<div class="uk-flex uk-margin-left uk-margin-right uk-padding-small uk-padding-remove-horizontal uk-flex-wrap" style="border-bottom: 1px dashed #333">
<div class="uk-margin-right">来源：${a.data.source}</div>
<div class=" ">发布日期：${a.data.time}</div>
<span title="返回上一页" uk-icon="icon:reply" onclick="window.history.back(-1);" class="uk-margin-left" style="cursor:pointer"></span>
</div>
<div class="uk-margin-left uk-margin-top uk-margin-right" style="text-indent: 2em">
<strong>概要：</strong>${a.data.summary}
</div>
<div class="uk-margin-left uk-margin-top uk-margin-large-bottom uk-margin-right" style="text-indent: 2em">
${a.data.content}
</div>
</div>
`
document.getElementById('mainID').innerHTML = policStr;