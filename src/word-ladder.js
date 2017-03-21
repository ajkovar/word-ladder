function isValidTransform(word, compareWord) {
  let foundDifference = false
  for(var i=0;i<word.length;i++){
    if(word[i] !== compareWord[i]) {
      if(foundDifference) {
        return false
      }
      foundDifference = true
    }
  }
  return foundDifference
}

export { isValidTransform }

function wordLadder(beginWord, endWord, wordList) {
  let transforms = wordList.filter((word) => isValidTransform(beginWord, word))
  let nonTransforms = wordList.filter((word) => !isValidTransform(beginWord, word))
  let lowest = 0
  for(let transform of transforms) {
    if(transform === endWord) {
      return 2
    }
    let count = wordLadder(transform, endWord, nonTransforms)
    if(count!==0 && count < lowest || lowest === 0) {
      lowest = count
    }
  }
  return lowest===0 ? 0 : lowest+1
}

export default wordLadder
