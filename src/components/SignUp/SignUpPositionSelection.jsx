import React, { useEffect, useState } from "react";
import Input from "../common/Input";
import Loader from "../common/Loader";
import Error from "../common/Error";
import { fetchData } from "../../api/apiService";

export default function SignUpPositionSelection({ formik }) {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getPositions = async () => {
      try {
        const data = await fetchData("/positions");
        setPositions((prev) => [...prev, ...data.positions]);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    getPositions();
  }, []);

  const handlePositionIdButtons = (e) => {
    return (formik.values.position_id = Number(e.target.value));
  };

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

  return (
    <div className="position">
      <p>Select your position</p>
      <ul className="position__list">
        {positions.map(({ id, name }, index) => (
          <li key={id}>
            <label className="position__label">
              <Input
                type="radio"
                name="position_id"
                value={id}
                onChange={(e) => handlePositionIdButtons(e)}
                index={index}
              />
              {name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
