import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [characterAllow, setCharacterAllow] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null);

  // State to track whether the button has been clicked
  const [isClicked, setIsClicked] = useState(false);

  // password generator method - useCallback hook
  const passwordGenerator = useCallback(() => {
    let pass = "";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllow) str += "0123456789"
    if (characterAllow) str += "!@#$%^&*()-_+=[]{}~`?"

    for (let i = 1; i <= length; i++) {
      // creating a random index from string
      let char = Math.floor(Math.random() * str.length + 1);

      // setting values in password
      pass += str.charAt(char);

    }

    setPassword(pass);

  }, [length, numberAllow, characterAllow, setPassword])

  // set button color
  const buttonStyle = {
    backgroundColor: isClicked ? 'rgb(93, 130, 233)' : 'rgb(29, 78, 216)',
    // 52 105 255
  };

  // copy to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,999)          -> select within a range if needed
    window.navigator.clipboard.writeText(password);
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false)
    }, 200);
  }, [password])



  // useEffect hook
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, characterAllow, passwordGenerator])

  return (
    <div className="w-screen max-w-screen-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-800">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex sahdow rounded-lg overflow-hidden mb-4">
        <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-white'
          placeholder='password'
          readOnly
          ref={passwordRef}
        />
        <button
          className="outline-none text-white px-3 py-0 5 shrink-0"
          onClick={copyPasswordToClipboard}
          style={buttonStyle}
        >
          copy
        </button>
      </div>
      <div className="w-full flex flex-wrap text-sm gap-x-4">
        <div className="flex items-center gap-x-1">
          <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label htmlFor="length">Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
            defaultChecked={numberAllow}
            id='numberInput'
            onChange={() => {
              setNumberAllow((prev) => !prev)
            }}
          />
          <label htmlFor="numbers">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
            defaultChecked={characterAllow}
            id='characterInput'
            onChange={() => {
              setCharacterAllow((prev) => !prev)
            }}
          />
          <label htmlFor="characteres">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
