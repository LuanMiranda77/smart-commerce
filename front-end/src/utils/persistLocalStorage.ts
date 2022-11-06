
export function persistLocalStorage<T>(key: string, initialState: T)  {

    const localStorageValue = localStorage.getItem(key);
    if(localStorageValue){
        if(JSON.stringify(initialState) === localStorageValue){
            return JSON.parse(localStorageValue);
        }else{
            localStorage.setItem(key, JSON.stringify(initialState));
        return initialState;
        }
    }else{
        localStorage.setItem(key, JSON.stringify(initialState));
        return initialState;
    }
}
