import React, { useEffect, useState } from "react";

export const Work = () => {
  const source = "https://picsum.photos/200";
  const [photo, setPhoto] = useState(source);
  useEffect(() => {
    setInterval(() => {
      setPhoto(photo(count() => count + 1));
    }, 1000);
  }, []);
  return (
    <div>
        {count}
      <img src={photo} alt="Random photography" width="200" height="200" />
    </div>
  );
};
