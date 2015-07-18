var Menu = Fire.Class({
    constructor: function() {
        cc.view.setDesignResolutionSize(480, 320, cc.ResolutionPolicy.SHOW_ALL);
        cc.view.resizeWithBrowserSize(true);
    },

    onLoad: function() {
        this.btnStart = this.getChildByName('btnStart');
        this.btnStart.addTouchEventListener(this.touchEvent,this);
    },

    touchEvent: function (sender, type) {
        if (type === ccui.Widget.TOUCH_BEGAN) {
            Fire.log("button pressed!");
        }
    }
});

module.exports = Menu;
