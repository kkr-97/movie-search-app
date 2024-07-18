import { useEffect, useState, CSSProperties } from "react";
import { fetchRandomDogImage } from "../api";
import ClipLoader from "react-spinners/ClipLoader";
import "./index.css";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#61dafb",
};

const MovieCard = ({ movie }) => {
  const [dogImage, setDogImage] = useState("");

  useEffect(() => {
    const getDogImage = async () => {
      const imageUrl = await fetchRandomDogImage();
      setDogImage(imageUrl);
    };

    getDogImage();
  }, []);

  return (
    <div className="movieCard">
      {dogImage === "" ? (
        <ClipLoader
          color="#ffffff"
          loading={true}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <img src={dogImage} alt="Random Dog" className="image" />
      )}

      <h3 className="title">{movie.title}</h3>
      <p className="author">{movie.author_name?.join(", ")}</p>
      <p className="year">{movie.first_publish_year}</p>
    </div>
  );
};

export default MovieCard;
