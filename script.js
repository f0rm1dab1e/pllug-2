// написати скріпт, який призведе до краху вкладки в браузері
// let i = 3 
// while(i){
    // console.log(i++)
// }


// Написати код, яка на вході приймає стрічку і змінює всі малі букви на великі, а великі на малі. Тобто ‘Test’ ⇒ ‘tEST’;
// let msg = prompt('Write some srting');
// let msgStr = [];   
// let changedMsg = [];
// msgStr = msg.split('');
// for(let i=0; i<msgStr.length; i++){
//     if(msgStr[i].toUpperCase() == msgStr[i]){
//         changedMsg.push(msgStr[i].toLowerCase());
//     }else{
//         changedMsg.push(msgStr[i].toUpperCase());
//     }
// }
// console.log(changedMsg.join('')+" - new Message");
const message = prompt('Write some srting') || '';
const newMessage = message.split('').reduce((reversedStr, char) => {
  return (
    reversedStr + (char === char.toUpperCase()
        ? char.toLowerCase()
        : char.toUpperCase())
  );
}, '');
console.log(`${newMessage} - New Message`);

//Попрактикуватися з оператором typeOf
typeof undefined // "undefined"
typeof 0 // "number"
typeof 1n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol('id') // "symbol which is describe 'id'"
typeof {} // "object"
typeof null // "object"  
typeof function(){} // "function"  