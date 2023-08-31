import { useState, useEffect } from 'react';

export const useGooglePlacesScript = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY
  useEffect(() => {
    if (!scriptLoaded) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
      script.async = true;
      script.onload = () => {
        setScriptLoaded(true);
      };
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [apiKey, scriptLoaded]);

  return scriptLoaded;
};
