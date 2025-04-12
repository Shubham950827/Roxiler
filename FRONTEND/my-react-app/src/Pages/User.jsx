import React, { useEffect, useState } from 'react'
import SearchBar from "../Components/SearchBar"
import StoreList from "../Components/StoreList"
import NavBar from "../Components/NavBar";
import axios from 'axios';
export const User = () => {
    const [data, setData] = useState([]);
      const [loading, setLoading] = useState(true);
    const fetchShops = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/shops/');
        console.log("API response:", response.data);
        setData(response.data.shops);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchShops()
    } , [])
  return (



    <div>
        <NavBar heading= "User Dashboard"/>
        <SearchBar/>
        <StoreList data={data} loading={loading}/>
    </div>
  )
}

export default User;