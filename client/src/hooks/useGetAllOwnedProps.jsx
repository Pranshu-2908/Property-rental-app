import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PROPERTY_API_END_POINT } from "../utils/contains";
import { setAllOwnedProps } from "../redux/propertySlice";

const useGetAllOwnedProps = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllOwnedProps = async () => {
      try {
        const res = await axios.get(`${PROPERTY_API_END_POINT}/owned`, {
          withCredentials: true,
        });

        if (res.data.status === "success") {
          dispatch(setAllOwnedProps(res.data.data.properties));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllOwnedProps();
  }, [dispatch]);
};

export default useGetAllOwnedProps;
