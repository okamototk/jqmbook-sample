<?php
require_once 'HTTP.php';

if(isset($_GET['src'])){
  unlink($_GET['src']);
}
?>