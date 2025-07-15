import {useState} from 'react';
import './Forms.css';

export default function Forms() {
  const [data, setData] = useState({ firstName: '',lastName: '',mobile: '', address: '', });

  const [submitData, setSubmitData] = useState(null);
  const [error, setError] = useState('');

  const changeValue = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const clickSubmit = () => {
    const { firstName, lastName, mobile, address } = data;

    if (!firstName || !lastName || !mobile || !address) {
      setError('Fill the Data');
      setSubmitData(null);
    } else {
      setError('');
      setSubmitData(data);
    }
  };

  return (
    <div className="container">
      <h2>Task 3</h2>

      <input type="text" name="firstName" placeholder="First Name" value={data.firstName}   onChange={changeValue} className="input" />
      <input  type="text"  name="lastName"  placeholder="Last Name"  value={data.lastName}  onChange={changeValue}  className="input" />
      <input type="tel" maxLength={10} name="mobile" placeholder="Mobile Number" value={data.mobile} onChange={changeValue} className="input"/>
      <textarea  name="address"  placeholder="Address"  value={data.address}  onChange={changeValue}  className="input"  rows={3} />

      <button onClick={clickSubmit} className="submit">Submit</button>

      {error && <p className="error">{error}</p>}

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

