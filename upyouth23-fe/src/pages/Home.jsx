import React, { useState, useEffect } from 'react'

import { DisplayCampaigns, Filters } from '../components';
import { useStateContext } from '../context'

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();
  // create demo data
  // const { address, contract, getCampaigns } = { 
  //   address: '0x5FbDB2315678afecb367f032d93F642f64180aa3', 
  //   contract: '0x5FbDB2315678afecb367f032d93F642f64180aa3', 
  //   getCampaigns: () => { 
  //     return campaigns;
  //   } 
  // };


  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);

  function handleFilter(filters) {
    console.log(filters)
  }

  return (
    <div>
      <Filters onFilter={handleFilter} />
      <DisplayCampaigns title="All Campaigns" isLoading={isLoading} campaigns={campaigns} />
    </div>
  );
}

export default Home