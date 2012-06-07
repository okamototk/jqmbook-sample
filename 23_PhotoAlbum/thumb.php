<?php
// サムネイル生成スクリプト
// GETパラメータのpathで指定された画像をサムネイル化して返却

require_once 'lib/ThumbLib.inc.php';

// TODO: 親ディレクトリをチェックとかしないとセキュリティホールになる
$path = $_GET['path'];
try {
 $thumb = PhpThumbFactory::create(__DIR__."/".$path);
 $thumb->adaptiveResize(80,80);
 $thumb->show();
} catch (Exception $e){
 echo $e->getMessage();
}
?>