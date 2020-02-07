// Action creator
export const selectSong = song => {
    // Retrun an action
    return {
        type: 'SONG_SELECTED',
        payload: song,
    };
};
