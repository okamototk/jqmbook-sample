<?php
  header('Content-type: application/json;charset=utf-8');
  $data = array("みかん","りんご","ぶどう","もも");
  echo json_encode($data); 
?>
