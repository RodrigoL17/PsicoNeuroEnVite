export const getReviews = async () => {
  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?fields=reviews&place_id=${
        import.meta.env.VITE_PLACE_ID
      }&key=${import.meta.env.VITE_GOOGLE_API_KEY}`
    );
    const data = await res.json();   
    const {result} = data
    const {reviews} = result
    return reviews
    
  } catch (error) {
    console.log(error);
  }
};
