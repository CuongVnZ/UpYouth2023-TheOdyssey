pragma solidity ^0.8.0;

contract DonationContract {
    uint public totalDonations;
    uint public numDonors;

    event DonationReceived(address indexed from, uint amount);

    function receiveDonation() public payable {
        require(msg.value > 0, "Donation amount must be greater than 0");
        totalDonations += msg.value;
        numDonors += 1;
        emit DonationReceived(msg.sender, msg.value);
    }

    function getTotalDonations() public view returns (uint) {
        return totalDonations;
    }

    function getNumDonors() public view returns (uint) {
        return numDonors;
    }
}
