//Задача 1
/*
Реализуйте функцию concatenateStrings, которая принимает две строки в качестве аргументов, возвращает результат 
их конкатенации и удаляет все пробелы.

'aa', 'bb' => 'aabb'
'aa',' '    => 'aa'
'',  'bb'  => 'bb'

*/

const concatenateStrings = (s, str) => {
    let string = s.trim() + str.trim();
    return string;
}
console.log("Задача 1: " + concatenateStrings("he  ", "  llo ") + ";" + concatenateStrings("  ", "  llo "))


//Задача 2
//Реализуйте функцию getStringLength, которая принимает строку в качестве аргумента и возвращает ее длину.

const getStringLength = (str) => str.length;
console.log("Задача 2: " + getStringLength("jefjef"))

//Задача 3
/*
Реализуйте функцию getStringFromTemplate, которая принимает параметры firstName и lastName 
и возвращает результат подстановки этих значений в строку-шаблон 'Hello, firstName  lastName!'.
Важно: используйте интерполяцию (шаблонные строки) для формирования результата, а не операцию конкатенации.

'John','Doe'      => 'Hello, John Doe!'
'Chuck','Norris'  => 'Hello, Chuck Norris!'

*/

const getStringFromTemplate = (firstName, lastName) => {
  return `Hello, ${firstName} ${lastName}!`;
}
console.log("Задача 3: " + getStringFromTemplate("ALex", "BRO"))

//Задача 4
/*
Реализуйте функцию getChar, которая принимает строку и порядковый номер символа в строке 
и возвращает символ, соответствующий этому порядковому номеру.

'John Doe', 1  => 'J'
'cat', 3       => 't'

*/

const getChar = (str, n) => str[n - 1]
console.log("Задача 4: " + getChar("ALexey", 5) + ";" + getChar("ALexey BROy", 2))

//Задача 5
/*
Реализуйте функцию removeFirstOccurrences, которая удаляет первое вхождение подстроки  внутри строки.

'To be or not to be', 'not'  => 'To be or  to be'
'I like legends', 'end' => 'I like legs',
'ABABAB','BA' => 'ABAB'
*/

const removeFirstOccurrences = (str, s) => {

    const index = str.indexOf(s);

    if (index === -1) {
        return str;
    }
    return str.slice(0, index) + str.slice(index + s.length);
}
console.log("Задача 5: " + removeFirstOccurrences("alexloh", "loh"))

//Задача 6
/* 
Реализуйте функцию getRectangleString, которая  возвращает строковое представление прямоугольника 
с заданной шириной и высотой, используя символы '*'.
        *
5, 4 => *   *
        *   *
        *

*/
console.log("Задача 6: ")

const getRectangleString = (w, h) => {
    for(let i = 0; i < h; i++){
        console.log("*".repeat(w));
    }
}
getRectangleString(6, 3);