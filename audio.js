var Audio = class {
    constructor() {
        this.lastVolume = 100;
        this.children = []
        if (!Meteor.Audio) {
            try {
                window.AudioContext = window.AudioContext||window.webkitAudioContext;
                this.context = new AudioContext();
                this.node = this.context.createGain();
                this.node.connect(this.context.destination);
            }
            catch(e) {}
            Meteor.Audio = this;
        } else {
            this.node = Meteor.Audio.context.createGain();
        }
    }

    connect(childNode) {
        childNode.node.connect(this.node);
        this.children.push(childNode);
    }

    getNode() {
        return this.node;
    }

    setVolume (val) {
        this.node.gain.value = val / 100;
    }

    mute (muted, effect, time = 2) {
        if (effect) {

        } else {

        }
    }
}

var Icecast = class {
    constructor(parent) {
        this.Audio = new Audio();
        parent.Audio.connect(this.Audio);
    }

    open(url, play) {

    }

    play() {

    }

    stop() {
        
    }
}

export {
    Audio,
    Icecast
}