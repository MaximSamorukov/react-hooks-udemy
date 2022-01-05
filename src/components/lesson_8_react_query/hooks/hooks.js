import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { fetch, fetcher } from "components/lesson_8_react_query/api/api";
import useSWR from "swr";

export function useUsers() {

  const [ userData, setData ] = useState(undefined);
  const [ userError, setError ] = useState(undefined);

  useEffect(() => {
    fetch('users').get()
      .then(({ data }) => {
        setData(data)
      })
      .catch((error) => {
        setError(error);
      });
  }, [])

  return {
    data: userData,
    loading: !userData && !userError,
    error: userError,
  };
}

export function useGetUser(id) {

  const [ userData, setData ] = useState(undefined);
  const [ userError, setError ] = useState(undefined);

  useEffect(() => {
    fetch(`users?id=${id}`).get()
      .then(({ data }) => {
        setData(data)
      })
      .catch((error) => {
        setError(error);
      });
  }, [])

  return {
    data: userData,
    loading: !userData && !userError,
    error: userError,
  };
}

export function useGetUserReactQuery(id) {

  const { data, error } = useSWR(`users?id=${id}`, fetcher);

  return {
    dataSWR: data,
    loading: !data && !error,
    error,
  };
}

export function useUsersList() {
  const [ todoData, setData ] = useState(undefined);
  const [id, setId] = useState(undefined);
  const [ todoError, setError ] = useState(undefined);

  useEffect(() => {
    if (id) {
      fetch(`todos?userId=${id}`).get()
        .then(({ data }) => {
          setData(data)
        })
        .catch((error) => {
          setError(error);
        });
    }
  }, [id])
  const todos = {
    data: todoData,
    error: todoError,
    loading: !todoError && !todoData,
    setId,
  }
  return todos;
}

export function useUser() {
  const [userId, setUserId] = useState({});

  return [ userId, setUserId];
}