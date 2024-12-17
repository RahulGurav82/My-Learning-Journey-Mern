function handleFormSubmit(event) {
    event.preventDefault();
   console.log("Form Was Submitted"); 
}


export default function Form() {
    return (
        <form>
            <input placeholder="write something" />
            <button type="submit" onClick={handleFormSubmit}>Submit</button>
        </form>
    );
}