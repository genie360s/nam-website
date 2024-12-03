// components/GoogleMapEmbed.tsx
import React from "react";

interface GoogleMapEmbedProps {
  width?: string; // Optional: Width of the iframe (default: 100%)
  height?: string; // Optional: Height of the iframe (default: 50vh)
}

const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({
  width = "100%",
  height = "50vh", // Default height set to 50vh
}) => {
  return (
    <div className="relative w-full" style={{ height }}>
      <iframe
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=520&amp;height=200&amp;hl=en&amp;q=Haile%20Sellasie%20Dar%20es%20Salaam+(Tigo%20Shop,%20Masaki%20Branch)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        width={width}
        height={height}
        title="Google Map"
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
