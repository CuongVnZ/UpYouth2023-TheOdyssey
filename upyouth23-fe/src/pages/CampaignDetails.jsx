import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
// import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { CountBox, CustomButton, Loader } from '../components';
import { calculateBarPercentage, daysLeft } from '../utils';
import { thirdweb } from '../assets';

import { logout } from "../redux/userRedux"
import { useSelector, useDispatch } from 'react-redux';

const CampaignDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { donate, getCreator, contract, address } = useStateContext();
  
  const user = useSelector(state => state.user.currentUser)
  const dispatch = useDispatch();

  const logoutHandler = () => {
      dispatch(logout())
  }

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [donators, setDonators] = useState([]);
  const [creatorId, setCreatorId] = useState(0);

  const remainingDays = daysLeft(state.deadline);

  const fetchDonators = async () => {
    
    setDonators(state.donators);
  }

  const fetchCreator = async () => {
    var oid = await getCreator(state.owner);
    // console.log(creatorId)
    setCreatorId(oid);
    // console.log(creatorId);
  }

  useEffect(() => {
    if(contract) fetchDonators();
    fetchCreator();
  }, [creatorId, donators])

  const handleDonate = async () => {
    setIsLoading(true);

    // await donate(state.pId, amount); 
    setTimeout(() => {
      setIsLoading(false);
      navigate('/success');
    }, 3000);

    // navigate('/')
    // setIsLoading(false);
  }

  return (
    <div>
      {isLoading && <Loader />}

      <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
        <div className="flex-1 flex-col">
          <img src={state.image} alt="campaign" className="w-full h-[410px] object-cover rounded-xl"/>
          <div className="relative w-full h-[5px] bg-[#3a3a43] mt-2">
            <div className="absolute h-full bg-[#4acd8d]" style={{ width: `${calculateBarPercentage(state.target, state.amountCollected)}%`, maxWidth: '100%'}}>
            </div>
          </div>
        </div>

        <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
          <CountBox title="Days Left" value={remainingDays} />
          <CountBox title={`Raised of $${state.target}`} value={"$"+state.amountCollected} />
          <CountBox title="Total Backers" value={donators.length} />
        </div>
      </div>

      <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
        <div className="flex-[2] flex flex-col gap-[40px]">
          <div>
            {/* Title */}
            <h1 className="font-epilogue font-semibold text-[36px]">{state.title}</h1>
            

            <h4 className="font-epilogue font-semibold text-[18px] uppercase">Creator</h4>

            <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
              <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
                <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain"/>
              </div>
              <div>
                <h4 className="font-epilogue font-semibold text-[14px] break-all">{state.owner}</h4>
                <p className="mt-[4px] font-epilogue font-normal text-[12px] text-[#808191]">10 Campaigns</p>
              </div>
              <div>
                <CustomButton
                  title="View"
                  styles="bg-[#4acd8d] text-[#fff] font-epilogue font-semibold text-[14px] px-[20px] py-[10px] rounded-[10px]"
                  handleClick={() => navigate('/organizations/'+creatorId)}
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[18px] uppercase">Story</h4>

              <div className="mt-[20px]">
                <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">{state.description}</p>
              </div>
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[18px] uppercase">Donators</h4>

              <div className="mt-[20px] flex flex-col gap-4">
                {donators.length > 0 ? donators.map((item, index) => (
                  <div key={`${item.donator}-${index}`} className="flex justify-between items-center gap-4">
                    <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] break-ll">{index + 1}. {item.donator}</p>
                    <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] break-ll">${item.donation}</p>
                  </div>
                )) : (
                  <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">No donators yet. Be the first one!</p>
                )}
              </div>
          </div>
        </div>

        <div className="flex-1">
          <h4 className="font-epilogue font-semibold text-[18px] uppercase">Status: {state.status}</h4>   
          {state.status != "Ended" && (
          <div className="mt-[20px] flex flex-col p-4 bg-white rounded-[10px] shadow-md">
            <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center ">
              Fund the campaign
            </p>
            <div className="mt-[30px]">
              <input 
                type="number"
                placeholder="250000 VND"
                step="250000"
                className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />

              <div className="my-[20px] p-4 bg-[#dedcdc] rounded-[10px]">
                <h4 className="font-epilogue font-semibold text-[14px] leading-[22px]">Back it because you believe in it.</h4>
                <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-[#808191]">Support the project for no reward, just because it speaks to you.</p>
              </div>

              <CustomButton 
                btnType="button"
                title="Fund Campaign"
                styles="w-full bg-[#8c6dfd]"
                handleClick={handleDonate}
              />
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CampaignDetails