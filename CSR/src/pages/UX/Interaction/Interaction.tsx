import React, { useState } from 'react';

import styles from './Interaction.module.scss';

export const Interaction = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmissionStatus(null);

    // Simulating an async form submission
    setTimeout(() => {
      setLoading(false);
      setSubmissionStatus('Form submitted successfully!');
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <h1>UX & Interaction Design</h1>
      <p>
        Explore smooth interactions with dynamic feedback for form submissions
        and button clicks.
      </p>

      <div className={styles.buttons}>
        <button
          onClick={() => alert('Button clicked!')}
          className={`${styles.button} ${styles.interactiveButton}`}
        >
          Fancy Button Click
        </button>
      </div>

      <div className={styles.formContainer}>
        <h2>Interactive Form</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            className={styles.input}
          />
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className={styles.input}
          />
          <button
            type="submit"
            disabled={loading}
            className={`${styles.button} ${styles.submitButton}`}
          >
            {loading ? 'Submitting...' : 'Submit Form'}
          </button>
        </form>
        {submissionStatus && (
          <p className={styles.status}>{submissionStatus}</p>
        )}
      </div>
    </div>
  );
};
