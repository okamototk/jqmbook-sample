『jQuery Mobileスマートフォンアプリ開発』サンプル
=================================================
このソースコードは、『jQuery Mobileスマートフォンアプリ開発』のサンプルです。
ご利用にあたり、使用許諾書LICENSE.mdをお読みください。また、各サンプルの
詳細については、下記の書籍を合わせてご覧になることをお薦めします。


* 『jQuery Mobileスマートフォンアプリ開発』サンプル
 * http://www.sbcr.jp/products/4797368734.html

各ファイル・ディレクトリの説明と、『jQuery Mobileスマートフォンアプリ開発』の
対応は下記の通りです。

ファイル・ディレクトリ | 説明
-----------------------|-------------
README.md              |サンプルの説明について
LICENCE.md             |ライセンスファイル
index.html             |各サンプルへのインデックス
css/                   |サンプル用のCSSファイル
js/                    |サンプル用のJavaScriptファイル
00_Prologue/           | 0章 プロローグのサンプル
02_Prepare/            | 2章 実行環境準備のサンプル
03_Tutorial/           | 3章 チュートリアルのサンプル
04_Button/             | 4章 ボタンのサンプル
05_Form/               | 5章 フォームのサンプル
06_Toolbar/            | 6章 ツールバーのサンプル
07_Listview/           | 7章 リストビューのサンプル
08_PageCustomize/      | 8章 画面カスタマイズのサンプル
09_Datebox/            | 9章 日付入力のサンプル
10_EventHandling/      |10章 イベント処理のサンプル
12_Design/             |12章 デザイン変更のサンプル
13_Validation/         |13章 入力値チェックのサンプル
14_TouchEvent/         |14章 タッチイベントのサンプル
15_SlideShow/          |15章 スライドショーのサンプル
16_UploadPhoto/        |16章 写真アップロードのサンプル
17_Graph/              |17章 グラフのサンプル
18_Nativelike/         |18章 ネイティブ風のサンプル
19_PerformanceTuning/  |19章 パフォーマンスチューニングのサンプル
20_SNS/                |20章 ソーシャルメディア連携のサンプル
21_Accelerometer/      |21章 加速度センサーのサンプル
22_Geolocation/        |22章 位置情報取得のサンプル
23_PhotoAlbum/         |23章 フォトアルバムのサンプル
24_PhoneGap/           |24章 PhoneGapのサンプル

書籍中では、jQueryやjQuery MobileはCDN(例えば
http://code.jquery.com/mobile/1.1.0/jquery.mobile-1.1.0.min.jsなど)
を利用するように記述されていますが、
本サンプルは、できるだけインターネット非接続環境でも動作するように、下記のcss,js
ディレクトリ以下にjQuery,jQuery Moibileをコピーし利用するようにしています。

PhoneGapのサンプルについては、**スマートフォンのブラウザからアクセスすることはできません**。
Eclipse(Android)、XCode(iOS)、VisualStudio(Windows Phone)などを利用して、
各アプリケーションとしてビルド、インストールして利用する必要があります。

使い方
------
Gitを予めインストールしておきます。

　　$ git clone http://github.com/okamototk/jquery-mobile-book

複製したリポジトリをPHPを有効にしたApacheの公開ディレクトリにコピーしてご利用ください。
Windowsの場合、Xamppを利用するのが良いでしょう。

jQuery MobileはAjaxを利用して通信を行うため、ローカルのフォルダを直接参照して
ファイルを開いても正しく動作しないので、ご注意ください。

アップデートの注意
------------------

本書出版移行、バージョンアップしたライブラリを利用する際の注意を記載します。

### jQuery Mobile 1.1.1

特にありません。

### PhoneGap 2.0.0

24章で解説しているEvent APIのbackbutton, menubutton,searchbuttonイベントがjQueryで
ハンドリングできなくなっています。下記の様にaddEventListenerをご利用ください。

```
    document.addEventListener("backbutton",  function() {
      // Androidのみ
      console.log("戻るボタン");
    }, false);
```
