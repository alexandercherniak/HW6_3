let list = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 8, 8, 8, 9, 9];
console.log(list);

function compress(list) {
  let counter = 1;
  let listNew = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i+1] === list[i]) {
        counter++;
      } else {
        listNew.push(counter);
        counter = 1;
      } 
    } return (listNew);
  }

console.log(compress(list));

