export function getRandomArray() {
  const data = Array.from({ length: 50000 }).map(()=>{
    return parseInt(Math.random()*100);
  })
  
  return data;
}

export function getRandomNumber(){
    return Math.random()*100
}
// export {getRandomArray,getRandomNumber}