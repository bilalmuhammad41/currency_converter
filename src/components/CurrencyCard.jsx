import { useId } from "react"

const CurrencyCard = ({
  label, 
  amount, 
  onAmountChanged,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "",
  amountDisable = false,
  currencyDisable = false,
  placeholder = 'Amount',
}) => {
  
  const amountInputId = useId()

  return (

    <div className="w-[100%] p-3 bg-white rounded-lg mb-2">
      <div className="flex mb-3 justify-between font-['Montserrat'] font-[500] text-slate-500">
        <label htmlFor= {amountInputId} className="">{label}</label>
        <label >Currency Type</label>
      </div>
      
      <div className="flex justify-between pr-5">
        <input id={amountInputId} className="w-1/2 px-2 py-1" disabled ={amountDisable} type="number"  value={amount} placeholder= {placeholder} onChange={(e)=> onAmountChanged && onAmountChanged(Number(e.target.value))}/>

        <div className="relative">
        <select className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight hover:bg-slate-100 focus:outline-none focus:border-gray-500" id="grid-state" 
        value={selectCurrency} 
        disabled={currencyDisable} 
        onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}>
          
          {currencyOptions.map((option)=>(
            <option key={option} value={option}>{option} </option>
          ))}

          
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>

      </div>

    </div>
  )
}

export default CurrencyCard