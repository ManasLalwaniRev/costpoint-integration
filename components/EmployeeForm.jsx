'use client';

import React, { useState } from 'react';
import { formSections } from '@/lib/formConfig';
import axios from 'axios';

const EmployeeForm = () => {
  const [formData, setFormData] = useState(initializeFormData());
  const [submittedData, setSubmittedData] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  function initializeFormData() {
    const data = {};
    formSections.forEach(section => {
      section.fields.forEach(field => {
        data[field.name] = field.type === 'checkbox' ? false : '';
      });
    });
    return data;
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      // "http://localhost:5000/api/employee",
      "http://localhost:5000/api/import-employee",
      formData
    );

    setSubmittedData(response.data);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4000);

  } catch (error) {
    console.error("Error sending data:", error);
    alert("Failed to submit employee information.");
  }
};

  const handleReset = () => {
    setFormData(initializeFormData());
    setSubmittedData(null);
    setShowSuccess(false);
  };

  const renderLabel = (field) => (
  <label htmlFor={field.name} className="form-label">
    {field.label}
    {field.required && <span style={{ color: 'red', marginLeft: '4px' }}>*</span>}
  </label>
);

  const renderField = (field) => {
    switch (field.type) {
      case 'text':
      case 'number':
      case 'date':
        return (
          <div key={field.name} className="form-group">
            <label htmlFor={field.name} className="form-label">
              {renderLabel(field)}
            </label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              placeholder={field.placeholder}
              step={field.step}
              className="form-input"
              required={field.required}
            />
          </div>
        );

      case 'select':
        return (
          <div key={field.name} className="form-group">
            <label htmlFor={field.name} className="form-label">
              {field.label}
            </label>
            <select
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className="form-select"
              required={field.required}
            >
              <option value="">-- Select an option --</option>
              {field.options?.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        );

      case 'textarea':
        return (
          <div key={field.name} className="form-group form-group-full">
            <label htmlFor={field.name} className="form-label">
              {field.label}
            </label>
            <textarea
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="form-textarea"
              required={field.required}
            />
          </div>
        );

      case 'checkbox':
        return null; // Handled separately in checkbox group

      default:
        return null;
    }
  };


  const renderCheckboxGroup = (fields) => {
  const checkboxFields = fields.filter(f => f.type === 'checkbox');
  return (
    <div key="checkbox-group" className="form-group form-group-full">
      <div className="form-checkbox-group">
        {checkboxFields.map(field => (
          <div key={field.name} className="form-group-checkbox">
            {/* <input type="checkbox" id={field.name} required={field.required} /> */}

            <input
  type="checkbox"
  id={field.name}
  name={field.name}
  checked={formData[field.name] || false}
  onChange={handleChange}
  required={field.required}/>

            <label htmlFor={field.name} className="form-label">
              {field.label}
              {field.required && <span style={{ color: 'red', marginLeft: '4px' }}>*</span>}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

  // const renderCheckboxGroup = (fields) => {
  //   const checkboxFields = fields.filter(f => f.type === 'checkbox');
  //   if (checkboxFields.length === 0) return null;

  //   return (
  //     <div key="checkbox-group" className="form-group form-group-full">
  //       <div className="form-checkbox-group">
  //         {checkboxFields.map(field => (
  //           <div key={field.name} className="form-group-checkbox">
  //             <input
  //               type="checkbox"
  //               id={field.name}
  //               name={field.name}
  //               checked={formData[field.name] || false}
  //               onChange={handleChange}
  //               className="form-checkbox"
  //             />
  //             <label htmlFor={field.name} className="form-label">
  //               {field.label}
  //             </label>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };

  const renderSection = (section) => {
    const regularFields = section.fields.filter(f => f.type !== 'checkbox');
    const hasCheckboxes = section.fields.some(f => f.type === 'checkbox');

    return (
      <div key={section.title} className="form-section">
        <h2 className="form-section-title">{section.title}</h2>
        
        <div className="form-row">
          {regularFields.map(field => renderField(field))}
        </div>

        {hasCheckboxes && renderCheckboxGroup(section.fields)}
      </div>
    );
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        {formSections.map(section => renderSection(section))}

        <div className="form-section form-group-full">
          <div className="btn-group-block">
            <button type="submit" className="btn btn-primary">
              Submit Employee Information
            </button>
            <button type="reset" onClick={handleReset} className="btn btn-secondary">
              Clear Form
            </button>
          </div>
        </div>
      </form>

      {showSuccess && (
        <div className="alert alert-success mt-4">
          Employee information submitted successfully!
        </div>
      )}

      {submittedData && (
        <div className="card mt-4">
          <div className="card-header">Employee Information Summary</div>
          <div className="card-body">
            <div className="summary-grid">
              {Object.entries(submittedData).map(([key, value]) => {
                if (!value && value !== false) return null;
                const displayValue = typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value;
                return (
                  <div key={key} className="summary-item">
                    <div className="summary-label">{key.toUpperCase()}</div>
                    <div className="summary-value">{displayValue}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeForm;
