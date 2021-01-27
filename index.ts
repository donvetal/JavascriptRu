// функция с аргументом, возвращающая результат, результат вывести в консоль

let y = (str, count) => {
    let i=0;
    let result='';
    while(i<count){
       result += str + ' ';
       i++
    }
    return result
}

console.log(y('Hello', 3))

// git add .
// git commit -m 'Initial commit'


