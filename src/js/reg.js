/* 
* @Author: Marte
* @Date:   2018-02-07 16:14:40
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-09 17:24:53
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
                    var phone = document.querySelector('#userphone').value;
                    console.log(phone)
                    if(!/^1[87543]\d{9}$/.test(phone)){
                        $('#userphone').addClass('error').focus()
                        return false;
                    }
                    if(validates.value == '' || validates.value*1 != number.innerHTML*1){
                        $(validates).addClass('error');
                        return false;
                    }
                    var password = document.querySelector('#password').value;
                    console.log(password)
                    if(!/^[^\s]{6,20}$/.test(password)){
                         $('#password').addClass('error').focus();
                        return false;
                    }
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
