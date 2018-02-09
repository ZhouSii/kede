/* 
* @Author: Marte
* @Date:   2018-02-03 18:26:25
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-09 16:23:26
*/

require(['config'],function(){
    // 建议：有返回值的写前面
    console.log(333);
    require(['jquery'],function($){
        // $('#headerbox').load('html/header.html');
        // $('#footerbox').load('html/footer.html');
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
        };


        
        // $('#banner').hide();
        console.log(666);
        // banner块
        var bans= document.querySelectorAll('.banner_list li');
        console.log(banner,bans)
        var page = document.querySelectorAll('.banner_page span')
        console.log(page)
        $(bans).not(':first').hide();
        $(page).first().addClass('active');
        var time;
        var idx = 0;
        var a;
        console.log(a);
        move();
        function move(){
            time = setInterval(function(){
                a= idx;
                idx++;
                if(idx==bans.length){
                    idx =0 ;
                }
                $(bans).eq(idx).stop().fadeIn().siblings('li').stop().fadeOut();
                $(page).eq(idx).addClass('active').siblings().removeClass('active');
            },3000);
            
        }
        $('.banner_list').on('mouseenter',function(){
            clearInterval(time);
            $('.banner_page').on('mouseenter','span',function(){
                let idx = $(this).index();
                a = idx;
                $(bans).eq(idx).stop().fadeIn().siblings('li').stop().fadeOut();
                $(page).eq(idx).addClass('active').siblings().removeClass('active');
            });
            $('.ban_float').show();
            $('.banner_prev').on('mousedown',function(){
                // idx = (a=undefined? 0: a); 
                idx--;
                if(idx<0){
                    idx = 6;
                }
                a=idx*1;
                console.log(idx)
                $(bans).eq(idx).stop().fadeIn().siblings('li').stop().fadeOut();
                $(page).eq(idx).addClass('active').siblings().removeClass('active');
            });
            $('.banner_next').on('mousedown',function(){
                idx = (a=undefined? 0: a); 
                (function(idx){
                    idx++;
                    if(idx==bans.length){
                        idx =0 ;
                    }
                    a = idx*1;
                    console.log(idx)
                    $(bans).eq(idx).stop().fadeIn().siblings('li').stop().fadeOut();
                    $(page).eq(idx).addClass('active').siblings().removeClass('active');

                })(idx)
            })
        }).on('mouseleave',function(){
            $('.ban_float').hide();
            clearInterval(time)
           
            idx = (a=undefined? 0: a); 
            console.log(idx)
            move();
        });

        //促销活动和最新活动
        $('.content_right_list_l').addClass('active').on('mouseenter',function(){
            $('.content_tab_l').show();
            $('.content_tab_r').hide();
            $(this).addClass('active').siblings('li').removeClass('active')
        });

        $('.content_right_list_r').on('mouseenter',function(){
            $('.content_tab_r').show();
            $('.content_tab_l').hide();
            $(this).addClass('active').siblings('li').removeClass('active')
        });

        //秒杀活动tab切换
        var $hot_list = $('.hot_list div');
        var list_t1 = document.querySelector('.hot_ms');
        var list_t2 = document.querySelector('.hot_zdm');

        var $hot_shop = $('.hot_shop div');
        console.log(list_t1,list_t2)

        $hot_list.on('mouseover',function(){
            console.log(this)
            var idx = $(this).index();
            if(idx == 0){
                $(list_t1).removeClass('ms_2').addClass('ms_1');
                $(list_t2).removeClass('zdm_2').addClass('zdm_1');
            };
            if(idx == 1){
                $(list_t1).removeClass('ms_1').addClass('ms_2');
                $(list_t2).removeClass('zdm_1').addClass('zdm_2');
            }
            $hot_shop.eq(idx).show().siblings('div').hide();
        })
             




    ;(function(){
            //楼层banner
        var floorban =document.querySelectorAll('.wide_f1 .wide_f_left .wide_infobanner .infobanner li');
        console.log(floorban)
        var floorpage=document.querySelectorAll('.wide_f1 .wide_f_left .wide_infobanner .infopage li')
        console.log(floorpage)
        $(floorpage).first().addClass('floor_active');
        var time;
        var idx = 0;
        var a;
        move();
        function move(){
            time = setInterval(function(){
                idx++;
                if(idx == bans.length-1){
                    idx =0 ;
                }
                $(floorban).eq(idx).fadeIn().siblings('li').fadeOut();
                $(floorpage).eq(idx).addClass('floor_active').siblings().removeClass('floor_active');
            },3000)
            
        }

             
        // $('.wide_f1 .wide_f_left .wide_infobanner').on('mouseenter',function(){
        //     clearInterval(time);
        //     // $('.wide_infobanner').on('mouseenter','.wide_f1 .wide_f_left .wide_infobanner .infopage li',function(){
        //     //     let idx = $(this).index();
        //     //     a = idx;
        //     //     $(floorban).eq(idx).fadeIn().siblings('li').fadeOut();
        //     //     $(floorpage).eq(idx).addClass('floor_active').siblings().removeClass('floor_active');
        //     // });
        // }).on('mouseleave',function(){
        //     clearInterval(time)
        //     move();
        // });
    })();
        
        //5F数据生成
        var list = $("#wide_f5 .wide_4f_cont");
        console.log(list)
        let arr_status = [200,304];
        let xhr = new XMLHttpRequest();
        xhr.onload=function(){
            if(arr_status.includes(xhr.status)){
                let res = JSON.parse(xhr.responseText);
                console.log(res)
                var ul = document.createElement('ul');
                ul.innerHTML = "";
                ul.innerHTML = res.map(function(item){
                    return `<li data-id="${item.id}">
                    <a href="#" target="_blank" class="wide_4f_li_img">
                    <img src="${item.imgurl}"/>
                    </a>
                    <a href="#" class="wide_4f_li_name">
                    ${item.name}
                    </a><br />
                    <a href="#" class="wide_4f_li_price">
                    ￥${item.price}起
                    </a>
                    <a href="#" class="wide_4f_li_onsale">
                    ${item.onsale}
                    </a>
                    </li>`
                }).join('');
                $(ul).addClass('clearfix');
                // list.append(ul);
                console.log(list,list[0]);
                list[0].appendChild(ul)
            }
        }
        xhr.open('get','../api/data/base.json');
        xhr.send();
    })

});