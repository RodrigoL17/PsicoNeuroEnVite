import { Review } from "../types";

export const useGetGoogleReviews = (
  setReviews: (reviews: Review[]) => void
) => {
  const map = new google.maps.Map(document.createElement("div") as HTMLElement);
  const service = new google.maps.places.PlacesService(map);

  const request = {
    placeId: import.meta.env.VITE_PLACE_ID,
  };

  service.getDetails(request, (place, status) => {
    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
      setReviews(place.reviews);
    }
  });
};
