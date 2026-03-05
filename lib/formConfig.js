// Employee Form Configuration - JavaScript Version

// Organized form sections for easy expansion
export const formSections = [
  {
    title: 'Employee Basic Information',
    fields: [
      { name: 'employeeId', label: 'Employee ID  ', type: 'text', required: true, },
      { name: 'lastName', label: 'Last Name  ', type: 'text', required: true },
      { name: 'firstName', label: 'First Name', type: 'text' },
      { name: 'employeeClass', label: 'Employee Class', type: 'text' },
      {
        name: 'employeeType',
        label: 'Employee Type',
        type: 'select',
        options: [
          { label: 'Permanent', value: 'P' },
          { label: 'Temporary', value: 'T' },
        ],
      },
      {
        name: 'status',
        label: 'Status ',
        type: 'select',
        options: [
          { label: 'Active', value: 'ACT' },
          { label: 'Inactive', value: 'INR' },
          { label: 'Terminated', value: 'TER' },
        ],
      },
      { name: 'corporateOfficer', label: 'Corporate Officer', type: 'checkbox', required: true },
      { name: 'seasonalEmployee', label: 'Seasonal Employee ', type: 'checkbox', required: true },
      { name: 'variableHours', label: 'Variable Hours Employee', type: 'checkbox', required: true },
    ],
  },
  {
    title: 'Salary & Compensation',
    fields: [
      { name: 'annualAmount', label: 'Annual Amount  ', type: 'number', placeholder: '0.00', step: '0.01' },
      { name: 'hourlyAmount', label: 'Hourly Amount (HRLY_AMT)', type: 'number', placeholder: '0.00', step: '0.01' },
      { name: 'salaryAmount', label: 'Payroll Salary Amount (SAL_AMT)', type: 'number', placeholder: '0.00', step: '0.01' },
      { name: 'standardHourlyRate', label: 'Standard Hourly Rate  ', type: 'number', placeholder: '0.00', step: '0.01' },
      { name: 'estimatedAnnualHours', label: 'Estimated Annual Hours ', type: 'number', placeholder: '0.00', step: '0.01' },
      { name: 'compensationPlan', label: 'Compensation Plan', type: 'text' },
      { name: 'salaryGrade', label: 'Salary Grade ', type: 'text' },
      { name: 'step', label: 'Step', type: 'number' },
      {
        name: 'rateType',
        label: 'Rate Type',
        type: 'select',
        options: [
          { label: 'Hourly', value: 'H' },
          { label: 'Salary', value: 'S' },
        ],
      },
    ],
  },
  {
    title: 'Dates Information',
    fields: [
      { name: 'effectiveDate', label: 'Effective Date', type: 'date', required: true },
      { name: 'endDate', label: 'End Date', type: 'date' },
      { name: 'hireDateFlag', label: 'Hire Date Flag ', type: 'checkbox', required: true },
      { name: 'termDateFlag', label: 'Term Date Flag ', type: 'checkbox', required: true },
    ],
  },
  {
    title: 'Organization & Job Details',
    fields: [
      { name: 'hrOrganization', label: 'HR Organization ', type: 'text' },
      { name: 'organization', label: 'Home Organization ', type: 'text', required: true },
      { name: 'securityOrganization', label: 'Security Organization ', type: 'text' },
      { name: 'jobCode', label: 'Job Code ', type: 'text' },
      { name: 'jobCategory', label: 'Job Category ', type: 'text', required: true }, // Mapped from GLC
      { name: 'jobTitle', label: 'Job Title', type: 'text' },
      { name: 'workState', label: 'Work State', type: 'text', required: true },
      { name: 'workHoursInYear', label: 'Work Hours in Year', type: 'number', required: true },
      { name: 'laborLocation', label: 'Labor Location', type: 'text' },
      { name: 'laborGroup', label: 'Labor Group', type: 'text' },
    ],
  },
  {
    title: 'Manager & Supervisor',
    fields: [
      { name: 'managerId', label: 'Manager ID  ', type: 'text' },
      { name: 'managerName', label: 'Manager Name  ', type: 'text' },
      { name: 'supervisorId', label: 'Supervisor ID ', type: 'text' },
      { name: 'supervisorName', label: 'Supervisor Name ', type: 'text' },
    ],
  },
  {
    title: 'Ratings & Performance',
    fields: [
      { name: 'overallRating', label: 'Overall Rating ', type: 'text' },
      { name: 'meritPercent', label: 'Merit Percent ', type: 'number', step: '0.01' },
      { name: 'percentIncrease', label: 'Percent Increase ', type: 'number', step: '0.01' },
      { name: 'percentGradeChange', label: 'Percent Grade Change ', type: 'number', step: '0.01' },
      { name: 'reviewForm', label: 'Review Form ', type: 'text' },
    ],
  },
  {
    title: 'Personnel Actions',
    fields: [
      { name: 'personnelAction1', label: 'Personnel Action 1', type: 'text' },
      { name: 'personnelAction1Desc', label: 'Personnel Action 1 Description', type: 'text' },
      { name: 'personnelAction2', label: 'Personnel Action 2', type: 'text' },
      { name: 'personnelAction2Desc', label: 'Personnel Action 2 Description', type: 'text' },
      { name: 'personnelAction3', label: 'Personnel Action 3', type: 'text' },
      { name: 'personnelAction3Desc', label: 'Personnel Action 3 Description', type: 'text' },
    ],
  },
];

// Helper function to get all field names
export const getAllFieldNames = () => {
  return formSections.flatMap(section => section.fields.map(field => field.name));
};

// Helper function to get a specific field configuration
export const getFieldConfig = (fieldName) => {
  for (const section of formSections) {
    const field = section.fields.find(f => f.name === fieldName);
    if (field) return field;
  }
  return undefined;
};

// Helper function to validate form data
export const validateFormData = (data) => {
  const errors = {};

  // Get all fields marked as required in the config
  formSections.forEach(section => {
    section.fields.forEach(field => {
      if (field.required && !data[field.name] && data[field.name] !== 0 && data[field.name] !== false) {
        errors[field.name] = `${field.label} is required`;
      }
    });
  });

  // Specific salary validation
  if (data.salaryAmount && isNaN(parseFloat(data.salaryAmount))) {
    errors.salaryAmount = 'Salary amount must be a valid number';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};