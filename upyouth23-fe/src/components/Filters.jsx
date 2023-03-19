import { useState } from 'react';

const categories = ['Technology', 'Education', 'Environment', 'Health'];
const organizations = ['Charity A', 'Charity B', 'Charity C', 'Saigon Children’s Charity CIO'];
const statuses = ['Open', 'Closed', 'Pending', 'Cancelled'];
const locations = ['Ha Noi', 'Da Nang', 'Ho Chi Minh'];

const Filters = ({ onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedOrganization, setSelectedOrganization] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onFilter({ category });
  };

  const handleOrganizationSelect = (organization) => {
    setSelectedOrganization(organization);
    onFilter({ organization });
  };

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
    onFilter({ status });
  };

  return (
    <div className="flex justify-between mb-4">
      <div className="flex space-x-2">
        <span className="font-epilogue font-semibold text-[18px] text-left">Filter by:</span>
        <div className="relative inline-flex">
          <select
            className="rounded-l-full bg-gray-100 py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={selectedCategory}
            onChange={(e) => handleCategorySelect(e.target.value)}
          >
            <option value="">Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

        </div>
        <div className="relative inline-flex">
          <select
            className="bg-gray-100 py-1 px-2 text-gray-700 leading-tight rounded-none focus:outline-none focus:bg-white focus:border-gray-500"
            value={selectedOrganization}
            onChange={(e) => handleOrganizationSelect(e.target.value)}
          >
            <option value="">Organization</option>
            {organizations.map((organization) => (
              <option key={organization} value={organization}>
                {organization}
              </option>
            ))}
          </select>
        </div>
        <div className="relative inline-flex">
          <select
            className="rounded-r-full bg-gray-100 py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={selectedStatus}
            onChange={(e) => handleStatusSelect(e.target.value)}
          >
            <option value="">Status</option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div className="relative inline-flex">
          <select
            className="rounded-r-full bg-gray-100 py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={selectedStatus}
            onChange={(e) => handleStatusSelect(e.target.value)}
          >
            <option value="">Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
