<?php
    // 引入其他文件
    require('connect.php');//include 'connect.php'

    $userphone = isset($_GET['userphone']) ? $_GET['userphone'] : null;
    $password = isset($_GET['password']) ? $_GET['password'] : null;

    // 判断用户名是否存在
    $data = $conn->query("select * from user where userphone='$userphone'");


    if($data->num_rows == 0){
        // 密码md5加密
        $password = md5($password);
        
        // 写入数据sql语句
        $sql = "insert into user(userphone,password) values('$userphone','$password')";

        $res = $conn->query($sql);

        if($res){
            echo "success";
        }else{
            echo "fail";
        }
    }else{
        echo "fail";
    }

?>