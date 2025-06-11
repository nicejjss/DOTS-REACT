export function singleRun(musicIntance) {
    if (musicIntance.getMusicVolume() === 0) {
        return;
    }

    musicIntance.play();
    musicIntance.music.addEventListener('ended', () => {
        musicIntance.destroy(); // Clean up after the sound finishes
    });
}

export function createAndPlay(musicIntance, volume){
    musicIntance.changeVolume(volume);
    singleRun(musicIntance);
}