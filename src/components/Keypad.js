// Code Keypad Component Here

function Keypad (){
    function handleChnage(){
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" onChange={handleChnage}/>
        </div>
    )
}

export default Keypad;