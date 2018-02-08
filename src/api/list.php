<?php
    // 引入其他文件
    require('connect.php');//include 'connect.php'

    // 获取前端数据
    $page_no = isset($_GET['pageNo']) ? $_GET['pageNo'] : null;
    $qty = isset($_GET['qty']) ? $_GET['qty'] : null;
    
    $cat = isset($_GET['class']) ? $_GET['class'] : null;
    // $id = isset($_GET['id']) ? $_GET['id'] : null;

    // 编写sql语句
    $sql = "select * from kedeyanjing where";

    // if($id){
    //  $sql .= " id='$id' and";
    // }

    // 根据分类改变sql语句
    if($cat){
        $sql .= " class='$cat' and"; //select * from goods where class=nike
    }

    $sql .= ' 1=1';

    // echo "$sql";

    // 查询sql语句
    // 得到查询结果集合（对象）
    $res = $conn->query($sql);

    // 使用查询结果集
    // 得到一个数组
    $row = $res->fetch_all(MYSQLI_ASSOC);

    // echo json_encode($row,JSON_UNESCAPED_UNICODE);
    // var_dump($row)

    $res = array(
        'data'=>array_slice($row, ($page_no-1)*$qty,$qty),
        'total'=>count($row),
        'qty'=>$qty,
        'pageNo'=>$page_no*1
    );

    echo json_encode($res,JSON_UNESCAPED_UNICODE);

?>