import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { 
  FaCar, 
  FaSprayCan, 
  FaBroom, 
  FaCouch 
} from 'react-icons/fa';

const CarWashForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [selectedDate, setSelectedDate] = useState(null);
  const [estimatedPrice, setEstimatedPrice] = useState(null);

  // Watch form values for real-time updates
  const washPackage = watch('washPackage');
  const vehicleType = watch('vehicleType');
  const extras = watch('extras', []);

  // Ensure extras is always an array
  const safeExtras = Array.isArray(extras) ? extras : [];

  // Define pricing structures
  const basePrices = {
    basic: { sedan: 20, suv: 25, truck: 30 },
    deluxe: { sedan: 30, suv: 35, truck: 40 },
    premium: { sedan: 40, suv: 45, truck: 50 },
  };

  const extrasPriceMap = {
    'wheel-cleaning': 5,
    'tire-shine': 5,
    'hand-wax': 10,
    'interior-vacuum': 10,
    'leather-conditioning': 15,
    'engine-cleaning': 20,
  };

  // Pricing logic for car wash
  useEffect(() => {
    if (washPackage && vehicleType) {
      const basePrice = basePrices[washPackage][vehicleType];
      const extrasCost = safeExtras.reduce((sum, extra) => sum + (extrasPriceMap[extra] || 0), 0);
      const totalPrice = basePrice + extrasCost;
      setEstimatedPrice(totalPrice.toFixed(2));
    } else {
      setEstimatedPrice(null);
    }
  }, [washPackage, vehicleType, safeExtras]);

  const onSubmit = (data) => {
    if (!selectedDate) {
      alert('Please select a date and time.');
      return;
    }
    console.log('Booking Data:', { washPackage, vehicleType, extras: safeExtras, date: selectedDate, estimatedPrice });
    alert('Booking submitted successfully! We’ll contact you to confirm.');
  };

  // Define form sections
  const sections = [
    {
      title: "Service Details",
      fields: [
        {
          type: 'select',
          label: 'Wash Package',
          name: 'washPackage',
          options: [
            { value: '', label: 'Select a package' },
            { value: 'basic', label: 'Basic Wash' },
            { value: 'deluxe', label: 'Deluxe Wash' },
            { value: 'premium', label: 'Premium Wash' },
          ],
          validation: { required: 'Please select a wash package' },
        },
        {
          type: 'select',
          label: 'Vehicle Type',
          name: 'vehicleType',
          options: [
            { value: '', label: 'Select vehicle type' },
            { value: 'sedan', label: 'Sedan' },
            { value: 'suv', label: 'SUV' },
            { value: 'truck', label: 'Truck' },
          ],
          validation: { required: 'Please select a vehicle type' },
        },
      ],
    },
    {
      title: "Extras",
      fields: [
        {
          type: 'checkbox-group-grid',
          label: 'Add-Ons (Optional)',
          name: 'extras',
          options: [
            { value: 'wheel-cleaning', label: 'Wheel Cleaning', price: 5, icon: <FaCar /> },
            { value: 'tire-shine', label: 'Tire Shine', price: 5, icon: <FaCar /> },
            { value: 'hand-wax', label: 'Hand Wax', price: 10, icon: <FaSprayCan /> },
            { value: 'interior-vacuum', label: 'Interior Vacuum', price: 10, icon: <FaBroom /> },
            { value: 'leather-conditioning', label: 'Leather Conditioning', price: 15, icon: <FaCouch /> },
            { value: 'engine-cleaning', label: 'Engine Cleaning', price: 20, icon: <FaCar /> },
          ],
        },
      ],
    },
    {
      title: "Schedule",
      fields: [
        {
          type: 'date',
          label: 'Date & Time',
          name: 'date',
          value: selectedDate,
          onChange: setSelectedDate,
          required: true,
        },
      ],
    },
    {
      title: "Your Details",
      fields: [
        {
          type: 'text',
          label: 'Full Name',
          name: 'name',
          placeholder: 'Enter your full name',
          validation: { required: 'Full name is required' },
        },
        {
          type: 'email',
          label: 'Email',
          name: 'email',
          placeholder: 'Enter your email',
          validation: {
            required: 'Email is required',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' },
          },
        },
        {
          type: 'tel',
          label: 'Phone Number',
          name: 'phone',
          placeholder: 'Enter your phone number',
          validation: {
            required: 'Phone number is required',
            pattern: { value: /^[0-9]{10}$/, message: 'Invalid phone number (10 digits required)' },
          },
        },
        {
          type: 'text',
          label: 'Address',
          name: 'address',
          placeholder: 'Enter your street address',
          validation: { required: 'Address is required' },
        },
        {
          type: 'text',
          label: 'Apt/Suite',
          name: 'aptSuite',
          placeholder: 'Enter your apartment or suite number (optional)',
        },
        {
          type: 'text',
          label: 'City',
          name: 'city',
          placeholder: 'Enter your city',
          validation: { required: 'City is required' },
        },
        {
          type: 'select',
          label: 'State',
          name: 'state',
          options: [
            { value: '', label: 'Select a state' },
            { value: 'IL', label: 'Illinois' },
            { value: 'IN', label: 'Indiana' },
            { value: 'WI', label: 'Wisconsin' },
          ],
          validation: { required: 'State is required' },
        },
        {
          type: 'text',
          label: 'Zip Code',
          name: 'zipCode',
          placeholder: 'Enter your zip code',
          validation: {
            required: 'Zip code is required',
            pattern: { value: /^[0-9]{5}$/, message: 'Invalid zip code (5 digits required)' },
          },
        },
      ],
    },
  ];

  return (
    <section className="book-now-section">
      <h2 className="section-title">Car Wash Booking</h2>
      <p className="section-description">
        Book your car wash service with us today!
      </p>
      <div className="book-now-container">
        <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
          {sections.map((section, index) => (
            <div key={index} className="form-section">
              <h3 className="section-subtitle">{section.title}</h3>
              {section.fields.map((field, fieldIndex) => (
                <div key={fieldIndex} className="form-group">
                  <label htmlFor={field.name}>{field.label}</label>
                  {field.type === 'select' && (
                    <select id={field.name} {...register(field.name, field.validation)}>
                      {field.options.map((option, optIndex) => (
                        <option key={optIndex} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  )}
                  {field.type === 'text' && (
                    <input
                      type="text"
                      id={field.name}
                      {...register(field.name, field.validation)}
                      placeholder={field.placeholder}
                    />
                  )}
                  {field.type === 'email' && (
                    <input
                      type="email"
                      id={field.name}
                      {...register(field.name, field.validation)}
                      placeholder={field.placeholder}
                    />
                  )}
                  {field.type === 'tel' && (
                    <input
                      type="tel"
                      id={field.name}
                      {...register(field.name, field.validation)}
                      placeholder={field.placeholder}
                    />
                  )}
                  {field.type === 'date' && (
                    <DatePicker
                      selected={field.value}
                      onChange={field.onChange}
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={60}
                      dateFormat="MMMM d, yyyy h:mm aa"
                      placeholderText="Select date and time"
                      className="date-picker"
                      required={field.required}
                    />
                  )}
                  {field.type === 'checkbox-group-grid' && (
                    <div className="checkbox-group-grid">
                      {field.options.map((option, optIndex) => (
                        <label
                          key={optIndex}
                          className={`checkbox-card ${safeExtras.includes(option.value) ? 'selected' : ''}`}
                        >
                          <input
                            type="checkbox"
                            value={option.value}
                            {...register(field.name)}
                          />
                          <div className="checkbox-card-content">
                            <span className="checkbox-card-icon">{option.icon}</span>
                            <span className="checkbox-card-label">{option.label}</span>
                            <span className="checkbox-card-price">${option.price}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  )}
                  {errors[field.name] && <span className="error">{errors[field.name].message}</span>}
                </div>
              ))}
            </div>
          ))}
          <button type="submit" className="submit-button">Submit</button>
        </form>

        <div className="shopping-cart">
          <h3 className="cart-title">Your Booking Summary</h3>
          <div className="cart-items">
            {washPackage && (
              <div className="cart-item">
                <span className="item-label">Wash Package:</span>
                <span className="item-value">
                  {washPackage.charAt(0).toUpperCase() + washPackage.slice(1)} Wash
                </span>
              </div>
            )}
            {vehicleType && (
              <div className="cart-item">
                <span className="item-label">Vehicle Type:</span>
                <span className="item-value">
                  {vehicleType.charAt(0).toUpperCase() + vehicleType.slice(1)}
                </span>
              </div>
            )}
            {safeExtras.length > 0 && (
              <div className="cart-item">
                <span className="item-label">Extras:</span>
                <span className="item-value">
                  {safeExtras
                    .map((extra) =>
                      extra.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                    )
                    .join(', ')}
                </span>
              </div>
            )}
            {selectedDate && (
              <div className="cart-item">
                <span className="item-label">Date & Time:</span>
                <span className="item-value">
                  {selectedDate.toLocaleString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                  })}
                </span>
              </div>
            )}
          </div>
          {estimatedPrice && (
            <div className="cart-total">
              <span className="total-label">Estimated Total:</span>
              <span className="total-value">${estimatedPrice}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CarWashForm;