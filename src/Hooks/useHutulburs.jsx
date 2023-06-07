import { useState, useEffect } from 'react'
import axios from './../utils/axios'

export default () => {
  const [hutulburs, setHutulburs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`/hutulbur`)
      .then(result => {
        setHutulburs(result.data.data);
        setError(null);
        setLoading(false);
      })
      .catch(err => {

        let message = err.message;
        if (message === "Request failed with status code 404")
          message = "Уучлаарай сэрвэр дээр энэ өгөгдөл байхгүй байна...";
        else if (message === "Network Error")
          message =
            "Сэрвэр ажиллахгүй байна. Та түр хүлээгээд дахин оролдоно уу.";
        else if (message == "Request failed with status code 500")
          message =
            "Сэрвэр ажиллахгүй байна. Та түр хүлээгээд дахин оролдоно уу.";

        setError(message);
      }).finally(() => setLoading(false));
  }, []);

  return [hutulburs, loading, error];
}