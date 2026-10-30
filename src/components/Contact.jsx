import React, { useState } from 'react';
function Contact() {
  // 1. Using useState to track the form inputs
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // 2. Using useState to track validation errors
  const [errors, setErrors] = useState({});
  // 3. Using useState to track if the form was successfully submitted
  const [isSubmitted, setIsSubmitted] = useState(false);

  // This function updates the state whenever the user types something
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // This function runs when the user clicks the Submit button
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    
    let validationErrors = {};

    // 4. Validating empty inputs
    if (!formData.name.trim()) validationErrors.name = "Name is required.";
    if (!formData.email.trim()) validationErrors.email = "Email is required.";
    if (!formData.message.trim()) validationErrors.message = "Message is required.";

    // If there are errors, show them and stop the submission
    if (Object(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
    } else {
      // If there are no errors, show the success message and clear the form
      setErrors({});
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: 'darkblue', fontSize: '2.5rem' }}>Contact Us</h2>
      
      {/* Success Message Banner */}
      {isSubmitted && (
        <div style={{ backgroundColor: 'white', color: 'darkgreen', padding: '15px', borderRadius: '8px', marginBottom: '20px', border: '1px solid lightgreen' }}>
          <strong>Success!</strong> Thank you for your feedback. Your message has been sent.
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name:</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' }} 
          />
          {/* Error Message Display */}
          {errors.name && <span style={{ color: 'red', fontSize: '0.9rem', marginTop: '5px', display: 'block' }}>{errors.name}</span>}
        </div>

        {/* Email Input Group */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' }} 
          />
          {/* Error Message Display */}
          {errors.email && <span style={{ color: 'red', fontSize: '0.9rem', marginTop: '5px', display: 'block' }}>{errors.email}</span>}
        </div>

        {/* Message Input Group */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Message / Feedback:</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box', resize: 'vertical' }} 
          />
          {/* Error Message Display */}
          {errors.message && <span style={{ color: 'red', fontSize: '0.9rem', marginTop: '5px', display: 'block' }}>{errors.message}</span>}
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          style={{ padding: '12px 20px', backgroundColor: '#2980b9', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1.1rem', fontWeight: 'bold' }}
        >
          Submit
        </button>
        
      </form>
    </div>
  );
}

export default Contact;