import * as Post from './post';

function GetUrlParam(name) {
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    const r = encodeURI(window.location.search).substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

//使用获取参数方法
const name = decodeURI(GetUrlParam("p"));
if (!name) {
    window.location.href = '/404.html';//404
}
const [a] = Post.allArticles.filter(item => item.name === name)
console.log(a)
if (!a) {
    window.location.href = '/404.html';//404
}
console.log('2----', a.data)
const policStr = `<div class="border_style uk-margin-large-top">
<img data-src="${a.data.img}" alt=""  class="" width="100%" uk-img>
<div class="uk-h3 uk-text-center uk-margin-left uk-margin-right">${a.data.title}</div>
<div class="uk-flex uk-margin-left uk-margin-right uk-padding-small uk-padding-remove-horizontal uk-flex-wrap" style="border-bottom: 1px dashed #333">
<div class="uk-margin-right">来源：${a.data.source}</div>
<div style="color: #fff">发布日期：${a.data.time}</div>
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
// <span title="返回上一页" uk-icon="icon:reply" onclick="window.history.back(-1);" class="uk-margin-left" style="cursor:pointer"></span>