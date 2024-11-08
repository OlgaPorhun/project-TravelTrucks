import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CamperDetailsPage = () => {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCamperDetails = async () => {
      try {
        const response = await axios.get(
          `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`
        );
        setCamper(response.data);
      } catch {
        console.error("Failed to fetch camper details");
        setError("Failed to fetch camper details");
      } finally {
        setLoading(false);
      }
    };

    fetchCamperDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return camper ? (
    <div>
      <h1>{camper.name}</h1>
      <p>Price: {camper.price ? camper.price.toFixed(2) : "N/A"}</p>
      <p>Description: {camper.description}</p>
    </div>
  ) : (
    <div>No details available</div>
  );
};

export default CamperDetailsPage;
