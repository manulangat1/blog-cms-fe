import React, { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Posts from "./Posts/Posts";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { redirect, useNavigate } from "react-router-dom";
// import { withR } from 'react-router-dom'
function Home() {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (!isAuthenticated) {
      redirect("/signin");
    }
  }, [isAuthenticated]);
  return (
    <section style={{ backgroundColor: "#88BDBC" }}>
      {/* <Navbar /> */}
      <Posts />
    </section>
  );
}

export default Home;
