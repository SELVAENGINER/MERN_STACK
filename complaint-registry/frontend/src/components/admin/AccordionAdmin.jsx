import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Alert from 'react-bootstrap/Alert';

import axios from 'axios';
import Button from 'react-bootstrap/Button';

const AccordionAdmin = () => {
  const [complaintList, setComplaintList] = useState([]);
  const [agentList, setAgentList] = useState([]);
  const [activeSection, setActiveSection] = useState(null); // null means no section is active by default

  useEffect(() => {
    const getComplaints = async () => {
      try {
        const response = await axios.get('http://localhost:8000/status');
        setComplaintList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getComplaints();

    const getAgentsRecords = async () => {
      try {
        const response = await axios.get('http://localhost:8000/AgentUsers');
        setAgentList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAgentsRecords();
  }, []);

  const handleSelection = async (agentId, complaintId, status, agentName) => {
    try {
      await axios.get(`http://localhost:8000/AgentUsers/${agentId}`);
      const assignedComplaint = { agentId, complaintId, status, agentName };
      await axios.post('http://localhost:8000/assignedComplaints', assignedComplaint);

      const updatedComplaintList = complaintList.filter((complaint) => complaint.id !== complaintId);
      setComplaintList(updatedComplaintList);
      alert(`Complaint assigned to Agent ${agentName}`);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleView = (view) => {
    if (activeSection === view) {
      setActiveSection(null); // If the same section is clicked, hide it
    } else {
      setActiveSection(view); // Show the clicked section
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '60vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {/* Here are the buttons for User and Agent */}
        <Button
        className='acc-btn'
          variant="outline-light"
          onClick={() => toggleView('complaints')}
          style={{
            margin: '20px',
            padding: '50px 50px',
            fontSize: '16px',
            backgroundColor: 'red',
            borderColor: 'white',
            color: '#fff',
          }}
        >
         COMPLAINT INFO
        </Button>
        <Button
        className='acc-btn'
          variant="outline-light"
          onClick={() => toggleView('agents')}
          style={{
            margin: '20px',
            padding: '50px 50px',
            fontSize: '16px',
            backgroundColor: 'rgb(14, 170, 0)',
            borderColor: 'white',
            color: '#fff',
          }}
         
        >
          ACTIVE AGENTS
        </Button>
      </div>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* Content that can grow beyond 70vh */}
        {activeSection === 'complaints' && (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", margin: "20px" }}>
              {complaintList.length > 0 ? (
                complaintList.map((complaint, index) => (
                  <Card key={index} style={{ width: '18rem', margin: '15px',backgroundColor: "rgba(255, 55, 0, 0.173)",   // Semi-transparent background
                    backdropFilter: "blur(10px)",            // Blurs background for glass effect
                    borderRadius: "15px",                    // Rounded corners for smoothness
                    border: "1px solid rgba(255, 255, 255, 0.2)",color:"white" }}>
                    <Card.Body>
                      <Card.Title>Name: {complaint.name}</Card.Title>
                      <div style={{ fontSize: '14px', marginTop: '20px' }}>
                        <Card.Text>Address: {complaint.address}</Card.Text>
                        <Card.Text>City: {complaint.city}</Card.Text>
                        <Card.Text>State: {complaint.state}</Card.Text>
                        <Card.Text>Pincode: {complaint.pincode}</Card.Text>
                        <Card.Text>Comment: {complaint.comment}</Card.Text>
                        <Card.Text>Status: {complaint.status}</Card.Text>
                      </div>
                      {complaint.status !== "completed" && (
                        <Dropdown className='mt-2'>
                          <Dropdown.Toggle variant="warning" id="dropdown-basic">
                            Assign
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            {agentList.map((agent, index) => (
                              <Dropdown.Item
                                key={index}
                                onClick={() =>
                                  handleSelection(agent._id, complaint._id, complaint.status, agent.name)
                                }
                              >
                                {agent.name}
                              </Dropdown.Item>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown>
                      )}
                    </Card.Body>
                  </Card>
                ))
              ) : (
                <Alert variant="info">
                  <Alert.Heading>No complaints to show</Alert.Heading>
                </Alert>
              )}
            </div>
          </div>
        )}

        {activeSection === 'agents' && (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", margin: "20px" }}>
              {agentList.length > 0 ? (
                agentList.map((agent, index) => (
                  <Card key={index} style={{ width: '18rem', margin: '15px',backgroundColor: "rgba(255, 55, 0, 0.173)",   // Semi-transparent background
                    backdropFilter: "blur(10px)",            // Blurs background for glass effect
                    borderRadius: "15px",                    // Rounded corners for smoothness
                    border: "1px solid rgba(255, 255, 255, 0.2)",color:"white" }}>
                    <Card.Body>
                      <Card.Title>Name: {agent.name}</Card.Title>
                      <Card.Text>Email: {agent.email}</Card.Text>
                    </Card.Body>
                  </Card>
                ))
              ) : (
                <Alert variant="info">
                  <Alert.Heading>No Agents to show</Alert.Heading>
                </Alert>
              )}
            </div>
          </div>
        )}
      </div>

    
    </div>
  );
};

export default AccordionAdmin;
