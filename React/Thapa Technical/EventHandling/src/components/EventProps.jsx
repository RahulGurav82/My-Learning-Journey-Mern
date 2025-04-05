export const EventProps = () => {

    const HandleWelcomeUser = (user) => {
        alert(`hiii ${user}`);
    }
    const HandleHover = () => {
        alert("Hover");
    }


    return (
        <>
            <WelcomeUser onClick={() => HandleWelcomeUser("Rahul")} onMouseEnter={HandleHover} />
        </>
    );
}


export const WelcomeUser = (props) => {
    const handleGreetings = () => {
        alert("hii")
    }
    return (
        <>
            <button onClick={props.onClick}>Click Me</button>
            <button onMouseEnter={props.onMouseEnter}>Hover Me</button>
            <button onClick={handleGreetings}>click</button>
        </>
    )
}