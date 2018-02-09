/* 
* @Author: Marte
* @Date:   2018-02-07 16:14:40
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-08 22:20:17
*/
require(['config'],function(){
    // 建议：有返回值的写前面
    console.log(333);
    require(['jquery'],function($){

        var buylist = document.querySelector('.buylist');

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
                total+= item.onsale * item.qty;
                savemoney+= (item.prise - item.onsale) * item.qty;
                return `<li data-id = '${item.id}'>
                <div><img src="../${item.imgurl}" /></div>
                <div class="shopname">${item.name}</div>

                <div class="guangdu">${item.guangdu}</div>

                <div class = "des">
                <p class = "description">${item.description}</p>
                </div>
                <div><button class="addQty">+</button><input type ="text" value = "${item.qty}" /><button class="reduceQty">-</button></div>
                <div>
                <p>
                <span class = "yuanjia">￥${item.price}</span></br>
                <span class = "pri">${item.des}</span>
                </p>
                </div>
                <div>
                <p>
                <span class = "totalPrice">￥${(item.price* item.qty).toFixed(2)}</span>
                </p>
                </div>
                <div class = "delet"></div>
                </li>`

            }).join('');
                // tP.innerHTML = '';
                // sP.innerHTML = '';
                // tP.innerHTML = total.toFixed(2)+'&nbsp;py6.';
                // sP.innerHTML = savemoney.toFixed(2)+'&nbsp;py6.';
        }

        function remove(){

            var shop;
            var cookies = document.cookie;

            cookies = cookies.split('; ');

            cookies.forEach(function(item){
                var arr = item.split('=');
                console.log(arr)
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

