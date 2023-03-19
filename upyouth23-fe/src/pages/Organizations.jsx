import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { getOrganizations } from '../api';
// import { DisplayCampaigns } from '../components';

import {organizations} from '../demodata';

const Organizations = () => {
  // const [organizations, setOrganizations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // const orgs = await getOrganizations();
      
      // setOrganizations(organizations);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Charity Organizations</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {organizations.map((org) => (
            <li key={org.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link to={`/organizations/${org.id}`}>
                <img
                  className="w-full h-48 object-cover"
                  src={org.image}
                  alt={`Logo of ${org.name}`}
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{org.name}</h2>
                  <p className="text-gray-700">{org.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Organizations;
