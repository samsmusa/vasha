import { useQuery } from "react-query";

const LoadData = (url, def, obj = {}) => {
  const { isLoading, error, data, refetch } = useQuery(
    def,
    () =>
      fetch(url, {
        method: "GET",
          headers: {
            Authorization: localStorage.getItem("access_token")
              ? "Bearer " + localStorage.getItem("access_token")
              : null,
            "Content-Type": "application/form-data",
            accept: "application/json",
          },
      }).then((res) => res.json()),

    obj
  );
  return { isLoading, error, data, refetch };
};

export default LoadData;