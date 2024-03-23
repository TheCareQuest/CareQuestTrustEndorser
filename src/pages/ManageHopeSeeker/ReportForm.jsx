import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ReportForm.css";

const ReportForm = ({ hopeSeeker, onClose }) => {
  const [reportTitle, setReportTitle] = useState("");
  const [reportDescription, setReportDescription] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming you have a token stored in localStorage after user login
        },
        body: JSON.stringify({
          reportedTo: hopeSeeker._id,
          title: reportTitle,
          description: reportDescription,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit report');
      }

      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error submitting report:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="report-form-container"
    >
      <h3 className="report-form-header">Report Hope Seeker</h3>
      <label>Title:</label>
      <input
        type="text"
        value={reportTitle}
        onChange={(e) => setReportTitle(e.target.value)}
      />
      <label>Description:</label>
      <textarea
        value={reportDescription}
        onChange={(e) => setReportDescription(e.target.value)}
      ></textarea>
      <div className="report-form-buttons">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="button"
          onClick={handleSubmit}
        >
          Submit
        </motion.button>
        <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="button"
        onClick={onClose}
      >
        Cancel
      </motion.button>
      </div>
      {showConfirmation && (
        <p className="confirmation-message">
          Thanks for reporting! Admin will review it shortly.
        </p>
      )}
    </motion.div>
  );
};

export default ReportForm;
