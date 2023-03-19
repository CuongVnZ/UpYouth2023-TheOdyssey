import React from 'react';
import { useParams } from 'react-router-dom';

import {organizations} from '../demodata';


const Organization = () => {
  const { id } = useParams();
  const organization = organizations.find((org) => org.id === Number(id));

  if (!organization) {
    return <p>Organization not found.</p>;
  }

  return (
    <div className="container mx-auto my-4">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <img src={organization.image} alt={organization.name} className="w-full" />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{organization.name}</h2>
          <p className="text-gray-700 text-base">{organization.description}</p>
          <p className="text-gray-700 text-base mt-4">
            <span className="font-bold">Website:</span>{' '}
            <a href={organization.website} target="_blank" rel="noopener noreferrer">
              {organization.website}
            </a>
            </p>
    </div>
  </div>

  <div className="mt-8">
    <h3 className="text-xl font-bold mb-4">Reviews</h3>
    {organization.reviews.length === 0 ? (
      <p>No reviews yet.</p>
    ) : (
      <div className="space-y-4">
        {organization.reviews.map((review) => (
          <div key={review.id} className="bg-white shadow rounded-lg p-4">
            <p className="text-gray-700 text-base font-bold">{review.author}</p>
            <p className="text-gray-700 text-base">
              Rating: {review.rating}/5
            </p>
            <p className="text-gray-700 text-base">{review.comment}</p>
          </div>
        ))}
      </div>
    )}
  </div>

  <div className="mt-8">
    <h3 className="text-xl font-bold mb-4">Campaigns</h3>
    {organization.campaigns.length === 0 ? (
      <p>No campaigns yet.</p>
    ) : (
      <div className="space-y-4">
        {organization.campaigns.map((campaign) => (
          <div
            key={campaign.id}
            className={`bg-white shadow rounded-lg p-4 ${
              campaign.success ? 'border-green-500' : 'border-red-500'
            }`}
          >
            <h4 className="text-lg font-bold mb-2">{campaign.name}</h4>
            <p className="text-gray-700 text-base">{campaign.description}</p>
            <p
              className={`text-base mt-2 ${
                campaign.success ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {campaign.success ? 'Success' : 'Fail'}
            </p>
          </div>
        ))}
      </div>
    )}
  </div>
</div>

);
};

export default Organization;