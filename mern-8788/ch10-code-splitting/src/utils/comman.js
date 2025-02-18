export function getRandomArray() {
  const data = Array.from({ length: 5 }).map(()=>{
    return parseInt(Math.random()*100);
  })
  
  return data;
}

export function getRandomNumber(){
    return Math.random()*100
}
// export {getRandomArray,getRandomNumber}