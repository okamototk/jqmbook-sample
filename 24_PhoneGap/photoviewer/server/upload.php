<?php
// 写真のアップロードを処理する
// このファイルと同階層の images ディレクトリ内に写真を保存する
// 色々例外処理は省略（同名ファイル、写真ファイル？などを省略）
require_once 'HTTP.php';
if (is_uploaded_file($_FILES["photo"]["tmp_name"])) {
  $filename = 'images/' . $_FILES['photo']['name'];
  $filename = mb_convert_encoding($filename, "UTF8", "AUTO");
  if (move_uploaded_file($_FILES["photo"]["tmp_name"], $filename)) {
    chmod("images/" . $_FILES["photo"]["name"], 0644);
    echo $filename;
  } else {
    echo "upload failed.";
  }
} else {
  echo "not send file.";
}
?>

