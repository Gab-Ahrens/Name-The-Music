class Player {
    constructor() {
        this.music = [...music];
    }

    shuffleMusicArray() {
        const shuffledArray = this.music.sort((a, b) => 0.5 - Math.random());
        return shuffledArray;
    };

    shuffledMusic() {
        return this.music;
    }

    playSong(index) {
        return this.music[index].src;
    }


}
