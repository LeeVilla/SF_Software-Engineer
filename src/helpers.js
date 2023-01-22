function choice(items) {
  let i = Math.floor(Math.random() * items.length);
  return items[i];
}

function remove(item,items){
    for(let i=0; i < items.length; i++){
        if (items[i] === item) {
            reutn[...items.slice(0,i), ...items.slice(i+1)];
        }
    }
}

export { choice, remove }
