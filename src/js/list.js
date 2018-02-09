/* 
* @Author: Marte
* @Date:   2018-02-07 10:13:08
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-09 09:55:26
*/

require(['config'],function(){
    // 建议：有返回值的写前面
    console.log(333);
    require(['jquery'],function($){
        // $('#headerbox').load('html/header.html');
        // $('#banner').hide();
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
        console.log(666);
        // banner块
        var bans= document.querySelectorAll('#banner .ul1 li');
        console.log(bans)
        var page = document.querySelectorAll('#banner .banner_page span')
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
                $(bans).eq(idx).fadeIn().siblings('li').fadeOut();
                $(page).eq(idx).addClass('active').siblings().removeClass('active');
            },3000);
        }
        $('.ul1').on('mouseenter',function(){
            clearInterval(time);
            $('.banner_page').on('mouseenter','span',function(){
                let idx = $(this).index();
                a = idx;
                $(bans).eq(idx).fadeIn().siblings('li').fadeOut();
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

        // 推荐商品数据生成
        var $ul = $('#main .tuijian .tjshop');
        console.log($ul);
        $.ajax({
                url:'../api/list_01.php',
                dataType:'json',
                data:{
                    class:'t'
                },
                success:function(data){
                    console.log(data)
                    $ul[0].innerHTML = data.map(function(item){
                        return `
                        <li data-id = ${item.id}>
                        <a href="#"><img src="../${item.imgurl}"/></a>
                        </li>
                        `
                    }).join('');
                }
            });

        //商品信息数据传入
        (function(){
            var $c1 = $('#main .content1 .c1_shop');
            var page = document.querySelector('#c1_page');
            console.log($c1);
            $.ajax({
                url:'../api/list.php',
                dataType:'json',
                data:{
                    class:'mt',
                    pageNo:1,
                    qty:12
                },
                success:function(data){
                    var res = data;
                    console.log(res)
                    $c1[0].innerHTML = res.data.map(function(item){
                        return `
                        <li data-id = ${item.id}>
                        // <a href="../html/shop.html?id=${item.id}">
                        <a href="shop.html">
                        <img src="../${item.imgurl}"/><br/>
                        ${item.name}
                        <br/>
                        <span>${item.des}</span><br/>
                        <b>￥${item.price}</b>
                        </a>
                        </li>
                        `
                    }).join('');

                    let pageQty = Math.ceil(res.total/res.qty);
                    page.innerText = '';
                    for(let i=1;i<=pageQty;i++){
                        let span = document.createElement('span');
                        span.innerText = i;
                        if(i===res.pageNo){
                            span.className = 'pgactive';
                        }
                        page.appendChild(span);
                    }
                }
            });
            page.onclick = function(e){
                if(e.target.tagName.toLowerCase() === 'span'){
                    $this = $(e.target);
                    console.log($this)
                    $this.addClass('pgactive').siblings('span').removeClass('pgactive');
                    pageNo = e.target.innerText*1;
                    $.ajax({
                    url:'../api/list.php',
                    dataType:'json',
                    data:{
                        class:'mt',
                        pageNo:pageNo,
                        qty:12
                    },
                    success:function(data){
                        var res = data;
                        console.log(res)
                        $c1[0].innerHTML = res.data.map(function(item){
                            return `
                            <li data-id = ${item.id}>
                            <a href="#">
                            <img src="../${item.imgurl}"/><br/>
                            ${item.name}
                            <br/>
                            <span>${item.des}</span><br/>
                            <b>￥${item.price}</b>
                            </a>
                            </li>
                            `
                            }).join('');
                        }
                    })
                }
            }

            $c1.on('click','li a',function(){
                console.log(666,this)
                this.href= 'shop.html?'+this.parentNode.getAttribute('data-id');
                console.log(this.href)
            })

        })();
    });
});