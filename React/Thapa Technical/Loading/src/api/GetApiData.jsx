
const GetApiData = () => {
    try {
        fetch("https://www.omdbapi.com/?i=tt0944947&apikey=64cea573&Season=1")
    } catch (error) {
        console.log(error)
    }
}

export default GetApiData