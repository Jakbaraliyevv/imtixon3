import React from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

function UserItem() {
  const { id } = useParams();

  const { data, loading, error } = useAxios({ url: `cards/${id}` });

  console.log(data);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  );
}
export default UserItem;
