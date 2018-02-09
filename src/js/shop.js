/* 
* @Author: Marte
* @Date:   2018-02-07 16:14:40
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-08 16:18:05
*/
require(['config'],function(){
    // 建议：有返回值的写前面
    console.log(333);
    require(['jquery','zoom'],function($){
        // $('#headerbox').load('html/header.html');
        // $('#banner').hide();
        console.log(666);
        var pass = window.location.search;

        var shopid= pass.substring(1);
        console.log(shopid);
        let res;
        // var $ul = $('#main .tuijian .tjshop');
        $.ajax({
            url:'../api/shop.php',
            dataType:'json',
            data:{
                id:shopid
            },
            success:function(data){
                res;
                data.forEach(function(item){
                    res=item;
                })
                console.log(res);
                var shopname = document.querySelector('.shop_name');
                var shopdes = document.querySelector('.shop_des');
                var price = document.querySelector('#price');
                var img =document.querySelector('#dateimg')
                var middleimg = document.querySelector('.details_top_img img');
                var $plus =$('.details_top_img');
                shopname.innerHTML = res.name;
                shopdes.innerHTML = res.des;
                price.innerHTML = res.price;
                img.src = '../'+res.imgurl;
                middleimg.src = '../'+res.imgurl;

                $plus.gdsZoom({
                    position:'right',
                    gap:5,
                    width:400,
                    height:400
                });

                $('.slist').on('mouseover','img',function(){
                    console.log(666)
                    $plus.find('img').attr({
                        src:this.dataset.middle || this.src,
                        'data-big':this.dataset.big || this.src
                    })
                })
            }
        });
        
        var $add = $('#appendCart');
        var $origin = $('.details_top_img');
        console.log(666,$origin)

        var color = document.querySelector('#color');
        var colorlist = document.querySelector('.select_color');

        console.log(color,colorlist)
        $(colorlist).on('click','a',function(e){
            e.preventDefault();
            console.log(this)
            color.value= this.innerText;
        })

        var r_qty = document.querySelector('.classify_l_select_input');
        var qty  = r_qty.value*1;
        console.log(r_qty,qty)

        var less = document.querySelector('#rsl_minus');
        var more = document.querySelector('#rsl_plus');
        console.log(less,more);
        $(less).on('click',function(){
            console.log(666)
            qty--;
            if(qty <=0){
                qty = 0;
            }
            r_qty.value = qty;
        })
        $(more).on('click',function(){
            console.log(666)
            qty++;
            r_qty.value = qty;
        })
        $add.on('click',function(){
                var $copyImg = $origin.find('img').clone();
                $copyImg.css({
                    position:'absolute',
                    left: 0,
                    top:0,
                    width:20,
                    zIndex:101
                })
                $copyImg.appendTo($add);
                var $left = $('.pfright_5').offset().left - $add.offset().left;
                var $top = $('.pfright_5').offset().top - $add.offset().top;
                console.log($left, $top )
                $copyImg.animate({
                    left:$left+5,
                    top:$top,
                    width:40,
                },1500,function(){
                    //动画完成后删除复制的图片
                    $copyImg.remove();
                })

                // 页面刷新获取cookie值
                let lists= [];
                let cookie = document.cookie;
                cookie = cookie.split('; ');
                cookie.forEach(function(item){
                    let arr = item.split('=');
                    if(arr[0] === 'lists'){
                        lists = JSON.parse(arr[1]);
                    }
                })
                console.log(lists)
                var r_guangdu = document.querySelector('#r_guangdu');
                var r_qty = document.querySelector('#r_qty');
                console.log(r_guangdu)
                //判断当前商品是否已经存在cookie当中
                for(i=0;i<lists.length;i++){
                    if(lists[i].id===shopid){
                        lists[i].qtr++;
                        break;
                    }
                }
                // console.log(color.value,r_guangdu.value)
                if(i===lists.length){
                console.log(color.value,r_guangdu.value)

                    var goods = {
                        id:shopid,
                        qtr:r_qty.value,
                        color:color.value,
                        guangdu:r_guangdu.value
                    }
                    console.log(goods)
                    lists.push(goods);
                }


                let now = new Date();
                now.setDate(now.getDate()+7);
               document.cookie = 'lists='+JSON.stringify(lists) + ';expires='+now.toUTCString();;
               console.log(cookie);



        })








        //返回顶部
        var toTop = document.getElementById('toTop');
            window.onscroll = function(){
                var scrollTop = window.scrollY;
                if(scrollTop>=600){
                    toTop.style.display = 'block';
                }else{
                    toTop.style.display = 'none';
                }
            }
        toTop.onclick = function(e){
            e.preventDefault();
        var timer = setInterval(function(){
                     // 滚动过的距离越大，返回越快
                var scrollTop = window.scrollY;

                     // 计算速度
                var speed = Math.floor(scrollTop/10);


                if(scrollTop<=10 || speed === 0){
                     clearInterval(timer);
                 }
                 window.scrollBy(0,-speed);
                },60);
            }
    });
});