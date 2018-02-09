/* 
* @Author: Marte
* @Date:   2018-02-07 16:14:40
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-08 19:55:24
*/
require(['config'],function(){
    // 建议：有返回值的写前面
    console.log(333);
    require(['jquery'],function($){
        $btn = $('.regbtn');
        console.log($btn)
        var number = document.querySelector('.randomnumber');
        function randomNumber(min,max){
            return parseInt(Math.random()*(max-min+1)) + min;//0:得到一个最小数min,1:得到一个最大值max
        }
        var num  = randomNumber(1000,9999);
        console.log(num)
        number.innerHTML = num;
        var $btn = $('.regbtn');
        console.log($btn)
        $btn.on('click',function(){
            $.ajax({
                url:'../api/reg.php',
                data:{
                    userphone:$('#userphone').val(),
                    password:$('#password').val()
                },
                success:function(data){
                    console.log(data);
                    var validates = document.querySelector('.validates');
                    console.log(validates.value)
                    // if(validates.value == '' || validates.value*1 !== number.innerHTML*1){
                    //     $(validates).addClass('error');

                    // }else if($('#userphone').value == ''){
                    //     $('#userphone').addClass('error');


                    // }else if($('#password').value == ''){
                    //     $('#password').addClass('error');

                    // }
                    if(data === 'success'){
                        location.href = '../html/login.html';
                    }else if(data === 'fail'){
                        $('#userphone').addClass('error').focus();
                    }
                }
            })
        })


    });
});
