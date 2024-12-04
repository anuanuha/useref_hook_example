import { useRef } from "react";

export const UserefHook=()=>{
    const inputRef = useRef(null);
    const onClick=()=>{
        console.log(inputRef.current.value); // consol input value when we click change name button
        inputRef.current.focus(); // auto focus the input box when we click change name button 
        inputRef.current.value=""; //clear the input field when we click change name button
    }
    return(
        <div>
              <h1>hello</h1>
              <input type="text" ref={inputRef} placeholder="EX..."></input>
              <button onClick={onClick}>change name</button>
        </div>
    )
}