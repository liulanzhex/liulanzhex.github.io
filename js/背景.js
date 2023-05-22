// 进入页面就执行
window.onload=function() {
    let Entranceanimation = document.getElementById('Entranceanimation')
    let i = 0,
        timer = 0,
        str = '千里之行，始于足下'
    // console.log(str.length)
    function typing() {
        if (i <= str.length) {
            Entranceanimation.innerHTML = str.slice(0, i++) + '_'
            timer = setTimeout(typing, 120)
        } else {
            Entranceanimation.innerHTML = str //结束打字,移除 _ 光标
            clearTimeout(timer)
            //结束打字后开始加载主体区域
            setTimeout(function(){$("#content").animate({height:'80%'},1000)},1000);
        }
    }
    typing();
}