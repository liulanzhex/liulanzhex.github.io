
/* 资源共享  侧边栏选择区域_03*/
/*轮播图 需要提前加载的资源*/
var index =0; /*定位坐标*/
/*存放轮播图的数组*/
const imgarray = [
    {url:'resources/image/cblxzqy/03/cblxzqy_03_1.jpg'},
    {url:'resources/image/cblxzqy/03/cblxzqy_03_1.jpg'},
    {url:'resources/image/cblxzqy/03/cblxzqy_03_1.jpg'},
    {url:'resources/image/cblxzqy/03/cblxzqy_03_1.jpg'}
]

/*根据图片的多少生成多少个li-1*/
for (let i = 1;i<imgarray.length;i++){
    // console.log(i)
    const li = document.createElement('li')
    document.querySelector('.cblxzqy_03_imgul').appendChild(li)
}
/*根据图片的多少生成多少个img-1*/
for (let i = 1;i<imgarray.length;i++){
    // console.log(i)
    const img = document.createElement('img')
    img.src = `${imgarray[i].url}`
    document.querySelector('.cblxzqy_03_img .cblxzqy_03_imgdiv').appendChild(img)
}
const cblxzqy_03_img =document.querySelector('.cblxzqy_03_img')
const imgdiv = document.querySelector('.cblxzqy_03_img .cblxzqy_03_imgdiv')
const toparrow = document.querySelector('.cblxzqy_03_img .toparrow')
const bottomarrow = document.querySelector('.cblxzqy_03_img .bottomarrow')
const cblxzqy_03_imgul_allli = document.querySelectorAll('.cblxzqy_03_imgul li')
const imgoffsetHeight = imgdiv.children[0].offsetHeight /*记录需要向上变化多少px*/


/*点击 向下箭头 切换图片*/
bottomarrow.onclick=function(){
    if(index==imgarray.length-1){
        index=0
        imgdiv_top()
    }else {
        index++
        animate(imgdiv,-index*imgoffsetHeight)
    }
    li_active()
}
/*点击 向上箭头 切换图片*/
toparrow.onclick=function(){
    if(index==0){
        index=imgarray.length-1
        imgdiv_top()
    }else {
        index--
        animate(imgdiv,-index*imgoffsetHeight)
    }
    li_active()
}
/*点击 li 切换图片*/
for (let i = 0;i<cblxzqy_03_imgul_allli.length;i++){
    cblxzqy_03_imgul_allli[i].addEventListener('click',function (e) {
        index = i //使圆点坐标与图片坐标一致
        if (e.target.tagName === 'LI'){
            li_active()
            //小圆点变化，图片跟着变化
            imgdiv_top()
        }
    })
}
//循环播放器
autoPlay()
function autoPlay(){
        timer = setInterval(function () {
        bottomarrow.onclick()
    },2000)

}

cblxzqy_03_img.addEventListener('mouseenter',function () {
    // console.log('鼠标移入 关闭定时器')
    clearInterval(timer)
})
cblxzqy_03_img.addEventListener('mouseleave',function () {
    // console.log('鼠标移出 重新调用定时器')
    autoPlay()
})

/*li集合中 active(变蓝)样式的变化*/
const li_active = function(){
    document.querySelector('.cblxzqy_03_imgul .active').classList.remove('active')
    document.querySelector(`.cblxzqy_03_imgul li:nth-of-type(${index+1})`).classList.add('active')
}
/*imgdiv中 top(向上)样式的变化*/
const imgdiv_top = function () {
    return imgdiv.style.top=-index*imgoffsetHeight+"px"
}
/*连续动态的移动效果*/
const animate = function(imgdiv,iifh){
    time = setInterval(function () {
        let present=imgdiv.offsetTop //获取当前元素顶部距离父元素的距离
        let movement=10              //每次要移动的距离
        // console.log(present=+movement)
        // if(present > iifh){
        //     present+=movement
        // }else if (present < iifh){
        //     present-=movement
        // }
        movement = present>iifh ? (-movement) : movement
        present+=movement        //每次变化movement(10px)
        if (Math.abs(iifh-present)>Math.abs(movement)){
            imgdiv.style.top=present+"px"
        }else {
            clearInterval(time)
            imgdiv.style.top=iifh+"px"
        }
    },10)
}
