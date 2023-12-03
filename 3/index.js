import parsedEngine from "./engine-input.js"

//Símbolos posibles
const symbols = ['%', '#', '*', '/', '@', '$', '&', '=', '+', '-']

//Si el caracter es un número
const checkLetterIsNumber = letter => letter >= '0' && letter <= '9' ? true : false

//Si el caracter es un símbolo
const checkIsSymbol = char => symbols.includes(char)

//Obtener la longitud del número actual
const getNumberLength = (engine, actualHeight, actualWidth, limitWidth) => {
  let ended = false
  let currentIndex = actualWidth + 1

  while( !ended && currentIndex < limitWidth ) {
    checkLetterIsNumber(engine[actualHeight][currentIndex]) ? currentIndex++ : ended = true
  }

  return currentIndex - actualWidth
}

//Obtener el número: Si es '5', '4', '3' devuelve 543
const getValueFrom = (engine, height, width, numberLength) => {
  let currentLength = 0
  let toret = ''

  do {
    toret += engine[height][width+currentLength]
    currentLength++
  } while(currentLength < numberLength + 1)

  return parseInt(toret)
}

//--------------------------------PARTE 1 -----------------------------------------------------------//

//Comprobar si el número es válido
const isValidNumber = (engine, height, width, numberLength) => {
  //Aux functions: Comprobar límites y comprobar línea actual
  const isOnStartLimits = index => index - 1 >= 0 ? false : true
  const isOnEndLimits = (array, index) => index + 1 < array.length ? false : true

  const previousLineThanNumber = () => currentHeight == -1 ? true : false
  const sameLineAsNumber = () => currentHeight == 0 ? true : false
  const nextLineThanNumber = () => currentHeight == 1 ? true : false

  //Comprobar si está en algún borde y guardarlo
  const isHeightStartLimit = isOnStartLimits(height)
  const isHeightEndLimit = isOnEndLimits(engine, height)

  const isWidthStartLimit = isOnStartLimits(width)
  const isWidthEndLimit = isOnEndLimits(engine[height], width)

  //Valor a sumar o restar a los indexes
  let currentHeight = isHeightStartLimit ? 0 : -1
  let currentWidth = isWidthStartLimit ? 0 : -1
  let symbolFound = false
  let keepSearching = true

  //Función para cambiar de línea
  const newLine = () => {
    let toret = true

    //Actualizar ancho
    currentWidth = -1

    //Si está en el borde evita el -1
    if( isWidthStartLimit ) {
      currentWidth = 0
      //Caso especial - Vamos a la misma línea que el número y no queremos pisarlo
      if(previousLineThanNumber()) {
        currentWidth = numberLength
      }
    }

    //Última fila => No podemos bajar más
    if( nextLineThanNumber() ){
      toret = false
    }
    //Misma línea pero no hay línea debajo => No podemos bajar más
    if( sameLineAsNumber() && isHeightEndLimit ) {
      toret = false
    }

    currentHeight++ 

    return toret
  }

  //Función para actualizar índices, cambia el ancho y si hace falta cambiar el alto llama a newLine
  const updateIndexes = () => {
    let toret = true

    if( !sameLineAsNumber() ){
      if(!isWidthEndLimit) {
        currentWidth == numberLength ? toret = newLine() : currentWidth++
      } else {
        currentWidth == numberLength ? toret = newLine() : currentWidth++
      }
    } else {
      if(!isWidthEndLimit) {
        currentWidth == numberLength ? toret = newLine() : currentWidth = numberLength
      } else {
        toret = newLine()
      }
    }
    
    return toret
  }

  do {
    checkIsSymbol(engine[height + currentHeight][width + currentWidth]) ? symbolFound = true : keepSearching = updateIndexes()
  } while ( !symbolFound && keepSearching )
  return symbolFound
}

//Función que recorre la matriz. Llama a isValidNumber para comprobar si es válido y a getValueFrom para sumar su valor si lo es
const getValidNumbersSum = parsedEngine => {
  let heightIndex = 0
  let widthIndex = 0
  const heightLimit = parsedEngine.length
  const widthLimit = parsedEngine[0].length

  let total = 0

  const newLine = () => { 
    heightIndex++
    widthIndex = 0
  }

  do {
    if( checkLetterIsNumber(parsedEngine[heightIndex][widthIndex]) ) {
      const numberLength = getNumberLength(parsedEngine, heightIndex, widthIndex, widthLimit)
      if(isValidNumber(parsedEngine, heightIndex, widthIndex, numberLength)) {
        total += getValueFrom(parsedEngine, heightIndex, widthIndex, numberLength)
      }
      
      widthIndex += numberLength
    }
    widthIndex + 1 < widthLimit ? widthIndex++ : newLine()
  } while( heightIndex < heightLimit )

  return total
}


//------------------------------------PARTE 2------------------------------------------------//
const checkLetterIsGear = letter => letter == '*'

/*
 *Una vez se encuentra un número válido de un gear, busca donde empieza el número y obtiene su valor.
 *'5', '4', '3', '*', el * detecta el 3 y manda esa posición a esta función, esta función se encarga
 *de devolver el 543.
 */
const getValue = (engine, height, width) => {
  if(width == 0) {
    return getValueFrom( engine, height, width, getNumberLength(engine, height, width, engine[height].length))
  } else {
    let currentOffset = 1
    let found = false
    do{
      checkLetterIsNumber(engine[height][width-currentOffset]) ? currentOffset++ : found = true
    } while( width - currentOffset >= 0 && !found )

    if(!found) {
      getValueFrom( engine, height, 0, getNumberLength(engine, height, 0, engine[height].length))
    } else {
      return getValueFrom( engine, height, width - currentOffset + 1, getNumberLength(engine, height, width - currentOffset + 1, engine[height].length) )
    }

    return found 
      ? getValueFrom( engine, height, width - currentOffset + 1, getNumberLength(engine, height, width - currentOffset + 1, engine[height].length) )
      : getValueFrom( engine, height, 0, getNumberLength(engine, height, 0, engine[height].length))
    
  }
}

//Una vez comprobado que el * solo lo rodean dos números, obtener sus valores y devolverlos como array.
const getGearValues = (engine, height, width) => {
  //Aux functions: Comprobar límites y comprobar línea actual
  const isOnStartLimits = index => index - 1 >= 0 ? false : true
  const isOnEndLimits = (array, index) => index + 1 < array.length ? false : true

  const previousLineThanNumber = () => currentHeight == -1 ? true : false
  const sameLineAsNumber = () => currentHeight == 0 ? true : false
  const nextLineThanNumber = () => currentHeight == 1 ? true : false

  //Comprobar si está en algún borde y guardarlo
  const isHeightStartLimit = isOnStartLimits(height)
  const isHeightEndLimit = isOnEndLimits(engine, height)

  const isWidthStartLimit = isOnStartLimits(width)
  const isWidthEndLimit = isOnEndLimits(engine[height], width)

  //Valor a sumar o restar a los indexes
  let currentHeight = isHeightStartLimit ? 0 : -1
  let currentWidth = isWidthStartLimit ? 0 : -1
  //Reutilización de código, todo * es como en la parte 1 un número de longitud 1
  const numberLength = 1

  //Almacenar los números y variables del bucle
  let number1 = 0
  let number2 = 0
  let number1Found = false
  let number2Found = false
  let breakFound = false

  //Función para cambiar de línea
  const newLine = () => {
    let toret = true 
    breakFound = true 

    //Actualizar ancho
    currentWidth = -1

    //Límite temprano evita el -1
    if( isWidthStartLimit ) {
      currentWidth = 0
      //Caso especial - Vamos a la misma línea que el número y no queremos pisarlo
      if(previousLineThanNumber()) {
        currentWidth = numberLength
      }
    }

    //Última fila => No podemos bajar más
    if( nextLineThanNumber() ){
      toret = false
    }
    //Misma línea pero no hay línea debajo => No podemos bajar más
    if( sameLineAsNumber() && isHeightEndLimit ) {
      toret = false
    }

    currentHeight++ 

    return toret
  }

  //Función para actualizar índices, cambia el ancho y si hace falta cambiar el alto llama a newLine
  const updateIndexes = () => {
    let toret = true

    if( !sameLineAsNumber() ){
      if(!isWidthEndLimit) {
        currentWidth == numberLength ? toret = newLine() : currentWidth++
      } else {
        currentWidth == numberLength ? toret = newLine() : currentWidth++
      }
    } else {
      breakFound = true
      if(!isWidthEndLimit) {
        currentWidth == numberLength ? toret = newLine() : currentWidth = numberLength
      } else {
        toret = newLine()
      }
    }
    
    return toret
  }

  do {
    if(checkLetterIsNumber(engine[height + currentHeight][width + currentWidth])) {
      if(!number1Found) {
        number1 = getValue(engine, height+currentHeight, width+currentWidth)
        number1Found = true
      } else if( breakFound ) {
        number2 = getValue(engine, height+currentHeight, width+currentWidth)
        number2Found = true
      }
    } else {
      if(number1Found) {
        breakFound = true
      }
    }

    updateIndexes()
  } while ( !number2Found )

  return [number1, number2]
}

/**
 * Comprobar si el * es válido, es una repetición del código anterior, hay tres funciones que podrían refactorizarse 
 * con algo así como lookAroundObject(arr, height, width, objectLength).
 * Para este ejercicio se podría refactorizar en una función que cogiese los números, guardase en este recorrido los índices de los
 * dos primeros números que encuentre y si encuentra solo 2 números recupere su valor con esos índices (reducir la cantidad de vueltas a dar).
**/
const isValidGear = (engine, height, width) => {
  //Aux functions: Comprobar límites y comprobar línea actual
  const isOnStartLimits = index => index - 1 >= 0 ? false : true
  const isOnEndLimits = (array, index) => index + 1 < array.length ? false : true

  const previousLineThanNumber = () => currentHeight == -1 ? true : false
  const sameLineAsNumber = () => currentHeight == 0 ? true : false
  const nextLineThanNumber = () => currentHeight == 1 ? true : false

  //Comprobar si está en algún borde y guardarlo
  const isHeightStartLimit = isOnStartLimits(height)
  const isHeightEndLimit = isOnEndLimits(engine, height)

  const isWidthStartLimit = isOnStartLimits(width)
  const isWidthEndLimit = isOnEndLimits(engine[height], width)

  //Valor a sumar o restar a los indexes
  let currentHeight = isHeightStartLimit ? 0 : -1
  let currentWidth = isWidthStartLimit ? 0 : -1
  const numberLength = 1

  //Almacenamos la cantidad de números distintos que encontramos
  let numbersFound = 0
  let numberFound = false
  let breakFound = false
  let keepSearching = true

  //Función para cambiar de línea
  const newLine = () => {
    let toret = true
    breakFound = true
    numberFound = false

    //Actualizar ancho
    currentWidth = -1

    //Límite temprano evita el -1
    if( isWidthStartLimit ) {
      currentWidth = 0
      //Caso especial - Vamos a la misma línea que el número y no queremos pisarlo
      if(previousLineThanNumber()) {
        currentWidth = numberLength
      }
    }

    //Última fila => No podemos bajar más
    if( nextLineThanNumber() ){
      toret = false
    }
    //Misma línea pero no hay línea debajo => No podemos bajar más
    if( sameLineAsNumber() && isHeightEndLimit ) {
      toret = false
    }

    currentHeight++ 

    return toret
  }

  //Función para actualizar índices, cambia el ancho y si hace falta cambiar el alto llama a newLine
  const updateIndexes = () => {
    let toret = true

    if( !sameLineAsNumber() ){
      if(!isWidthEndLimit) {
        currentWidth == numberLength ? toret = newLine() : currentWidth++
      } else {
        currentWidth == numberLength ? toret = newLine() : currentWidth++
      }
    } else {
      breakFound = true
      numberFound = false
      if(!isWidthEndLimit) {
        currentWidth == numberLength ? toret = newLine() : currentWidth = numberLength
      } else {
        toret = newLine()
      }
    }
    
    return toret
  }

  do {
    if(checkLetterIsNumber(engine[height + currentHeight][width + currentWidth])) {
      if(!numberFound) {
        numberFound = true
        numbersFound++
        breakFound = false
      }
    } else {
      if(numberFound) {
        breakFound = true
        numberFound = false
      }
    }

    keepSearching = updateIndexes()
  }
  //Paramos el bucle si no se puede seguir buscando a encontramos 3 números (ya nunca van a ser solo 2)
  while ( keepSearching && numbersFound < 3 )

  //Condición para que sean válidos solo haya exactamente dos números a su alrededor
  return numbersFound == 2
}

//Función que recorre la matriz y multiplica los valores válidos
const getGearRatios = parsedEngine => {
  let heightIndex = 0
  let widthIndex = 0
  const heightLimit = parsedEngine.length
  const widthLimit = parsedEngine[0].length

  let total = 0

  const newLine = () => { 
    heightIndex++
    widthIndex = 0
  }

  const getGearRatio = arr => arr[0]*arr[1]

  do {
    if( checkLetterIsGear(parsedEngine[heightIndex][widthIndex]) && isValidGear(parsedEngine, heightIndex, widthIndex) ) {
      total += getGearRatio(getGearValues(parsedEngine, heightIndex, widthIndex))
    }
    widthIndex + 1 < widthLimit ? widthIndex++ : newLine()
  } while( heightIndex < heightLimit )

  return total
}

console.log("Resultado 1: ", getValidNumbersSum(parsedEngine))
console.log("Resultado 2: ", getGearRatios(parsedEngine))