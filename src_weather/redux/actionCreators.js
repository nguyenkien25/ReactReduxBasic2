import getTemp from '../api/getTemp';

export function startFetchData(){
    return { type: 'START_FETCH' };
}

export function fetchSuccess(cityName, temp){
    return { 
        type: 'FETCH_SUCCESS',
        cityName,
        temp
    };
}

export function fetchError(){
    return { type: 'FETCH_ERROR' };
}

export function fetchDateThunk( cityName ){
    return dispatch => {
        dispatch(startFetchData());
        getTemp(cityName)
        .then(temp => {
            console.log(temp);
            dispatch(fetchSuccess(cityName, temp));
        })
        .catch(err => {
            console.log(err);
            dispatch(fetchError());
        });
    };
}