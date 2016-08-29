<?php
//接收数据
//
/*CREATE TABLE `User` (
	`username` varchar(50) NULL,
	`password` varchar(32) NULL
) ENGINE=MyISAM
DEFAULT CHARACTER SET=gbk COLLATE=gbk_chinese_ci
COMMENT='UserInfo'
CHECKSUM=0
DELAY_KEY_WRITE=0;*/
function echo_str($str){
    global $cb;
    if(strlen($cb)){
        die($cb.'('.$str.')');  
    }else{
        die($str);  
    }   
}
$NickName=$_POST['NickName'];
$LeaveMessage=$_POST['LeaveMessage'];
$contcatEmail=$_POST['contcatEmail'];
$currentDate = date('y-m-d h:i:s',time());

//数据库查询	
$con=mysql_connect('qdm1273647.my3w.com:3306','qdm1273647','a8313251');  //qdm1273647.my3w.com:3306
echo $con;
if(!$con){
	die('Could not connect: ' . mysql_error());  
}
$db = mysql_select_db('qdm1273647_db');
$sql = 'insert `qdm1273647_db`.`HR_Leave_a_Messages`(`NickName`,`L_MessageCon`,`L_Time`,`Contact_Information`) 
values("'.$NickName.'","'.$LeaveMessage.'","'.$currentDate.'","'.$contcatEmail.'");';
/*echo $sql;*/
$result=mysql_query($sql);	
echo_str('{"error":0, msg:'.$result.'}');
?>