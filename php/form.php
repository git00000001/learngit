<?php 
header('Content-Type:application/json; charset=utf-8');
$str=file_get_contents("php://input");
$arr = json_decode($str);
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "myDB";
$user=$arr->username;
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 

$result = mysqli_query($conn,"SELECT * FROM User
WHERE username='{$user}' ");
 
 while($row = mysqli_fetch_array($result))
 {
     $data=$row['psd'];
 }
$conn->close();


$res = array( //普通数组
    "code" => 0,
    "data" => $data,
    "msg"=>"success"
);
exit(json_encode($res));
?> 