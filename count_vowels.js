//! problem 6. Count Vowels

const CountVowel = (word) => {
  let count = 0;
  const vowels = 'aeiou'
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      count++
    }
  }
  return count
}

console.log(CountVowel("pneumonoultramicroscopicsilicovolcanoconiosis"));