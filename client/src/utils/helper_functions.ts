export const importFiles = async () => {

    const filePaths : any = {};
    for(let i = 1; i <= 15; i++){
      filePaths[`b${i}`] = `../assets/audio/B/B${i}.mp3`
    }
    for(let i = 16; i <= 30; i++){
      filePaths[`i${i}`] = `../assets/audio/I/i${i}.mp3`
    }
    for(let i = 31; i <= 45; i++){
      filePaths[`n${i}`] = `../assets/audio/N/N${i}.mp3`
    }
    for(let i = 46; i <= 60; i++){
      filePaths[`g${i}`] = `../assets/audio/G/G${i}.mp3`
    }
    for(let i = 61; i <= 75; i++){
      filePaths[`o${i}`] = `../assets/audio/0/0${i}.mp3`
    }
    const audioDataMap : any = {};
  
    for (const filePath in filePaths) {
      const { default: audio } = await import(filePaths[filePath]);
      audioDataMap[filePath] =  audio
    }
    
    return audioDataMap
}

export function shuffleMappings(mappings : {}) {
    // Convert the mappings object to an array
    const mappingsArray = Object.entries(mappings);
  
    // Function to shuffle the array randomly
    function shuffle(array : any) {
      let currentIndex = array.length;
      let temporaryValue, randomIndex;
  
      // While there remain elements to shuffle
      while (currentIndex !== 0) {
        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
  
        // Swap it with the current element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
  
      return array;
    }
    const shuffledMappingsArray = shuffle(mappingsArray);
    // Convert the shuffled array back to an object
    const shuffledMappings = Object.fromEntries(shuffledMappingsArray);
  
    return shuffledMappings;
}

interface InitialValues {
  b: string[];
  i: string[];
  n: string[];
  g: string[];
  o: string[];
}

export const getInitialData = () => {
  let initialValues : InitialValues = { b : [], i : [], n : [], g : [], o : []}
  for(let i = 1; i < 76; i++){
    if(i < 16){
      initialValues[`b`].push('.') 
    }else if(i < 31){
        initialValues[`i`].push('.')
    }else if(i < 46){
        initialValues[`n`].push('.')
    }else if(i < 61){
        initialValues[`g`].push('.')
    }else{
        initialValues[`o`].push('.')
    }
  }
  return initialValues
}
    

