import puzzleinput from './puzzle-input.js'

//CÓDIGO COMÚN
const colors = ['red', 'green', 'blue']

//EJERCICIO 1
const colorsLimits = {
  red: 12,
  green: 13,
  blue: 14
}

const checkValidColors = showedCubes => {
  const invalidColors = colors.filter( color => color in showedCubes && showedCubes[color] > colorsLimits[color] ? true : false )

  return invalidColors.length == 0
}

const validGame = game => {
  let index = 0
  const limit = game.length
  let valid = true

  do {
    checkValidColors(game[index]) ? index++ : valid = false
  } while ( index < limit && valid )

  return valid
}

console.log("Respuesta 1: ", puzzleinput.reduce( (acc, game, index) => validGame(game) ? acc+index+1 : acc, 0))

//EJERCICIO 2
const getCubesPower = game => {
  const maxCubesByColor = colors.map( () => 0 )

  game.forEach( showedCubes => {
    colors.forEach( (color, index) => {
      color in showedCubes && showedCubes[color] > maxCubesByColor[index] ? maxCubesByColor[index] = showedCubes[color] : '' })
  });

  return maxCubesByColor.reduce( (acc, maxColor) => maxColor * acc, 1 )
}

console.log("Respuesta 2: ", puzzleinput.reduce( (acc, game) => acc + getCubesPower(game), 0))