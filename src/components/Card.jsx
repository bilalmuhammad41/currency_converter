import React, { useState } from 'react'
import CurrencyCard from './CurrencyCard'
import useCurrencyInfo from '../hooks/useCurrencyInfo'

const Card = () => {

    //Amount in the Input and Output Fields
  const [amount, setAmount] = useState('') 
  const [convertedAmount, setConvertedAmount] = useState('')

  //Currency selectors
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('pkr')

  
  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)
  // console.log(options)

  function convert(){  
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2))
    // console.log(currencyInfo[to])
  }
  

  function swap(){
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }


  return (
    <div className="flex max-sm:w-full flex-col items-center justify-center w-[30rem] px-5 py-5 bg-[#ffffff1a] border-2 border-[#ffffffc4] shadow-[#444b9b7a]  shadow-lg rounded-lg">
      <button className="flex font-['Gilroy'] leading-none bg-blue-700 absolute text-white px-3 py-2 rounded-md -mt-[3.5rem] border-2 border-white hover:bg-blue-900" onClick={swap}>swap</button>
      <CurrencyCard 
        label="From"
        amount = {amount}
        currencyOptions={options}
        onCurrencyChange={(currency) => setFrom(currency)}
        selectCurrency={from}
        onAmountChanged={(amount) => setAmount(amount)}
        />

      <CurrencyCard 
      label="To"
      amountDisable = {true}
      amount = {convertedAmount}
      currencyOptions={options}
      onCurrencyChange={(currency)=> setTo(currency)}
      selectCurrency={to}
      onAmountChanged={(amount) => setAmount(amount)}
      placeholder='Converted'/>

      <button className="flex w-full justify-center font-['Gilroy'] leading-none bg-blue-700 text-white px-3 py-4 rounded-lg hover:bg-blue-900" onClick={convert}>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>

    </div>
  )
}

export default Card