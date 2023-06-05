// try{
    // console.log(a+b)
//     throw new ReferenceError();
// } catch(err){
//     console.log(err)
//     console.log('there was an error')
//     console.log('the error was saved in the error log')
// }
// console.log("my program does not stop")

/* undefinde, null and empty values-*/

// function addtwonum(a,b){
//     try{
//         if (typeof(a)!='number'){
//             throw new ReferenceError('the forst argument is not number')
//         } else if (typeof(b)!='number'){
//             throw new ReferenceError("the second argument is not number")
//         } else {
//         console.log(a+b)
//         }
//     } catch(err){
//         console.log('Error!',err)
//     }
// }
// addtwonum(5,'5')
// console.log('it still works')

/* defensive programming*/

// function letterfinder(word,match){
//     var con1=typeof(word)=='string' && word.length >=2;
//     var con2=typeof(match)=='string' && match.length ==1;
//     if(con1 && con2) {
//         for(var i=0;i<word.length; i++){
//             if(word[i]==match){
//                 console.log('Found the',match,'at',i)
//             } else {
//                 console.log('----No match found at',i)
//             }
//         }
//     } else {
//         console.log('Please pass the correct argument to the function')
//     }
// }
// letterfinder([],[])
// letterfinder('shivay','a')


const prompt = require('prompt-sync')();

function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
    var condition2 = typeof(match) == 'string' && match.length == 1; //if the match is a string and the length is equal to 1
    if(condition1 && condition2) { //if both condition matches
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //check if the character at this i position in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        //if the requirements don't match
        console.log("Please pass correct arguments to the function")
    }
}

// Get user input
const word = prompt('Enter a word: ');
const match = prompt('Enter a character to match: ');

// Call the letterFinder function with the user input
letterFinder(word, match);
