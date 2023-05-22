import React, { useState } from 'react'
// import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {

    // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    // const API_KEY = `5YIyLmbG1T9N4hTCVKJVZbxttbN2Vfxi`;

    // const [gif, setGif] = useState("");

    // const [loading, setLoading] = useState(false);

    const [tag, setTag] = useState("car");

    // async function fetchData() {

    //     setLoading(true);

    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    //     const output = await axios.get(url);
    //     console.log(output);

    //     const imageSource = output?.data?.data?.images?.downsized_large?.url;
    //     console.log(imageSource);

    //     setGif(imageSource);

    //     setLoading(false);
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // function clickHandler() {
    //     fetchData();
    // }

    const { gif, loading, fetchData } = useGif(tag);

    function changeHandler(event) {
        setTag(event.target.value);
    }

    return (
        <div className='w-1/2 bg-blue-400 rounded-lg border border-slate-800 flex flex-col items-center gap-y-5 my-[15px]'>

            <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>Random {tag} Gif</h1>

            {
                loading ? <Spinner /> : <img src={gif} width={450} alt='gif' className='rounded-md' />
            }

            <input className='w-10/12 text-lg py-2 rounded-lg mb-[6px] text-center' onChange={changeHandler} value={tag} />

            <button onClick={() => fetchData(tag)} className='w-10/12 bg-blue-200 text-lg py-2 rounded-lg mb-[20px]'>Generate</button>
        </div>
    )
}

export default Tag