// import { useEffect, useState } from "react"; 
import { ReviewCard } from "./review-card";
import { Carousel, IconButton } from "@material-tailwind/react";
import { GoogleReviews } from "../utils/const";
// import { useGooglePlacesScript } from "../hooks/google-place-library-loader";
// import { useGetGoogleReviews } from "../hooks/get-reviews";
// import { Review } from "../types";


export const Reviews = () => {
  // const [reviews, setReviews] = useState<Review[]>([]);

  // const scriptLoaded = useGooglePlacesScript()
  

  // useEffect(() => {
  //   if (scriptLoaded) {
  //     useGetGoogleReviews(setReviews)
  //   }
    
  // }, [scriptLoaded]);

  
  return (
    <>
      <Carousel
        className="rounded-xl align-middle"
        navigation={() => ""}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
      >
        {GoogleReviews.map((review) => (
          <ReviewCard key={review.author_name} review={review} />
        ))}
      </Carousel>
    </>
  );
};
