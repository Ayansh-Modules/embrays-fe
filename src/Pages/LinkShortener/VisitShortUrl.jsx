import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


function VisitShortUrl() {
    const {shortId} = useParams();
    const [error, setError] = useState(false)

    useEffect(async () => {
            let res = await fetch("https://zgwy7rdhne.execute-api.ap-south-1.amazonaws.com/prod/api/v1/shrink/go/" + shortId, {
                method: "GET"
            });
            if(res.status === 200)
            {
                const data = await res.json();
                window.location.href = data.url;
                return null;
            }
            if(!res.ok)
            {
                setError(true)
            }
    }, [setError])


  return (
    <div className="w-full h-[60vh] flex flex-col items-center justify-center">
        <div className="text-4xl max-md:text-3xl font-semibold text-Layoutblue mt-5 ">
            {error || !shortId || shortId === "" ? "Something went wrong" : "Redirecting..."}
        </div>
    </div>
  )
}

export default VisitShortUrl