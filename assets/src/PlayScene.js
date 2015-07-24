var PlayScene = Fire.Class({
    extends: Fire.Behavior,
    properties: {
        runner: {
            default: null,
            type: Fire.Runtime.NodeWrapper
        }
    },

    onLoad: function() {
        this.space = null;
        cc.view.setDesignResolutionSize(640, 320, cc.ResolutionPolicy.SHOW_ALL);
        cc.view.resizeWithBrowserSize(true);
        this.space = new cp.Space();
        this.space.gravity = cp.v(0, -350);
        var wallBottom = new cp.SegmentShape(this.space.staticBody,
                                            cp.v(0, g_groundHeight),
                                            cp.v(4294967295, g_groundHeight),
                                            0);//thickness
        this.space.addStaticShape(wallBottom);
        this.initRunner();
    },

    update:function (dt) {
        // chipmunk step
        this.space.step(dt);
    },

    initRunner: function() {
        this.runner.initSpace(this.space);
    }

});
