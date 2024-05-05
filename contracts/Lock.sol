// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


contract AutoInsurance {
    address public insurer;
    address public policeDept;
    address public customer;
    address public garageSupervisor;
    
    enum State { NotReady, Inspected, WaitingForClaimsApproval, GarageInspectionCompletedSuccess, ProcessPayment }
    State public state;
    
   string public ipfsHash = "QmXgm5QVTy8pRtKrTPmoWPGXNesehCpP4jjFMTpvGamc1p"; 
    
    uint256 public numberOfRequestsByCustomer;
    uint256 public numberOfValidationByGaragemember;
    uint256 public numberOfApprovalsByAutoInsurer;
    
    mapping(address => bool) public approvedCustomersByInsurer;
    mapping(address => bool) public approvedByGarageSupervisor;
    
    event InspectionCompletedAndReported(string reportIPFSHash);
    event ClaimSubmitted();
    event SurveyorAppointed();
    event ClaimValidatedAndApproved();
    event PaymentApproved();

    modifier onlyVehicleInsurer() {
        require(msg.sender == insurer, "Only vehicle insurer can perform this action");
        _;
    }
    
    modifier onlyGarageSupervisor() {
        require(msg.sender == garageSupervisor, "Only garage supervisor can perform this action");
        _;
    }
    
    constructor(address _policeDept, address _customer, address _garageSupervisor) {
        insurer = msg.sender;
        policeDept = _policeDept;
        customer = _customer;
        garageSupervisor = _garageSupervisor;
        state = State.NotReady;
    }
    
    function submitClaim() external {
        require(state == State.NotReady, "Contract is not in a state to accept claims");
        
        state = State.Inspected;
        numberOfRequestsByCustomer++;
        
        emit ClaimSubmitted();
    }
    
    function appointSurveyor() external onlyVehicleInsurer {
        require(state == State.Inspected, "Contract is not in a state to appoint surveyor");
        
        state = State.WaitingForClaimsApproval;
        
        emit SurveyorAppointed();
    }
    
    function inspectVehicle() external onlyGarageSupervisor {
        require(state == State.WaitingForClaimsApproval, "Contract is not in a state for inspection");
        
        // Here you can add your logic to inspect the vehicle and validate the report
        // For demonstration purpose, emitting event with IPFS hash of the report
        emit InspectionCompletedAndReported(ipfsHash);
        
        // Assuming validation is successful
        state = State.GarageInspectionCompletedSuccess;
        numberOfValidationByGaragemember++;
        
        emit ClaimValidatedAndApproved();
    }
    
    function approvePayment() external onlyVehicleInsurer {
        require(state == State.GarageInspectionCompletedSuccess, "Contract is not in a state to approve payment");
        
        // Here you can add your logic to process payment to the customer
        // For demonstration purpose, emitting event for payment approval
        state = State.ProcessPayment;
        
        emit PaymentApproved();
    }
}
