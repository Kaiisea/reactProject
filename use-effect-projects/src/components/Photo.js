import React, { useEffect, useState } from "react";

export const Photo = () => {
  const source = "https://picsum.photos/200";
  const [photo, setPhoto] = useState(source);
  useEffect(() => {
    setInterval(() => {
      setPhoto(photo());
    }, 1000);
  }, []);
  return (
    <div>
      <img src={photo} alt="Random photography" width="200" height="200" />
    </div>
  );
};
