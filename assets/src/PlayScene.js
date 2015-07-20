var PlayScene = Fire.Class({
    constructor: function() {

    },

    onLoad: function() {
        cc.view.setDesignResolutionSize(640, 320, cc.ResolutionPolicy.SHOW_ALL);
        cc.view.resizeWithBrowserSize(true);
    }

});
module.exports = PlayScene;
