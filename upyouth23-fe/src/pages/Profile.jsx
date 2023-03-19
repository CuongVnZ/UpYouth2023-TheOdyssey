import React, { useState, useEffect } from 'react';
import { DisplayCampaigns } from '../components';
import { useSelector } from "react-redux";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com'
  });
  const [nameInput, setNameInput] = useState(profile.name);
  const [emailInput, setEmailInput] = useState(profile.email);
  const [donationHistory, setDonationHistory] = useState([]);

  const user = useSelector((state) => state.user.currentUser);

  const handleNameChange = (event) => {
    setNameInput(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailInput(event.target.value);
  };

  const handleSave = (event) => {
    event.preventDefault();
    setProfile({
      ...profile,
      name: nameInput,
      email: emailInput
    });
  };

  useEffect(() => {
    // fetch donation history data and set state
    setDonationHistory([
      { id: 1, amount: 50, date: '2022-10-10' },
      { id: 2, amount: 100, date: '2022-11-15' },
      { id: 3, amount: 25, date: '2023-01-20' }
    ]);

    setProfile(user);

  }, []);

  return (
    <div className="bg-white flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{profile.name}'s Profile</h1>

        <form onSubmit={handleSave} className="mb-8">
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="name-input">Name</label>
            <input
              type="text"
              id="name-input"
              className="w-full border rounded py-2 px-3"
              value={nameInput}
              onChange={handleNameChange}
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="email-input">Email</label>
            <input
              type="email"
              id="email-input"
              className="w-full border rounded py-2 px-3"
              value={emailInput}
              onChange={handleEmailChange}
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
            Save
          </button>
        </form>

        <h2 className="text-lg font-bold mb-4">Donation History</h2>
        <ul className="list-disc pl-8">
          {donationHistory.map((donation) => (
            <li key={donation.id}>
              Donated ${donation.amount} on {donation.date}
            </li>
          ))}
        </ul>

        {/* <DisplayCampaigns /> */}

        {/* More profile content here */}
      </div>
    </div>
  );
};

export default Profile;
