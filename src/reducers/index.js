import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Barbie Girl', duration: '4:05' },
        { title: 'Smells Like Teen Spirit', duration: '4:38' },
        { title: 'I Want It That Way', duration: '3:39' },
        { title: 'Torn', duration: '4:03' }
    ];
};


const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};




export default combineReducers ({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})