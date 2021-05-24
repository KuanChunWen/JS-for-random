// 陣列反轉
const friends = ["Harry", "Ron", "Snap"];
const reversed_friends = [];

for(let i = 0 ,j = 2;i < friends.length ;i++,j--){
    reversed_friends[i] = friends[j];
}
console.log(reversed_friends);

//另一種解

// for(let i = friends.length-1 ; i >= 0 ; i--){
//     let friend = friends[i];
//     reversed_friends.push(friend);
// }
// console.log(reversed_friends);
