
var rotateFlg = false;
var xCounter = 0;
var zCounter = 0;

function rotateFx(ori) {
    if (!rotateFlg) {
	if (ori.x == 1) {
	    xCounter = xCounter + 1;
	    if (xCounter == 3) {
		//��ž�ե饰�򤿤Ƥ�
		rotateFlg = true;
		//�����󥿡���ꥻ�å�
		xCounter = 0;
		//x���˷�����
		rotateX();
	    }
	}
    }
    if (rotateFlg) {
	if (ori.z == 1) {
	    zCounter = zCounter + 1;
	    if (zCounter == 3) {
		//��ž�ե饰�򤿤Ƥ�
		rotateFlg = false;
		//�����󥿡���ꥻ�å�
		zCounter = 0;
		//z�����᤹
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
