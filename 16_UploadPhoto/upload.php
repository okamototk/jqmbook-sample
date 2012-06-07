<?php
// 写真のアップロードを処理する
// このファイルと同階層の images ディレクトリ内に写真を保存する
require_once 'HTTP.php';
if (is_uploaded_file($_FILES["photo"]["tmp_name"])) {
  $filename = 'images/' . $_FILES['photo']['name'];
  $filename = mb_convert_encoding($filename, "SJIS", "AUTO");
  if (move_uploaded_file($_FILES["photo"]["tmp_name"], $filename)) {
    chmod("images/" . $_FILES["photo"]["name"], 0644);
    echo $_FILES["photo"]["name"] . "をアップロードしました。";
    HTTP::redirect("index.html");
  } else {
    echo "ファイルをアップロードできませんでした。";
  }
} else {
  echo "ファイルが選択されていません。";
}
?>
