import { useState , useEffect} from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() =>{

        const abortControl = new AbortController();

        fetch(url ,{ signal : abortControl.signal})
        .then(res => {
            console.log(res);
            if(!res.ok){
                throw Error('Could not fetch data for the resource');
            }
           return res.json();
        })
        .then(data => {
             setData(data);
             setIsPending(false);
             setError(null);
        }).catch((err) => {
            if(err.name === 'AbortError'){
                console.log("Fetch Aborted");
            }else {
             setIsPending(false);
             setError(err.message);
            }
        });
        // cleanup function
        return () => abortControl.abort();
    } , [url]);
    
    return { data, isPending, error }
}

export default useFetch;