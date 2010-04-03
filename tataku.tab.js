
var x = 0;
var y = 0;

function orientTest(ori){
    let div_x = x - ori.x;
    let div_y = y - ori.y;
    if (div_x > 0.2) {
        jetpack.tabs.focused.raw.ownerDocument.defaultView.gBrowser.mTabContainer.advanceSelectedTab(1);
    } else {

    }
    x = ori.x;
    y = ori.y;
}

jetpack.tabs.focused.contentWindow.addEventListener("MozOrientation", orientTest, true);
