import React from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

function UserPRoduct() {
  const { id } = useParams();

  const { data, loading } = useAxios({ url: `seleres/${id}` });

  return (
    <div>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  );
}

export default UserPRoduct;
