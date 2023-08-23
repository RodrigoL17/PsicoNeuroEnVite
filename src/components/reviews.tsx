import { useEffect } from "react"

export const Reviews = () => {

    console.log(import.meta.env.VITE_GOOGLE_MAPS_API_KEY)
    console.log(import.meta.env.VITE_PLACE_ID)

    useEffect(() => {
        fetch(`https://maps.googleapis.com/maps/api/place/details/json?fields=reviews&place_id=${import.meta.env.VITE_PLACE_ID}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    },[])

    return(<>
    </>)
} 