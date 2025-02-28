
export let randomLetters = []

export function sentence(){

  const letters = 'abcdefghijklmnopqrstuvwxyz'

  let lettersRange = []

  for(let i = 0; i<letters.length;i++){
    lettersRange.push(letters.charAt(i))  
  }

  const letterGenerate = ()=>{ 
    
    const letterIndex= (Math.floor(Math.random()*letters.length))
    const letter = lettersRange[letterIndex]
    randomLetters.push(letter)
    
    return letter 
  }


  function wordGenerate (){
    let numberOfLetters = Math.floor(Math.random()*8)
    while (!numberOfLetters){numberOfLetters =Math.floor(Math.random()*8)}
    
    let word =''
    for ( let k = 0; k < numberOfLetters; k++ ){
      word += letterGenerate()
    }
    randomLetters.push(' ')
    return word
  }


  function sentenceGenerate(){
    let numberOfWords =Math.floor(Math.random()*5)
    while (!numberOfWords){numberOfWords =Math.floor(Math.random()*5)}
    randomLetters = []
    let sentence = ''
    for (let j=0 ;j < numberOfWords ;j++){
      sentence += wordGenerate() + ' '
    }
    document.querySelector('.display').innerHTML= sentence
    
    
    console.log(randomLetters)
    return sentence
  }
  return sentenceGenerate()
}