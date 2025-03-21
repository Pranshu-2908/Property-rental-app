import React, { useEffect } from "react";
import { PROPERTY_API_END_POINT } from "../utils/contains";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAllProps } from "../redux/propertySlice";

const useGetAllProps = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllProps = async () => {
      try {
        const res = await axios.get(`${PROPERTY_API_END_POINT}/`, {
          withCredentials: true,
        });

        if (res.data.status === "success") {
          dispatch(setAllProps(res.data.data.properties));
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllProps();
  }, [dispatch]);
};

export default useGetAllProps;
