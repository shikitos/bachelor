import React, { useState } from 'react';

import styles from './ComplexForms.module.scss';

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  address: {
    street: string;
    city: string;
    zip: string;
  };
  hobbies: string[];
}

export const ComplexForms = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: { street: '', city: '', zip: '' },
    hobbies: [''],
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNestedChange = (
    field: string,
    subfield: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        [subfield]: value,
      },
    }));
  };

  const handleHobbyChange = (index: number, value: string) => {
    setFormData((prev) => {
      const updatedHobbies = [...prev.hobbies];
      updatedHobbies[index] = value;
      return { ...prev, hobbies: updatedHobbies };
    });
  };

  const addHobby = () => {
    setFormData((prev) => ({
      ...prev,
      hobbies: [...prev.hobbies, ''],
    }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = 'Valid email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.address.street) newErrors.street = 'Street is required';
    if (!formData.address.city) newErrors.city = 'City is required';
    if (!formData.address.zip || isNaN(Number(formData.address.zip)))
      newErrors.zip = 'Valid ZIP code is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Data:', formData);
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Complex Forms</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Username */}
        <label>
          Username:
          <input
            type="text"
            value={formData.username}
            onChange={(e) => handleInputChange('username', e.target.value)}
            className={errors.username ? styles.errorInput : ''}
          />
          {errors.username && (
            <p className={styles.errorText}>{errors.username}</p>
          )}
        </label>

        {/* Email */}
        <label>
          Email:
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={errors.email ? styles.errorInput : ''}
          />
          {errors.email && <p className={styles.errorText}>{errors.email}</p>}
        </label>

        {/* Password */}
        <label>
          Password:
          <input
            type="password"
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            className={errors.password ? styles.errorInput : ''}
          />
          {errors.password && (
            <p className={styles.errorText}>{errors.password}</p>
          )}
        </label>

        {/* Confirm Password */}
        <label>
          Confirm Password:
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) =>
              handleInputChange('confirmPassword', e.target.value)
            }
            className={errors.confirmPassword ? styles.errorInput : ''}
          />
          {errors.confirmPassword && (
            <p className={styles.errorText}>{errors.confirmPassword}</p>
          )}
        </label>

        {/* Address */}
        <fieldset className={styles.fieldset}>
          <legend>Address</legend>
          <label>
            Street:
            <input
              type="text"
              value={formData.address.street}
              onChange={(e) =>
                handleNestedChange('address', 'street', e.target.value)
              }
              className={errors.street ? styles.errorInput : ''}
            />
            {errors.street && (
              <p className={styles.errorText}>{errors.street}</p>
            )}
          </label>
          <label>
            City:
            <input
              type="text"
              value={formData.address.city}
              onChange={(e) =>
                handleNestedChange('address', 'city', e.target.value)
              }
              className={errors.city ? styles.errorInput : ''}
            />
            {errors.city && <p className={styles.errorText}>{errors.city}</p>}
          </label>
          <label>
            ZIP:
            <input
              type="text"
              value={formData.address.zip}
              onChange={(e) =>
                handleNestedChange('address', 'zip', e.target.value)
              }
              className={errors.zip ? styles.errorInput : ''}
            />
            {errors.zip && <p className={styles.errorText}>{errors.zip}</p>}
          </label>
        </fieldset>

        {/* Hobbies */}
        <fieldset className={styles.fieldset}>
          <legend>Hobbies</legend>
          {formData.hobbies.map((hobby, index) => (
            <label key={index}>
              Hobby {index + 1}:
              <input
                type="text"
                value={hobby}
                onChange={(e) => handleHobbyChange(index, e.target.value)}
              />
            </label>
          ))}
          <button type="button" onClick={addHobby} className={styles.addButton}>
            Add Hobby
          </button>
        </fieldset>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};
