import { sentence, randomLetters } from "./generating.js"



let corectedText= document.querySelector('.corrected')

let error=0

document.querySelector('.userInput').addEventListener('keydown',(event)=>{if  (event.key == 'Enter'){check() }})

let sentenceLength = sentence()

export function check(){
  

  let userInput = document.querySelector('.userInput')
  let userLetters=[]

  for(let i=0; i<userInput.value.length;i++){
    userLetters.push(userInput.value.charAt(i))
  }
  
  for (let i=0;i<userLetters.length;i++){

    if(randomLetters[i]!==userLetters[i]){
      let falseAnswer = document.createElement('mark')

      falseAnswer.innerHTML= userLetters[i]

      corectedText.appendChild(falseAnswer)

      error++
    }
    else{corectedText.innerHTML+=userLetters[i]
    }
    
    console.log(randomLetters[i],userLetters[i])
  }
  corectedText.innerHTML+=' '
  document.querySelector('.error').innerHTML=`error: ${error}`
  userInput.value=''
  
  sentence()
}
  

           


