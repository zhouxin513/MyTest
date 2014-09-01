<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

<title><s:text name="HelloWorld.message" /></title>

<link href="jsp/css/jspConvertor.css" media="screen" rel="stylesheet" type="text/css">

<style type="text/css" id="shutto-property-baloon">
#shutto-property:before,#shutto-property:after {
	top: 139.59999084472656px
}
</style>

<%--   <style type="text/css">
        div {
            color: #ff0000;
            border: 1px dashed #00B83F;
        }
    </style> --%>

<script src="js/jquery-1.8.2.min.js" type="text/javascript"></script>
<script src="jsp/js/dragNdrop.js" type="text/javascript"></script>

	<!--
　　　 <script src="jsp/sub/dc.js" async="" type="text/javascript"></script><script id="twitter-wjs" src="jsp/sub/widgets.js" type="text/javascript"></script>
    <script id="facebook-jssdk" src="jsp/sub/all.js" type="text/javascript"></script>
    <script src="jsp/sub/edit-b69fbc595d383022f556f39765b1c31b.js" type="text/javascript"></script>
    -->


</head>
<!--data-preview-widthのサイズが　Preview-containerで選択される-->
<body data-guide="true" class="" data-preview-width="360"
	data-shutto-lang="ja" data-twttr-rendered="true" data-userrole="guest"
	data-sites-count="0">


	<header>
		<h1>
			<a href="http://www.bestskip.com/jp/index.html"><img alt="shutto"
				src="jsp/img/bestskip.png" height="17" width="70"></a>
		</h1>

		<h2>
			<a href="http://yahoo.co.jp/" class="shutto-url-link">対象サイトのアドレス/</a>
		</h2>

		<div style="visibility: visible;"
			class="shutto-actions shutto-after-load">
			<div id="shutto-save-container">
				<a class="shutto-submit-button" id="shutto-save">保存</a>
				<div id="shutto-save-notice">
					<div>
						変換設定を保存して実際のサイトで利用するにはユーザ登録が必要です。<br> <a
							href="http://shutto.com/register">ユーザ登録（無料）はこちらから »</a>
					</div>
				</div>
			</div>
			<a class="shutto-button" id="shutto-open-preview-guest">プレビュー</a>
		</div>

		<div class="shutto-guest-account">
			<a href="https://shutto.com/login">ログイン</a> <a
				href="https://shutto.com/register">ユーザ登録</a>
		</div>

	</header>
	<!--オリジナル　ソース-->
	<div id="upload-convert">
		<form>
			<input class="shutto-submit-button" type="button"
				value="Upload　Files"
				onclick="openUploader()">
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<input class="shutto-submit-button" type="button"
				value="load uploaded page" onclick="loadPage()">
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	
			<input class="shutto-submit-button" type="button"
				value="get page elements" onclick="convertPage()">
		</form>
	</div>

	<div id="shutto-contents">

		<!--ガイドライン領域-->
		<section id="shutto-start-guide" class="" data-page="4">
			<h1>
				<img alt="STARTガイド"
					src="jsp/sub/start_guide_title-4a9922f59788ef4a6ae88cd05199313a.gif"
					height="24" width="131">
				<!-- <a href="#" target="_blank">詳しい編集ガイドを開く</a> -->
			</h1>
			<ol>
				<li data-target="1">1</li>
				<li data-target="2">2</li>
				<li data-target="3">3</li>
				<li data-target="4">4</li>
			</ol>
			<div class="shutto-close" title="STARTガイドを閉じる"></div>
			<div data-page="1">
				この画面がshutto編集画面になります。いちばん右のエリアにはPCページが表示されますので、表示されている<br>
				文字やテキストをマウス操作で真ん中のスマホレイアウト画面にドラッグ＆ドロップしていきます。 <span data-target="2">»
					次の説明へ</span>
			</div>
			<div data-page="2">
				ドロップされた要素はふきだしで表示される編集メニューで、デザインや大きさ、リンク等の設定が行えます。<br>
				表示される編集メニューは、要素によって異なります。 <span data-target="3">» 次の説明へ</span>
			</div>
			<div data-page="3">
				いちばん左に表示されている「テキスト」「タイトル」等は、挿入メニューになります。<br>
				PCページにない要素を追加するときに、ドラッグ＆ドロップして使います。 <span data-target="4">»
					次の説明へ</span>
			</div>
			<div data-page="4">
				スマホレイアウトが完成したら画面上部にある「保存」ボタンを押しましょう。「プレビュー」で公開前に見ためを確認できます。<br>
				PCサイトにshuttoタグを入れたら、本番サイトに反映されます。
			</div>

		</section>

		<!--　未設定
    <section id="shutto-route-over-capacity"> … </section>
    -->

		<!--コンテンツ変換領域-->
		<section id="shutto-body">

			<!-- 取り出したコンテン編集用エディタ（未編集）
        <section id="shutto-property" class="shutto-off" style="left: 488px;"></section>
        -->

			<!--　プレービジョン領域にコンテンツを追加する領域-->
			<section style="visibility: visible;" id="shutto-components"
				class="shutto-after-load">
				<section class="shutto-closable shutto-close">
					<h1>テキスト・画像</h1>
					<ul>
						<li id="shutto-component_text">
							<div class="shutto-image">
								<img alt="Parts_text_s"
									src="jsp/sub/parts_text_s-358905fea6f399ba020339785a3bdab1.png">
							</div> テキスト
						</li>
						<li id="shutto-component_heading">
							<div class="shutto-image">
								<img alt="Parts_header_s"
									src="jsp/sub/parts_header_s-fed14c33060321f1f5c0b2fa52ee185f.png">
							</div> タイトル
						</li>
						<li id="shutto-component_image">
							<div class="shutto-image">
								<img alt="Parts_image_s"
									src="jsp/sub/parts_image_s-1d8146289b57336ec15f105bea0a3e76.png">
							</div> 画像
						</li>
						<li id="shutto-component_map">
							<div class="shutto-image">
								<img alt="Parts_map_s"
									src="jsp/sub/parts_map_s-ca3c60029a16de645b635bbcfec53c01.png">
							</div> マップ
						</li>
						<li id="shutto-component_menu">
							<div class="shutto-image">
								<img alt="Parts_menu_s"
									src="jsp/sub/parts_menu_s-e2c8c89a17b8510c760476efe23865c3.png">
							</div> メニュー
						</li>
						<li id="shutto-component_pc">
							<div class="shutto-image">
								<img alt="Parts_pc_s"
									src="jsp/sub/parts_pc_s-e50b14781ca70b14ce0ed32e18a3185a.png">
							</div> PC表示
						</li>
						<!--
                    <li id="shutto-component_affiliate">
                      <div class="shutto-image">
                        <img alt="Parts_affiliate_s" src="/assets/convert/parts_affiliate_s-2b32f46a68f329981aaceaeb63046a6f.png" />
                      </div>
                      アフィリエイト
                    </li>
                    -->
						<li id="shutto-component_recommend">
							<div class="shutto-image">
								<img alt="Parts_recommend_s"
									src="jsp/sub/parts_recommend_s-0471a669e6d5f5f7bcca693a40d1d264.png">
							</div> レコメンド
						</li>
					</ul>
				</section>
				<section class="shutto-closable shutto-close">
					<h1>コンテナ</h1>
					<ul>
						<li id="shutto-component_box"><img alt="Parts_box_s"
							src="jsp/sub/parts_box_s-955565c26d2470e79d87b1e9e45ad658.png"><br>
							ボックス</li>
						<li id="shutto-component_grid"><img alt="Parts_grid_s"
							src="jsp/sub/parts_grid_s-d3d624c24afe26f9363ec5622bfeed95.png"><br>
							セル</li>
						<li id="shutto-component_tab"><img alt="Parts_tab_s"
							src="jsp/sub/parts_tab_s-f1de02dfff41a4825a6a27855b2d1ad6.png"><br>
							タブ</li>
						<li id="shutto-component_accordion"><img
							alt="Parts_accordion_s"
							src="jsp/sub/parts_accordion_s-d13b52153d4f4a7769737bd73c422a8b.png"><br>
							アコーディオン</li>
						<li id="shutto-component_slider"><img alt="Parts_slider_s"
							src="jsp/sub/parts_slider_s-cda788900751155d9cb84f8f9f6a3adb.png"><br>
							スライドショー</li>
					</ul>
				</section>
				<section id="shutto-components-forms"
					class="shutto-closable shutto-close">
					<h1>
						フォーム <span class="shutto-pro">Pro</span>
					</h1>
					<ul>
						<li id="shutto-component_form" class="shutto-disabled">
							<div class="shutto-image">
								<img alt="Parts_form_s"
									src="jsp/sub/parts_form_s-fdb1b0728b11b4d379d4db95b8a10906.png">
							</div> フォーム
						</li>
						<li id="shutto-component_button" class="shutto-disabled">
							<div class="shutto-image">
								<img alt="Parts_button_s"
									src="jsp/sub/parts_button_s-81ff65644cf7865dbd547ae1b066f5d2.png">
							</div> ボタン
						</li>
						<li id="shutto-component_textfield" class="shutto-disabled">
							<div class="shutto-image">
								<img alt="Parts_textfield_s"
									src="jsp/sub/parts_textfield_s-e54435e8e5de6c373e0d23b54a5f03a1.png">
							</div> テキスト入力
						</li>
						<li id="shutto-component_checkbox" class="shutto-disabled">
							<div class="shutto-image">
								<img alt="Parts_checkbox_s"
									src="jsp/sub/parts_checkbox_s-64ff82c29d2775546f2091cb63144678.png">
							</div> チェックボックス
						</li>
						<li id="shutto-component_select" class="shutto-disabled">
							<div class="shutto-image">
								<img alt="Parts_select_s"
									src="jsp/sub/parts_select_s-be20211c1198ba18957bca80ffcf2f94.png">
							</div> セレクト
						</li>
					</ul>
				</section>
			</section>

			<!--各iPhone用サイズの表示領域-->
			<section id="shutto-preview-container" class="shutto-after-load"
				style="visibility: visible;">
				<header>
					<div class="" id="shutto-preview-button-width">幅320px
						(iPhone)</div>
					<div id="shutto-preview-button-menu">メニュー</div>
				</header>
				<div>

					<!--追加されるコンテンツ表示領域-->
					<div id="shutto-preview" class="shutto-selected shutto"
						ondrop="drop(event)" ondragover="allowDrop(event)">
						<!--
                <div class="shutto-editor-ui shutto-focus-frame" style="left: 1px; width: 316px; top: 0px; height: 21.4px; display: none;"></div>
                <div class="shutto-editor-ui shutto-select-frame" style="left: 0px; width: 320px; top: 0px; height: 23.4px; display: none;"></div>
                <div class="shutto-editor-ui shutto-insertion-frame shutto-replace" style="height: 96px; left: 15px; top: 169.8px; width: 290px; display: none;"></div>
                -->
						<!--ここにコンテンツが追加される-->

						<!--<div class="shutto-page-padding"></div>-->
					</div>

				</div>


				<footer>
					<div id="shutto-selection">
						<span class="shutto-selected">ページ</span>
					</div>
				</footer>
			</section>



			<!--読み込まれたページの表示領域-->
			<section id="shutto-source-container" class="shutto-after-load"
				style="visibility: visible;">
				<div>
					<iframe src="" id="shutto-source"></iframe>
				</div>

				<footer>
					<div id="shutto-source-reload">
						<span title="PCページを最新の状態に更新">更新</span>
					</div>
					<div id="shutto-source-zoom">
						<span title="ズーム">100%</span>
					</div>
					<div class="" id="shutto-source-zoom-panel">
						<input min="10" max="100" value="100" type="range">
					</div>
					<div id="shutto-source-cssswitch">
						<span class="" title="CSS有効化/無効化">CSS</span>
					</div>

					<div id="shutto-selectors">
						<span>input</span><span class="shutto-separator">&lt;</span><span>td</span><span
							class="shutto-separator">&lt;</span><span>tr</span><span
							class="shutto-separator">&lt;</span><span>tbody</span><span
							class="shutto-separator">&lt;</span><span>table</span><span
							class="shutto-separator">&lt;</span><span>form</span><span
							class="shutto-separator">&lt;</span><span>td</span><span
							class="shutto-separator">&lt;</span><span>tr</span><span
							class="shutto-separator">&lt;</span><span>tbody</span><span
							class="shutto-separator">&lt;</span><span>table</span><span
							class="shutto-separator">&lt;</span><span>td</span><span
							class="shutto-separator">&lt;</span><span>tr</span><span
							class="shutto-separator">&lt;</span><span>tbody</span><span
							class="shutto-separator">&lt;</span><span>table</span><span
							class="shutto-separator">&lt;</span><span>td</span><span
							class="shutto-separator">&lt;</span><span>tr</span><span
							class="shutto-separator">&lt;</span><span>tbody</span><span
							class="shutto-separator">&lt;</span><span>table</span><span
							class="shutto-separator">&lt;</span><span>td</span><span
							class="shutto-separator">&lt;</span><span>tr</span><span
							class="shutto-separator">&lt;</span><span>tbody</span><span
							class="shutto-separator">&lt;</span><span>table</span><span
							class="shutto-separator">&lt;</span><span class="shutto-selected">center</span><span
							class="shutto-separator">&lt;</span><span>body</span>
					</div>
				</footer>

			</section>

		</section>






	</div>

	<div id="shutto-image-library" class="shutto-dialog-container"></div>

	<iframe id="shutto-proxy" src="jsp/sub/proxy.htm"></iframe>












</body>
</html>