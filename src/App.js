import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const PROVINCES = [
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Nova Scotia',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
];

const initialForm = {
  email: '',
  fullName: '',
  address: '',
  address2: '',
  city: '',
  province: '',
  postalCode: '',
  agree: false,
};

function App() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(null);

  // One handler for every input: uses the input's name to update state
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop the page from reloading
    setSubmitted(formData);
  };

  return (
    <div className="container my-4">
      <div className="form-box p-3">
        <h1 className="text-center mb-3">Data Entry Form</h1>

        <form onSubmit={handleSubmit} className="text-center">
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email"
                placeholder="Enter email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="fullName" className="form-label">Name</label>
              <input type="text" className="form-control" id="fullName" name="fullName"
                placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input type="text" className="form-control" id="address" name="address"
              placeholder="1234 Main St" value={formData.address} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="address2" className="form-label">Address 2</label>
            <input type="text" className="form-control" id="address2" name="address2"
              placeholder="Apartment, studio, or floor" value={formData.address2} onChange={handleChange} />
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="city" className="form-label">City</label>
              <input type="text" className="form-control" id="city" name="city"
                value={formData.city} onChange={handleChange} />
            </div>
            <div className="col-md-4">
              <label htmlFor="province" className="form-label">Province</label>
              <select className="form-select" id="province" name="province"
                value={formData.province} onChange={handleChange}>
                <option value="">Choose...</option>
                {PROVINCES.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="postalCode" className="form-label">Postal Code</label>
              <input type="text" className="form-control" id="postalCode" name="postalCode"
                value={formData.postalCode} onChange={handleChange} />
            </div>
          </div>

          <div className="form-check d-inline-block mb-3">
            <input type="checkbox" className="form-check-input" id="agree" name="agree"
              checked={formData.agree} onChange={handleChange} />
            <label htmlFor="agree" className="form-check-label">Agree Terms &amp; Condition?</label>
          </div>

          <div>
            <button type="submit" className="btn btn-success">Submit</button>
          </div>
        </form>
      </div>

      {/* Part II: show the submitted data below the form */}
      {submitted && (
        <div className="output-box mt-4 p-3">
          <table className="table mb-0">
            <tbody>
              <tr><th>Email:</th><td>{submitted.email}</td></tr>
              <tr><th>Full Name:</th><td>{submitted.fullName}</td></tr>
              <tr>
                <th>Address:</th>
                <td>{submitted.address}{submitted.address2 && `, ${submitted.address2}`}</td>
              </tr>
              <tr><th>City:</th><td>{submitted.city}</td></tr>
              <tr><th>Province:</th><td>{submitted.province}</td></tr>
              <tr><th>Postal Code:</th><td>{submitted.postalCode}</td></tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
