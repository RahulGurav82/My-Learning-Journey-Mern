
const GetApiData = async () => {
    try {
        const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=740a640c6bd1466f65d8ecce5dceb132");
        const data = res.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export default GetApiData