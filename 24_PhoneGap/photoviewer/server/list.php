<?php
$IMG_DIR = 'images/';

$dir = opendir(__DIR__."/".$IMG_DIR);
while($file_name = readdir($dir)){
  if(preg_match("/(.*)\.(jpg|JPG|png|PNG|gif|GIF)/",$file_name,$matches)==0)continue;
  $list[$matches[1]] = $IMG_DIR.$file_name;
}
echo json_encode($list);
?>
