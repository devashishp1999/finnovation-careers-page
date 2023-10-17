import React, { useState } from "react";
import MyContext from "./MyContext";

function MyProvider({ children }) {
  const [jobsData, setJobsData] = useState([]);

  return (
    <MyContext.Provider value={{ jobsData, setJobsData }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;
