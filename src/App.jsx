import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import Form from './Components/Form';
import './App.css';

const App = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      typ: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <div>
      <div
        className="position-fixed top-0 w-100 h-100 bg-dark"
        style={{
          background: "radial-gradient(circle at 0 0, rgba(255, 255, 255, 0.2) 1px, #00091d 1px)",
          backgroundSize: "20px 20px",
          zIndex: -2,
        }}
      ></div>

      <Navbar title="TextUtils" subTitle='"Simplifying Your Text Editing and Conversion Needs"' showAlert={showAlert} />
      <Alert alert={alert} />
      <Form heading="TextUtils App" showAlert={showAlert} />
    </div>
  );
};

export default App;
