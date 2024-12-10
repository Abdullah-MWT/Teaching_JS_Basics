// The Vowel Counter: You need to create a function that counts the number of vowels in a given
// string. Consider both uppercase and lowercase vowels.

const vowelCounter = (arrElements) => {
    const vowels = /[aeiouAEIOU]/;
    const counts = [];
    
    arrElements.forEach((word) => {
        let vowelCount = 0;
        const characters = word.split('');
       
        characters.forEach((char) => {
            if (vowels.test(char)) {
                vowelCount++
            }
        })
        counts.push({word, vowelCount});
    })
  return counts
}

const arr = ['Abdullah'];
const modifiedArr = vowelCounter(arr);
console.log(modifiedArr);


