
const GetApiData = async () => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`);
        const data = res.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export default GetApiData