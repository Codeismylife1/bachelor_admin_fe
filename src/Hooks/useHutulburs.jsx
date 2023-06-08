import { useState, useEffect } from 'react'
import axios from './../utils/axios'

export default () => {
  const [hutulburs, setHutulburs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`/hutulbur?select=id name s_time bosgo_onoo`)
      .then(result => {
        let hutulbur = result.data.data.map(el => {
          return {
            id: el.id,
            name: el.name,
            s_time: el.s_time,
            bosgo_onoo: el.bosgo_onoo,
            s_name: el.School.name
          }
        })
        setHutulburs(hutulbur);
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