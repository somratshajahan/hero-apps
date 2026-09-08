import React from "react";
import { useLoaderData, useParams } from "react-router";
import SingleBooks from "./SingleBooks";

const AppDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singleData = data.find((app) => app.id === parseInt(id));

  return (
    <div>
      {singleData ? <SingleBooks apps={singleData} /> : <p>App not found!</p>}
    </div>
  );
};

export default AppDetails;
