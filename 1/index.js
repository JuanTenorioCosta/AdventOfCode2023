import valuesFormatted from './values.js'

/**
 * Check if Char represents a number [1-9]
 * @param letter: Char
 * @returns true if char is a number (one, two, three, ..., nine). False otherwise.
 */
const checkLetterIsNumber = letter => letter >= '1' && letter <= '9' ? true : false

/**
 * Check if substring starting from index represents a number [1-9]
 * @param stringArr: Complete string
 * @param index: Index where actual substring should be checked
 * @returns true if substring starting from index represents a number (one, two, three, ..., nine). False otherwise.
 */
const checkSubstringIsNumber = (stringArr, index) => {
  const currentValue = stringArr[index]

  if(stringArr.length - index < 3 || 
    (currentValue != 'o' && currentValue != 't' && currentValue != 'f' && currentValue != 's' && currentValue != 'e' && currentValue != 'n')){
    return false
  }

  switch(currentValue){
    //'one'
    case 'o':
      return stringArr[index+1] == 'n' && stringArr[index+2] == 'e' ? true : false
    //'two' or 'three'
    case 't':
      if(stringArr[index+1] == 'w' && stringArr[index+2] == 'o'){
        return true
      }
      //Array size check
      else if( stringArr.length - index < 5 ) {
        return false
      } else {
        return stringArr[index+1] == 'h' && stringArr[index+2] == 'r' && stringArr[index+3] == 'e' && stringArr[index+4] == 'e' ? true : false
      }
    //'four' or 'five'
    case 'f':
      //Array size check
      if( stringArr.length - index < 4 ){
        return false
      } else {
        return ((stringArr[index+1] == 'o' && stringArr[index+2] == 'u' && stringArr[index+3] == 'r') ||
        (stringArr[index+1] == 'i' && stringArr[index+2] == 'v' && stringArr[index+3] == 'e') ) ? true : false
      }
    //'six' or 'seven'
    case 's':
      if(stringArr[index+1] == 'i' && stringArr[index+2] == 'x'){
        return true
      }
      //Array size check
      else if( stringArr.length - index < 5 ) {
        return false
      } else {
        return stringArr[index+1] == 'e' && stringArr[index+2] == 'v' && stringArr[index+3] == 'e' && stringArr[index+4] == 'n' ? true : false
      }
    //'eight'
    case 'e':
      //Array size check
      if( stringArr.length - index < 5 ) {
        return false
      }
      else {
        return stringArr[index+1] == 'i' && stringArr[index+2] == 'g' && stringArr[index+3] == 'h' && stringArr[index+4] == 't' ? true : false
      }
    //'nine'
    case 'n':
      //Array size check
      if( stringArr.length - index < 4 ) {
        return false
      }
      else {
        return stringArr[index+1] == 'i' && stringArr[index+2] == 'n' && stringArr[index+3] == 'e' ? true : false
      }
  }
}

/**
 * If a valid substring starting from index represents a number, that number is returned
 * @param stringArr: Complete string
 * @param index: Index where substring representing a number starts
 * @returns Number
 */
const convertNumberSubstring = (stringArr, index) => {
  const currentValue = stringArr[index]

  switch(currentValue){
    //'one'
    case 'o':
      return 1
    //'two' or 'three'
    case 't':
      return stringArr[index+1] == 'w' ? 2 : 3
    //'four' or 'five'
    case 'f':
      return stringArr[index+1] == 'o' ? 4 : 5
    //'six' or 'seven'
    case 's':
      return stringArr[index+1] == 'i' ? 6 : 7
    //'eight'
    case 'e':
      return 8
    //'nine'
    case 'n':
      return 9
  }
}

/**
 * Gets the first number it encounters, counting numbers as 1-9, or numbers spelled as one-nine. Can start at beggining or end
 * @param stringArr: Complete string to look
 * @param forward: Boolean, in case is true it goes first to last. False goes otherwise
 * @returns The first number it encounters.
 */
const getNumber = (stringArr, forward) => {
  let found = false
  let index = forward ? 0 : stringArr.length - 1
  const offset = forward ? 1 : -1
  let result

  do {
    //Si el char es un número: [1-9]
    if(checkLetterIsNumber(stringArr[index])) {
      result = stringArr[index]
      found = true
    }
    //Si el número proviene de cadena
    else if(checkSubstringIsNumber(stringArr, index)) {
      result = convertNumberSubstring(stringArr, index)
      found = true
    }
    //No es número, seguir
    else {
      index = index + offset
    }
  }while(!found)

  return result
}

const getFirstNumber = stringArr => {
  return getNumber(stringArr, true)
}

/**
 * Gets an array of chars and return first number it encounters as a number going bottom to start
 * @param stringArr: Array string to look
 * @returns First number encountered
 */
const getLastNumber = stringArr => {
  return getNumber(stringArr, false)
}

/**
 * Gets an array of chars and return first number it encounters as a number going start to bottom
 * @param stringArr: Array string to look
 * @returns Char representing a number
 */
const getFirstNumberAsChar = stringArr => {
  return `${getFirstNumber( stringArr )}`
}

/**
 * Gets an array of chars and return first number it encounters as a char going bottom to start
 * @param stringArr: Array string to look
 * @returns Char representing a number
 */
const getLastNumberAsChar = stringArr => {
  return `${getLastNumber( stringArr )}`
}

const result = valuesFormatted.reduce( (acc, string) => 
  acc + parseInt( getFirstNumberAsChar( Array.from( string ) ) + getLastNumberAsChar( Array.from( string ) ) )
, 0 )

console.log(result)