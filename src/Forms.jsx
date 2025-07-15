import { useState } from 'react';
import './Forms.css';

export default function Forms() {
  const [data, setData] = useState({ firstName: '', lastName: '', mobile: '', address: '' });
  const [submitData, setSubmitData] = useState(null);
  const [errors, setErrors] = useState({});

  const changeValue = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validate = () => {
    const newErrors = {};
    const mobileRegex = /^[0-9]{10}$/;

    if (!data.firstName){ newErrors.firstName = 'Enter the first name'};
    if (!data.lastName) {newErrors.lastName = 'Enter the last name'};
    if (!data.mobile) {newErrors.mobile = 'Enter the mobile number'}
    else if (!mobileRegex.test(data.mobile)) {newErrors.mobile = 'Enter a valid 10-digit mobile number'};
    if (!data.address) {newErrors.address = 'Enter the address'};

    return newErrors;
  };

  const clickSubmit = () => {
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitData(null);
    } else {
      setErrors({});
      setSubmitData(data);
    }
  };

  return (
    <div className="container">
      <h2>Task 3</h2>

      <input type="text" name="firstName" placeholder="First Name" value={data.firstName} onChange={changeValue} className="input"/>
      {errors.firstName && <p className="error">{errors.firstName}</p>}
      <input type="text" name="lastName" placeholder="Last Name" value={data.lastName} onChange={changeValue} className="input" />
      {errors.lastName && <p className="error">{errors.lastName}</p>}
      <input type="tel" name="mobile" maxLength={10} placeholder="Mobile Number" value={data.mobile} onChange={changeValue} className="input"/>
      {errors.mobile && <p className="error">{errors.mobile}</p>}
      <textarea name="address" placeholder="Address" value={data.address} onChange={changeValue} className="input" rows={3}/>
      {errors.address && <p className="error">{errors.address}</p>}

      <button onClick={clickSubmit} className="submit">Submit</button>

      {submitData && (
        <div className="output">
          <p>First Name: {submitData.firstName}</p>
          <p>Last Name: {submitData.lastName}</p>
          <p>Mobile No: {submitData.mobile}</p>
          <p>Address: {submitData.address}</p>
        </div>
      )}
    </div>
  );
}
