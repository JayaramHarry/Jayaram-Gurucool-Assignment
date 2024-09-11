import React, { useState, useEffect } from 'react';
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { Confirmation } from './components/Confirmation';
import { Tabs, Tab, Button } from '@mui/material';
import './App.css';

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '',
    address: '', address2: '', city: '', state: '', zip: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) setFormData(JSON.parse(savedData));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    localStorage.setItem('formData', JSON.stringify({ ...formData, [name]: value }));
  };

  const validateStep = () => {
    let currentErrors = {};
    if (currentStep === 0) {
      if (!formData.name) currentErrors.name = 'Name is required';
      if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) currentErrors.email = 'Valid email is required';
      if (!formData.phone) currentErrors.phone = 'Phone number is required';
    } else if (currentStep === 1) {
      if (!formData.address) currentErrors.address = 'Address is required';
      if (!formData.city) currentErrors.city = 'City is required';
      if (!formData.state) currentErrors.state = 'State is required';
      if (!formData.zip || !/^\d{5}$/.test(formData.zip)) currentErrors.zip = 'Valid zip code is required';
    }
    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => setCurrentStep(prev => prev - 1);

  const steps = [
    <Step1 formData={formData} handleInputChange={handleInputChange} errors={errors} />,
    <Step2 formData={formData} handleInputChange={handleInputChange} errors={errors} />,
    <Confirmation formData={formData} />
  ];

  return (
    <div className="form-container">
      <Tabs value={currentStep} onChange={(e, newStep) => setCurrentStep(newStep)} centered>
        <Tab label="Personal Info" />
        <Tab label="Address Info" />
        <Tab label="Confirmation" />
      </Tabs>

      {steps[currentStep]}

      <div className="button-container">
        {currentStep > 0 && <Button onClick={prevStep}>Back</Button>}
        {currentStep < steps.length - 1 && <Button onClick={nextStep}>Next</Button>}
        {currentStep === steps.length - 1 && (
          <Button onClick={() => alert('Form submitted!')}>Submit</Button>
        )}
      </div>
    </div>
  );
};

export default App;
