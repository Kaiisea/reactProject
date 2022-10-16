import React, { useEffect, useState } from "react";

export const Photo = () => {
  const source = "https://picsum.photos/200";
  const [photo, setPhoto] = useState(source);
  useEffect(() => {
    setTimeout(() => {
      setPhoto(photo);
    }, 4000);
  });
  return (
    <div>
      <img src={photo} alt="Random photography" width="200" height="200" />
    </div>
  );
};
