import { create } from 'zustand'

type Store = {
  letterListLower: string,
  letterListUpper: string,
  numberList: string,
  symbolsList: string,
  randNumber: string,
  randSymbol: string,

  
  len: number,
  isNum: boolean, 
  isSumb: boolean,
  isUpper: boolean, 
  isLower: boolean,

  randIndex: number,
  randLetter: string,

  pass: [],
  resultMass: string,
  result: string,

  temporary: (string | number)[],

  indicatorTrue: boolean[],


  bars: {
    number: number,
    led: string
    }[]

    all123: {
    name: boolean,
    value: string,
  }[]

  
  funtPassword: () => void
  funcClear: () => void
  funcCopy: () => void



  setLen: (e: number) => void

  setIsNum: () => void
  setIsSumb: () => void
  setIsUpper: () => void
  setIsLower: () => void

  setNumberString: () => void,

}

export const useStore = create<Store>()((set, get) => ({
  letterListLower: "abcdefghijklmnopqrstuvwxyz",
  letterListUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numberList: "12345679890",
  symbolsList: "!@#$%^&*()_+~`|{}[]:;'<>?,./",

  pass: [],
  resultMass: "",
  result: "",

  all123: [],
  temporary: [],
  indicatorTrue: [],

  len: 0,
  isNum: false, 
  isSumb: false,
  isUpper: false, 
  isLower: false,


  randIndex: 0,
  randLetter: "",

  randNumber: "",
  randSymbol: "",




  bars:  [
    {number: 1, led: "off"},
    {number: 2, led: "off"},
    {number: 3, led: "off"},
    {number: 4, led: "off"},
  ],

  
  setIsNum: () => set((state) => ({isNum: !state.isNum})), 
  setIsSumb: () => set((state) => ({isSumb: !state.isSumb})),
  setIsUpper: () => set((state) => ({isUpper: !state.isUpper})),
  setIsLower: () => set((state) => ({isLower: !state.isLower})),


  setNumberString: () => {
    let isNum = get().isNum;
    let isSumb = get().isSumb;
    let isUpper = get().isUpper;
    let isLower = get().isLower;
    let bars = get().bars
    let indicatorTrue = get().indicatorTrue;
    let indicator = [isNum, isSumb, isUpper, isLower];
    indicatorTrue = indicator.filter(e => e === true)

    {bars.map(e => {
      if(e.number <= indicatorTrue.length){
        e.led = "on"
      }
      else{
        e.led = "off"
      }
    })}
    set(()=> ({bars, indicatorTrue: indicatorTrue}))},

  setLen: (e) => set(() => ({ len: e})),


    funtPassword: () => {
      const isNum = get().isNum;
      const isSumb = get().isSumb;
      const isUpper = get().isUpper;
      const isLower = get().isLower;
      let all123 = get().all123
      let temporary = get().temporary

      const letterListLower = get().letterListLower;
      const letterListUpper = get().letterListUpper;
      const numberList = get().numberList;
      const symbolsList = get().symbolsList;
      const len = get().len;
      let resultMass = get().result;
      let result = get().result;
      let indicatorTrue = get().indicatorTrue;
      
      all123 = [
        {name: isNum, value: numberList},
        {name: isSumb, value: symbolsList},
        {name: isUpper, value: letterListUpper}, 
        {name: isLower, value: letterListLower},
      ]
      {all123.map((e: any)=>{
        e.name && temporary.push(e.value)
      })}

      resultMass = temporary.join('')

      for(let i = 0; i < len; i++){
        result+=resultMass[Math.floor(Math.random()*resultMass.length )]              
      }

      indicatorTrue.length == 0 ? result = "Choose something" : result

      set(()=>({result: result,}))
    },

    funcClear: () => {
      let result = get().result
      let temporary = get().temporary
      temporary = []
      result = ""
      set(() => ({result, temporary}))
    },

    funcCopy: () => {
      let result = get().result
      navigator.clipboard.writeText(result)
    }
}))