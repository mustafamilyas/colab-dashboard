const ls = window.localStorage;

export function getLocalStorage(attribute){
    return ls.getItem(attribute);
}
  
export function setLocalStorage(attribute, value){
    return ls.setItem(attribute, value);
}

export function removeLocalStorage(attribute){
    return ls.removeItem(attribute);
}
  
export function isOnLocalStorage(attribute){
    return !!ls.getItem(attribute);
}