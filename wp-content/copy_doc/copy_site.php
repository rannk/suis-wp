<?php
define('ABSPATH', dirname(__FILE__) . '/');
include("../../wp-config.php");
$conn = mysql_connect(DB_HOST,DB_USER,DB_PASSWORD) or die ("数据连接错误!!!");
mysql_select_db(DB_NAME,$conn);

$site_num=ceil($argv[1]);
$from_site_num = ceil($argv[2]); 
//提取option表不需要改变的字段
$option_table="wp_".$site_num."_options";
$copy_field="siteurl,home,blogname,blogdescription,admin_email,start_of_week,timezone_string,date_format,WPLANG,time_format,zh_cn_l10n_icp_num,";
$sql = "SELECT option_name,option_value from $option_table WHERE FIND_IN_SET(option_name,'$copy_field')";
$result = mysql_query($sql);
//如果存储过程语句有变化需重新创建打开以下注释
//$sql = "DROP PROCEDURE IF EXISTS `copy_site`;";
//mysql_query($sql);

$process_sql = "
CREATE PROCEDURE `copy_site`(IN `site_num` int, IN `from_num` int)
BEGIN
	-- 需copy的表串
	SET @target_tables='links,options,postmeta,posts,revslider_css,revslider_layer_animations,revslider_navigations,revslider_sliders,revslider_slides,revslider_static_slides,term_relationships,term_taxonomy,termmeta,terms'; 
	SET @i=1; 
	-- 得出数组成员总数
	SET @count=CHAR_LENGTH(@target_tables)-CHAR_LENGTH(REPLACE(@target_tables,',','')) + 1; 
		 
	WHILE @i <= @count 
		DO 
		-- 截取表名，拼装目标表
		set @table_one=(SUBSTRING_INDEX(SUBSTRING_INDEX(@target_tables,',',@i),',',-1)); 
		IF from_num = 1
		THEN
			set @target_table = concat('wp_',@table_one);
		ELSE
			set @target_table = concat('wp_',from_num,'_',@table_one);
		END IF;
		set @new_table=concat('wp_',site_num,'_',@table_one);
		-- 删除已有表
		set @drop_sql=concat('drop table if exists ',@new_table);
		prepare drop_sql from @drop_sql;
		execute drop_sql;
		-- 重新创建表
		set @sql_create_table = concat('create table if not exists ',@new_table,' like ',@target_table);
		prepare sql_create_table from @sql_create_table;
		execute sql_create_table;
		-- 插入记录
		set @new_sql=CONCAT('INSERT INTO ', @new_table ,' SELECT * FROM ',@target_table);
		prepare new_sql from @new_sql;
		execute new_sql; 
		SET @i=@i+1;  
	END WHILE;
END
";

//判断是否创建一个myproce的存储过程
$sql="SELECT name from mysql.proc where db = '".DB_NAME."' and  name='copy_site' and type = 'PROCEDURE'";
$res=mysql_query($sql);
if (!mysql_fetch_array($res)) {
	mysql_query($process_sql);
}

if($site_num == 0){
    echo "please input the site nmuber!\n";
    exit;
}

if($from_site_num == 0) {
    $from_site_num = 1;
    $copy_site_dir = "../uploads";
}else {
    $copy_site_dir = "../uploads/sites/".$from_site_num;
}

//调用存储过程
$sql = "call copy_site($site_num, $from_site_num);";
mysql_query($sql);

//更新不需要copy的值
$sql = "UPDATE $option_table SET option_name='wp_".$site_num."_user_roles' WHERE option_name='wp_user_roles'";
mysql_query($sql);
while($rs = mysql_fetch_assoc($result)){
	$sql = "UPDATE $option_table SET option_value='$rs[option_value]' WHERE option_name='$rs[option_name]'";
	mysql_query($sql);
}

$linux="cp -r {$copy_site_dir}/2013 ../uploads/sites/$site_num";
system($linux,$result);
$linux="cp -r {$copy_site_dir}/2014 ../uploads/sites/$site_num";
system($linux,$result);
$linux="cp -r {$copy_site_dir}/2017 ../uploads/sites/$site_num";
system($linux,$result);
