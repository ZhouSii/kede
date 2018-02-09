/* 
* @Author: Marte
* @Date:   2018-02-07 16:14:40
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-08 20:32:26
*/
require(['config'],function(){
    // 建议：有返回值的写前面
    console.log(333);
    require(['jquery'],function($){
        $btn = $('.btn');
        console.log($btn)

        $btn.on('click',function(){
            $.ajax({
                url:'../api/login.php',
                data:{
                    userphone:$('#userphone').val(),password:$('#password').val()
                },
                success:function(data){
                    console.log(data);
                    if(data === 'success'){
                        location.href = '../index.html';
                    }else if(data === 'fail'){
                        $('#userphone').addClass('error').focus();
                    }
                }
            })
        })


    });
});
