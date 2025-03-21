import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PROPERTY_API_END_POINT } from "../utils/contains";
import axios from "axios";
import { setAllRentedProps } from "../redux/propertySlice";

const useGetAllRentedProps = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllRentedProps = async () => {
      try {
        const res = await axios.get(`${PROPERTY_API_END_POINT}/rented`, {
          withCredentials: true,
        });

        if (res.data.status === "success") {
          dispatch(setAllRentedProps(res.data.data.properties));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllRentedProps();
  }, [dispatch]);
};

export default useGetAllRentedProps;
