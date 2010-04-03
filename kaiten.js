
var rotateFlg = false;
var xCounter = 0;
var zCounter = 0;

function rotateFx(ori) {
    if (!rotateFlg) {
	if (ori.x == 1) {
	    xCounter = xCounter + 1;
	    if (xCounter == 3) {
		//回転フラグをたてる
		rotateFlg = true;
		//カウンターをリセット
		xCounter = 0;
		//x軸に傾ける
		rotateX();
	    }
	}
    }
    if (rotateFlg) {
	if (ori.z == 1) {
	    zCounter = zCounter + 1;
	    if (zCounter == 3) {
		//回転フラグをたてる
		rotateFlg = false;
		//カウンターをリセット
		zCounter = 0;
		//z軸に戻す
		rotateZ();
	    }
	}
    }
}

function rotateX() {
    $(jetpack.tabs.focused.contentDocument)
        .find("body")
	.css("-moz-transform", "rotate(-90deg)");   
    //document.style("-moz-transform: rotate(-90deg)");
}

function rotateZ() {
    $(jetpack.tabs.focused.contentDocument)
        .find("body")
	.css("-moz-transform", "rotate(0deg)");
    //document.style("-moz-transform: rotate(0deg)");
}

jetpack.tabs.focused.contentWindow.addEventListener("MozOrientation", rotateFx, true);
