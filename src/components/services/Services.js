import axios from "axios";

export function GetPixabayImages (search, amount){
    return axios.get("https://pixabay.com/api/?key=" + process.env.REACT_APP_API_KEY + "&q=" + search + "&image_type=photo&per_page=" + amount + "&safeSearch=true")
}