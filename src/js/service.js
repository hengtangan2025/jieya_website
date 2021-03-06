import * as Post from './post';
function GetUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = encodeURI(window.location.search).substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

//使用获取参数方法
var idName = decodeURI(GetUrlParam("name"));
const [a] = Post.index_service.filter(item => item.anchorLink === idName)
console.log(a)
if (!a) {
    window.location.href = '/404.html';//404
}
if (idName === 'null') {
    document.getElementById('mentalHealth').style.display="block";
}else{
    for (let i=0;i<Post.index_service.length;i++){
        if (Post.index_service[i].anchorLink == idName) {
            document.getElementById(Post.index_service[i].anchorLink).style.display="block";
        }else{
            document.getElementById(Post.index_service[i].anchorLink).style.display="none";
        }
    }
}
var policStr = ""
Post.service_top.forEach(e => {
    policStr += `<div>
<div class="uk-border-rounded service_background uk-padding-small uk-padding-remove-bottom">
<a href="${e.img}" class="uk-inline">
<img data-src="${e.img}" alt="" uk-img>
</a>
<div class="uk-padding-small uk-padding-remove-horizontal font-size24">${e.name}</div>
</div>
</div>`
})
document.getElementById("service_top_data").innerHTML = policStr;

var bottomStr = ""
Post.service_bottom.forEach(e => {
    bottomStr += `<div>
<div class="uk-border-rounded service_background uk-padding-small uk-padding-remove-bottom">
<a href="${e.img}" class="uk-inline">
<img data-src="${e.img}" alt="" uk-img>
</a>
<div class="uk-padding-small uk-padding-remove-horizontal font-size24">${e.name}</div>
</div>
</div>`
})
document.getElementById("service_bottom_data").innerHTML = bottomStr;

var service_bottom_banner=""
Post.service_less_press.forEach(e => {
    service_bottom_banner += `<div>
<div class="uk-inline">
<img data-src="${e.img}" alt="" uk-img>
<div class="uk-overlay-primary uk-position-cover uk-border-rounded"></div>
<div class="uk-overlay uk-position-top uk-light uk-h3 font-size24 uk-text-center text-color">
${e.name}
</div>
<div class="uk-overlay uk-position-center uk-light uk-text-center text-color font-size20">
${e.dec}
</div>
</div>
</div>`
})
document.getElementById("stress_reliever").innerHTML = service_bottom_banner;