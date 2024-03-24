import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ReportForm.css";

const ReportForm = ({ onClose, reportedTo }) => {
  const [reportTitle, setReportTitle] = useState("");
  const [reportDescription, setReportDescription] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      const reportData = {
        reportedTo: reportedTo,
        title: reportTitle,
        description: reportDescription
      };

      const response = await fetch('http://localhost:5000/api/reports', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reportData)
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
      setError("Error creating report. Please try again later.");
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
      {error && <p className="error-message">{error}</p>}
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
