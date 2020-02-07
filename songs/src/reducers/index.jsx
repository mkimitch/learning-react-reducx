import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Thursday', duration: '2:04' },
        { title: 'Ninety-Three', duration: '4:15' },
        { title: 'Crawlspace', duration: '1:24' },
        { title: 'Something', duration: '3:55' },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});
