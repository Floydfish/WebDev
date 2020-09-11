// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, seq) => {
  return {
    specimenNum: num++,
    dna: seq,
    mutate() {
      const m = Math.floor(Math.random()*15);
      let n = returnRandBase()
      while (this.dna[m] === n) {
        n = returnRandBase();
      }
      this.dna[m] = n;
      return this.dna;
    },
    compareDNA(pAequor) {
      let identicalBase = 0;
      for (let i = 0; i < pAequor.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          identicalBase++;
        }
      }
      console.log(`Specimens ${this.specimenNum} and ${pAequor.specimenNum} have ${identicalBase/15*100}% of common DNA`);
    },
    willLikelySurvive() {
      let likelySurvive = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          likelySurvive++;
        }
      };
      return (likelySurvive/15 >= 0.6);
    }
  }
}

function createAequor(n) {
  let dataBank = [];
  for (let i = 0; i < n; i++) {
    dataBank.push(pAequorFactory(i,mockUpStrand()));
  }
  return dataBank
};

function createLiveAequor(n) {
  let org;
  let k = 0;
  let liveDataBank = []
  while (k < n) {
    org = pAequorFactory(k, mockUpStrand());
    if (org.willLikelySurvive()) {
      liveDataBank.push(org);
      k++;
    }
  }
  return liveDataBank;
}

function checkLive(array) {
  let arrCheck = [];
  for (let i = 0; i < array.length; i++) {
    arrCheck.push(array[i].willLikelySurvive());
  }
  return arrCheck;
}
// let org1 = pAequorFactory(1,mockUpStrand())
// let org2 = pAequorFactory(2,mockUpStrand())
// let org3 = pAequorFactory(3,mockUpStrand())