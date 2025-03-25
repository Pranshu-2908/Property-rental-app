import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PROPERTY_API_END_POINT } from "../utils/contains";
import { setSingleProp } from "../redux/propertySlice";

const useGetSingleProp = (prop_id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSingleProps = async () => {
      try {
        const res = await axios.get(`${PROPERTY_API_END_POINT}/${prop_id}`, {
          withCredentials: true,
        });

        if (res.data.status === "success") {
          dispatch(setSingleProp(res.data.data.property));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleProps();
  }, [prop_id, dispatch]);
};

export default useGetSingleProp;
