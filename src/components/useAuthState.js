// / useAxios hook

import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000';

const useAuthState = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(true);

    const fetchData = () => {
      axios.get("http://127.0.0.1:8000/auth/user/me", {
        headers: {
          Authorization : `Bearer ${localStorage.getItem("access_token")}`
        }
      })
        // axios.get("http://127.0.0.1:8000/auth/user/me", headers = JSON.stringify({
        //   Authorization : `Bearer ${localStorage.getItem("access_token")}`)
            .then((res) => {
                setUser(res.data.user);
                console.log(res.data.user)
                setloading(false)
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { user,setUser,isAdmin, error, loading };
};

export default useAuthState;