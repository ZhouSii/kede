/* 
* @Author: Marte
* @Date:   2018-02-07 16:14:40
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-07 20:52:13
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

        // var $ul = $('#main .tuijian .tjshop');
        $.ajax({
            url:'../api/shop.php',
            dataType:'json',
            data:{
                id:shopid
            },
            success:function(data){
                let res;
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

       
    });
});