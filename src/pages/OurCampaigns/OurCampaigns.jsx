import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import './OurCampaigns.css'
// import useProperties from '../../Hooks/useProperies'

const OurCampaigns = () => {
  // const {data, isError, isLoading }= useProperties();
  return (
    <div className="wrapper">
    <div className="flexColCenter paddings innerWidth OurCampaigns-container">
      
      <SearchBar />
     
    </div>
  </div> 

  )
}

export default OurCampaigns
