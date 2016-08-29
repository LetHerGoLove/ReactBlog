<?php



//	ajax.php?act:xxx&user=xxx&pass=xxx
//	act:	lgn	登陆		reg	注册

function echo_str($str){
	global $cb;
	if(strlen($cb)){
		die($cb.'('.$str.')'); 	
	}else{
		die($str);	
	}	
}
function json_encode($datas){
	require_once('json.php');
	$json = new Services_JSON();
	$output = $json->encode($datas);
	return $output;
}
//接收数据
$user=$_GET['user'];
$pass=$_GET['pass'];
$act=$_GET['act'];


//数据库查询
$con=mysql_connect('qdm1273647.my3w.com:3306','qdm1273647','a8313251');  //qdm1273647.my3w.com:3306
// echo $con;
if(!$con){
	die('Could not connect: ' . mysql_error());  
}
$db = mysql_select_db('qdm1273647_db');


$sql='SELECT * FROM `qdm1273647_db`.`HR_Leave_a_Messages` ORDER BY `id` desc  LIMIT 0,5';
// SELECT * FROM `qdm1273647_db`.`HR_Leave_a_Messages` ORDER BY `id` desc  LIMIT 0,5;

$result=mysql_query($sql);
$arr = array();
/*
   $arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);
   echo json_encode($arr);*/
// $row=mysql_fetch_row($result);
while($row=mysql_fetch_row($result)){
	$data[]=array(
		'id' => $row[0],
		'NickName' => $row[1],
		'L_MessageCon' => $row[2],
		'L_Time' => $row[3],
		'Contact_Information' => $row[4]
	);	
}
if($data){
	echo_str('{"error":"0", "msg":'.json_encode($data).'}');//json_encode($data)
}else{
	echo_str('{"error":"0", "msg":"暂无数据"}');	
}	
?>