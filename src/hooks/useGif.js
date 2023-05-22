import { useEffect, useState } from 'react'
import axios from 'axios';

const API_KEY = `5YIyLmbG1T9N4hTCVKJVZbxttbN2Vfxi`;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {

    // const API_KEY = `5YIyLmbG1T9N4hTCVKJVZbxttbN2Vfxi`;
    // const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    // const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    const [gif, setGif] = useState("");

    const [loading, setLoading] = useState(false);

    async function fetchData(tag) {

        setLoading(true);

        // const output = await axios.get(tag ? tagMemeUrl : randomMemeUrl);
        const output = await axios.get(tag ? `url&tag=${tag}` : url);
        console.log(output);

        const imageSource = output?.data?.data?.images?.downsized_large?.url;
        console.log(imageSource);

        setGif(imageSource);

        setLoading(false);
    }

    useEffect(() => {
        fetchData("car");
    }, []);

    return { gif, loading, fetchData };

}

export default useGif;