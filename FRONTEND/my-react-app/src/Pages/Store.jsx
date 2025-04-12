import React from 'react'
import NavBar from '../Components/NavBar';
import SearchBar from "../Components/SearchBar"
import StoreList from "../Components/StoreList"
export const Store = () => {
  return (
    <div>
        <NavBar heading= "Owner Dashboard"/>
        <SearchBar/>
        <StoreList/>
    </div>
  )
}

export default Store;