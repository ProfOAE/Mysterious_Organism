// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (num, array) => {
    return {
      specimenNum: num,
      dna: array,
  
      mutate(){
        const index = Math.floor(Math.random()*this.dna.length);
        let newB = returnRandBase();
        while (this.dna[index]===newB){
          newB = returnRandBase();
        }
        this.dna[index]=newB;
        return this.dna;
      },
  
      comapreDNA (pAequor) {
       const same = this.dna.reduce((accum,currV,index,array) => {
       if(array[index]===pAequor[index]){
         return accum + 1;
       }else {
         return accum;
       }
        },0);
        percentOfEqualDNA = ((same/this.dna.length)*100).toFixed(2);
  
    console.log(`${this.specimanNum} and ${pAequor.specimanNum} have ${percentageTo2Deci}% DNA in common.`);
  
      },
  
      willLikelySurvive(){
      const surv = this.dna.filter(element => element === "C" || element === "G");
        return surv.length / this.dna.length >= 0.6;
  
      }
  
    }
  };
  console.log(pAequorFactory(1, mockUpStrand()));
  console.log(pAequorFactory(1, mockUpStrand()).mutate());
  
  console.log();
  
  const survivedOnes = [];
  let i = 1;
  
  while (survivedOnes.length < 30) {
    let mysOrg = pAequorFactory(i, mockUpStrand());
    if (mysOrg.willLikelySurvive()) {
      survivedOnes.push(mysOrg);
    }
    i++;
  }
  
  
  
  
  
  