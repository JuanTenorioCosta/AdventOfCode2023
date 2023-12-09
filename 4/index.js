import { testInput, puzzleInput } from "./puzzle-input.js"


//------------PART 1-----------------------//
const totalValue = input => {
  let result = 0

  for (const cardIndex in input) {
    let cardTotal = 0
    const card = input[cardIndex]

    card.actual.forEach( number => {
      if(card.winning.includes(number)) {
        cardTotal *= 2

        if(cardTotal == 0) {
          cardTotal++
        }
      }
    })

    result += cardTotal
  }

  return result
}

//-------------------PART 2----------------------------//
const totalCards = input => {
  const resultInput = input
  let totalInstances = 0

  for (const cardIndex in resultInput) {
    const card = resultInput[cardIndex]

    card.instances = card.instances ? card.instances : 1

    totalInstances += card.instances

    let winningNumbers = 0

    card.actual.forEach( number => {
      if(card.winning.includes(number)) {
        winningNumbers++
      }
    })

    for( let i = 1; i <= winningNumbers; i++ ){
      const cardIndexAsNum = parseInt(cardIndex)
      
      if(resultInput[cardIndexAsNum + i]) {
        let instances = resultInput[cardIndexAsNum + i].instances ? resultInput[cardIndexAsNum + i].instances : 1

        resultInput[cardIndexAsNum + i].instances = instances + card.instances
      }
    }
  }

  return totalInstances
}

console.log("Total points in scratchcards: ", totalValue(puzzleInput))
console.log("Total number of scratchcards: ", totalCards(puzzleInput))