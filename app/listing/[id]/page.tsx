"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const UserListing = () => {

     const [data, setData] = useState("nothing");
      
      useEffect(() => {
            const getListingDetails= async () => {
              const res = await axios.get("/api/tour/tourlisting");
            //   console.log(res.data.data);
            console.log(data)
              setData(res.data.data);
            };
            getListingDetails()
    },)


  return (
    <div>
      <h1>listing page</h1>
      {/* <span>{data.id}</span> */}
      <hr />
    </div>
  );
};

export default UserListing;
