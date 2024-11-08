import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../redux/campersSlice";

const CatalogPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { campersList, loading, error } = useSelector((state) => state.campers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!Array.isArray(campersList)) {
    return <div>No campers available</div>;
  }

  return (
    <div>
      <h1>Catalog Page</h1>
      <div>
        {campersList.map((camper) => (
          <div key={camper.id}>
            <h2>{camper.name}</h2>
            <p>Price: {camper.price ? camper.price.toFixed(2) : "N/A"}</p>
            <button onClick={() => navigate(`/catalog/${camper.id}`)}>
              Show more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
