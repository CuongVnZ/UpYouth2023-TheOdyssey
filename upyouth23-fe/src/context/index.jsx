import React, { useContext, createContext } from 'react';

import {campaigns, organizations} from '../demodata.js';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {

  const address = " ";
  const contract = " ";
  const connect = () => {};

  const publishCampaign = async (form) => {
    // try {
    //   const data = await createCampaign([
    //     address, // owner
    //     form.title, // title
    //     form.description, // description
    //     form.target,
    //     new Date(form.deadline).getTime(), // deadline,
    //     form.image
    //   ])

    //   console.log("contract call success", data)
    // } catch (error) {
    //   console.log("contract call failure", error)
    // }
  }

  const getCampaigns = async () => {
    // const campaigns = await contract.call('getCampaigns');

    // const parsedCampaings = campaigns.map((campaign, i) => ({
    //   owner: campaign.owner,
    //   title: campaign.title,
    //   description: campaign.description,
    //   target: ethers.utils.formatEther(campaign.target.toString()),
    //   deadline: campaign.deadline.toNumber(),
    //   amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
    //   image: campaign.image,
    //   pId: i
    // }));

    // return parsedCampaings;


    return campaigns;
  }

  const getUserCampaigns = async () => {
    const allCampaigns = await getCampaigns();

    // const filteredCampaigns = allCampaigns.filter((campaign) => campaign.owner === address);

    return filteredCampaigns;
  }

  const donate = async (pId, amount) => {
    // const data = await contract.call('donateToCampaign', pId, { value: ethers.utils.parseEther(amount)});

    return data;
  }

  const getCreator = async (name) => {

    const org = await organizations.find((org) => org.name == name);
    // console.log(org.name)
    return organizations.find((org) => org.name == name).id;
  }


  return (
    <StateContext.Provider
      value={{ 
        address,
        contract,
        connect,
        createCampaign: publishCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getCreator
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);