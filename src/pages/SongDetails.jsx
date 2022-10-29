import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SongDetails = () => {
  const dipatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  return (
    <div className="flex flex-col">
      <div className="mb-10">
        <h2 className="text-white text3xl font-bold">Lyrics:</h2>
        <div className="mt-5" />
      </div>
    </div>
  );
};

export default SongDetails;
