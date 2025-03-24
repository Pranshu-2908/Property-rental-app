import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MAINTENANCE_API_END_POINT } from "../utils/contains";
import { setAllReq } from "../redux/maitenanceSlice";

const useGetAllReq = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllReq = async () => {
      try {
        const res = await axios.get(`${MAINTENANCE_API_END_POINT}/`, {
          withCredentials: true,
        });
        if (res.data.status === "success") {
          dispatch(setAllReq(res.data.data.requests));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllReq();
  }, [dispatch]);
};

export default useGetAllReq;
