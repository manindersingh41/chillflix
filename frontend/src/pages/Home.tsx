import React from "react";
import { useDispatch } from "react-redux";
import {getUsers} from '../features/authSlice'
const Home = () => {
  const dispatch: Function = useDispatch();

  React.useEffect(() => {
    dispatch(getUsers())
  },[dispatch])


  return <div>Home</div>;
};

export default Home;
