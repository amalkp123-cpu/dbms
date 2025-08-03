import React, { useState } from 'react';
import './Form.css';
import { Link } from 'react-router-dom';

const Form = () => {
    const [formData, setFormData] = useState({
        patientName: '',
        patientAge: '',
        patientGender: '',
        medicalDepartment: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [opNumber, setOpNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError('');
        setSuccessMessage('');
        setOpNumber('');

        // Basic validation
        if (!formData.medicalDepartment) {
            setError("Please select a department!");
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/patients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to submit form');
            }

            setSuccessMessage(data.message);
            setOpNumber(data.opNumber);

            // Reset form
            setFormData({
                patientName: '',
                patientAge: '',
                patientGender: '',
                medicalDepartment: ''
            });
        } catch (err) {
            setError(err.message || 'An error occurred while submitting the form');
            console.error('Submission error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section>
            <div className="btn">
                <Link to="/" className='back'>back to home</Link>
            </div>
            <div className="container">
                <div className="main">
                    <form onSubmit={handleSubmit}>
                        <h1 className="heading">Patient Registration</h1>
                        
                        {error && (
                            <div className="error-message">
                                <p>{error}</p>
                            </div>
                        )}
                        
                        <div className="form-group">
                            <label>Patient Name:</label>
                            <input
                                className="text"
                                type="text"
                                name="patientName"
                                placeholder="Full Name"
                                value={formData.patientName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label>Patient Age:</label>
                            <input
                                id="number"
                                type="number"
                                name="patientAge"
                                max="130"
                                min="1"
                                placeholder="Age"
                                value={formData.patientAge}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label>Gender:</label>
                            <select
                                className="fruits"
                                name="patientGender"
                                value={formData.patientGender}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Medical Department:</label>
                            <select
                                className="fruits"
                                name="medicalDepartment"
                                value={formData.medicalDepartment}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Department</option>
                                <option value="cardiology">Cardiology</option>
                                <option value="neurology">Neurology</option>
                                <option value="orthopedics">Orthopedics</option>
                                <option value="pediatrics">Pediatrics</option>
                                <option value="dermatology">Dermatology</option>
                                <option value="radiology">Radiology</option>
                                <option value="gynecology">Gynecology</option>
                            </select>
                        </div>

                        <button 
                            className="submit" 
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Processing...' : 'Submit'}
                        </button>
                    </form>
                </div>
                
                {successMessage && (
                    <div className="success-message">
                        <p>{successMessage}</p>
                        {opNumber && <p className="op-number">{opNumber}</p>}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Form;