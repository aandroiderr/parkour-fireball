var Runner = Fire.Class({
    constructor: function() {
        Fire.log("constructor.");
    },
    onLoad: function() {
        Fire.log("on load");
        var actionTo = new cc.MoveTo(2, cc.p(300, 85));
        this.runAction(new cc.Sequence(actionTo));
    }
});
module.exports = Runner;
