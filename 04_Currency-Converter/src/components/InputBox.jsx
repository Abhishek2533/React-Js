import { React, useId } from 'react'

function InputBox({
    label,      // use for from & to
    amount,     // amount converted
    onAmountChange,     // whenever user change amount
    onCurrencyChange,   // whenever the currency change to convert
    currencyOptions = [],       // to store all options for change
    selectCurrency = "usd",     // conversion option
    amountDisable = false,      // check the amount for conversion is available or not
    currencyDisable = false,    // check for currency available
    className = "",
}) {

    // useId -> for unique id
    const amountInputId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-md flex ${className}`}>
            <div className="w-screen">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >

                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}

                </select>
            </div>
        </div>
    );
}

export default InputBox;