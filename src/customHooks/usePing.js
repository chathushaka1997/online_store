import { useEffect, useState } from "react"

export default function usePing(url){
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {

        const pingServer = async ()=>{
            try {
                const res = await fetch(url)
                if(res.ok){
                    setIsLoading(false)
                }else{
                    setTimeout(pingServer, 5000);
                    //window.location.reload();
                }
            } catch (error) {
                console.log(error);
                setTimeout(pingServer, 5000);
                //window.location.reload();
            }
         
        }
        pingServer()
    }, [url])
    return isLoading
}