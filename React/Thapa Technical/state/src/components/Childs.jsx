export const InputValue = ({input, setInput}) => {
    return (
        <>
            <input type="text" 
            placeholder="Type Anything..."
            value={input}
            onChange={(e)=> setInput(e.target.value)} />
        </>
    )
}

export const InputText = ({input}) => {
    return (
        <>
            <p>Enter Text Is : {input}</p>
        </>
    )
}