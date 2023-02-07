import React, { useEffect, useState } from "react";
import { fetchPlanetPhoto } from "../Utils/fetchPlanetPhoto";

const PlanetImg = () => {
  const url =
    "https://images.unsplash.com/photo-1532779007449-43cd38f80988?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8bWFyc3x8fHx8fDE2NzU3NzE2ODk&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800";
  const [image, setImage] = useState("");

  useEffect(() => {
    fetchPlanetPhoto(url).then(img => setImage(img));
  }, []);

  return (
    <div>
      <img src={image} alt="The red planet." />
    </div>
  );
};

export default PlanetImg;
