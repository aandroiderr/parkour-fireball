var Runner = Fire.Class({
    constructor: function() {
        // Fire.log("constructor.");
        this.runningAction = null;
    },
    properties: {
        runnerFrames: {
            default: null,
            type: Runtime.SpriteAtlas,
            notify: function() {
                this._runnerAsset = Editor.serialize.asAsset(this.runnerFrames);
            }
        },
        _runnerAsset: {
            default: null
        }
    },
    onLoad: function() {
        Fire.log("on load");
        var self = this;
        var actionTo = new cc.MoveTo(2, cc.p(300, 85));
        this.runAction(new cc.Sequence(actionTo));

        var asseturl = self._runnerAsset.urls;
        cc.spriteFrameCache.addSpriteFrames(asseturl[0]);
        // init runningAction
        var animFrames = [];
        for (var i = 0; i < 8; i++) {
            var str = "runner" + i + ".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            animFrames.push(frame);
        }
        var animation = new cc.Animation(animFrames, 0.1);
        self.runningAction = new cc.RepeatForever(new cc.Animate(animation));
        self.runAction(self.runningAction);
        Fire.log("ground height: " + g_groundHeight);
        // });
    },
    initSpace: function(space) {
        Fire.log("init space");
    }
});
module.exports = Runner;
