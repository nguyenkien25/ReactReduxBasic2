export function toggleIsAdding() {
    return { type: 'TOGGLE_IS_ADDING' };
};

export function addWord(en, vn){
    return {
        type: 'ADD_WORD',
        en,
        vn
    }
};