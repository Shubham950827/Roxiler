import React, { useState,useEffect } from 'react'
import NavBar from '../Components/NavBar';
import axios from 'axios';
import SearchBar from "../Components/SearchBar"
import StoreList from "../Components/StoreList"
import { Modal } from '../Components/Modal';
import Total from '../Components/Total';
export const Admin = () => {
  const [addStore,setAddStore] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [shopCount, setShopCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);


  const fetchShopsCount = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/shops/shop-count');
      console.log("API response:", response.data);
      setShopCount(response.data.shopCount);  // Adjust based on your backend response structure
    } catch (error) {
      console.error("There was an error fetching the shop count!", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserCount = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/get-user');
      console.log("API response:", response.data);
      setUserCount(response.data.shopCount);  // Adjust based on your backend response structure
    } catch (error) {
      console.error("There was an error fetching the shop count!", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRatingCount = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/ratings/get-rating');
      console.log("API response:", response.data);
      setRatingCount(response.data.shopCount);  // Adjust based on your backend response structure
    } catch (error) {
      console.error("There was an error fetching the shop count!", error);
    } finally {
      setLoading(false);
    }
  };

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

  const handleSearch = async ({ name, location }) => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/shops/search', {
        params: {
          name,
          location,
        },
      });
      setData(response.data.results); // because your API returns { results: [...] }
    } catch (error) {
      console.error("Error during search:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShops();
    fetchShopsCount()
    fetchUserCount()
    fetchRatingCount()
  }, []);

  return (
    <>
      <div>
        <NavBar heading= "Admin Dashboard"/>
        <SearchBar onSearch={handleSearch}/>
        <Total shopsCount ={shopCount} userCount = {userCount} ratingCount = {ratingCount}/>
        <button onClick= {()=>setAddStore(true)}>ADD STORE</button>
        <StoreList data = {data} loading = {loading}/>
      </div>
      {
        addStore && (
          <Modal close={()=>setAddStore(false)} fetchShops={fetchShops} fetchShopsCount={fetchShopsCount}/>
        )
      }
    </>
  )
}

export default Admin;