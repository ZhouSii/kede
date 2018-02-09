/* 
* @Author: Marte
* @Date:   2018-02-07 16:14:40
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-09 13:55:50
*/
require(['config'],function(){
    // 建议：有返回值的写前面
    console.log(333);
    require(['jquery'],function($){

        var buylist = document.querySelector('.buylist');
        var tP = document.querySelector('.tP');
        var sP = document.querySelector('.sP');
        var carqty = document.querySelector('#carqty');
        var shop;

        render();

        function render(){
            let list = remove();
            shop = [];
            console.log(list)
            $.ajax({
                url:'../api/list_01.php',
                dataType:'json',
                success:function(data){
                    console.log(data)
                    for(var i=0;i<data.length;i++){
                        for(var j=0;j<list.length;j++){
                            if(data[i].id == list[j].id*1){
                                data[i].qty = list[j].qtr;
                                data[i].color = list[j].color;
                                data[i].guangdu = list[j].guangdu;

                                shop.push(data[i]);
                            }
                        }
                    }

                    console.log(shop)
                    shopping();

                }
            });
        }

        function shopping(){
            var total = 0;
            var savemoney = 0;
            buylist.innerHTML = '';
            buylist.innerHTML = shop.map(function(item){
                total+= item.price * item.qty;
                // savemoney+= (item.prise - item.onsale) * item.qty;
                return `<li data-id = '${item.id}'>
                <div class="xinxi">
                <div class="shopimg"><img src="../${item.imgurl}" /></div>
                <div class="shopname">${item.name}
                <span class="shopcolor">${item.color}</span>
                </div>
                </div>
                <div class="guangdu">光度 ：${item.guangdu}</div>

                <div class="change"><button class="addQty">+</button><input type ="text" value = "${item.qty}" /><button class="reduceQty">-</button></div>
                <div class="price">
                <span class = "yuanjia">￥${item.price}</span></br>
                <span class = "pri">${item.des}</span>
                </div>
                <div class = "totalPrice">
                <span >￥${(item.price* item.qty).toFixed(2)}</span>
                </div>
                <div class= "delet">删除</div>
                </li>`

            }).join('');
                tP.innerHTML = '';
                // sP.innerHTML = '';
                tP.innerHTML = '&nbsp;￥'+total.toFixed(2);
                carqty.innerHTML = shop.length;
                // sP.innerHTML = '&nbsp;￥'+savemoney.toFixed(2);
        }

        //删除和数量按钮
        buylist.onclick = function(e){
        e= e||window.event;
        var target = e.target || e.srcElement;

        if(target.className === 'delet'){
            var li = target.parentNode;
            li.parentNode.removeChild(li);
            
            var id = li.getAttribute('data-id')
            console.log(id)
            var lists = remove();

            var lists = lists.filter(function(item){
                return item.id!=id;
            });
            console.log(lists)
          
            let now = new Date();
            now.setDate(now.getDate()+-10);
            document.cookie += 'expires='+now.toUTCString();
            // let now2 = new Date();
            // now.setDate(now.getDate()+7);
            document.cookie = 'lists='+JSON.stringify(lists);

            render(); 



        }

        if(target.className === 'addQty'){
            console.log(target.nextElementSibling)
            let qty = target.nextElementSibling.value;

            qty++;
            
            // target.nextElementSibling.value= qty;

            let li = target.parentNode.parentNode;
            var idx = $(li).index();
            console.log(idx)
            
            shop[idx].qty = qty;

            shopping();

            
            // console.log(shop)

        }
        if(target.className === 'reduceQty'){
            console.log(666)
            console.log(target.previousElementSibling)
            let qty = target.previousElementSibling.value;
            qty--;

            if(qty <= 0){
                qty = 0;
            }
            // target.previousElementSibling.value= qty;
            let li = target.parentNode.parentNode;
            var idx = $(li).index();
            shop[idx].qty = qty;

            shopping();
        
        }

    }


        //读取cookie
        function remove(){

            var shop;
            var cookies = document.cookie;

            cookies = cookies.split('; ');

            cookies.forEach(function(item){
                var arr = item.split('=');
                //写入cookies数据的name
                if(arr[0]==='lists'){
                    shop = JSON.parse(arr[1]);
                }
            });

            return shop; 
        };
        

        


        // $.ajax({
        //     url:'../api/list_01.php',
        //     dataType:'json',
        //     data:{
        //         class:'t'
        //     },
        //     success:function(data){
        //         $ul[0].innerHTML = data.map(function(item){
        //             return `
        //             <li data-id = ${item.id}>
        //             <a href="#"><img src="../${item.imgurl}"/></a>
        //             </li>
        //             `
        //         }).join('');
        //     }
        // });

    });
});

