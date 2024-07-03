import React from 'react';
import { Button } from "@material-tailwind/react";
import cvFile from '../assets/Pranav_Mhargude.pdf';

function ConnectBTN() {
  const downloadCV = () => {
    console.log('Button clicked'); // Log to verify click event
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Pranav_Mhargude.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return ( 
    <div className="rounded-full z-50">
      <Button variant="outlined" onClick={downloadCV}>Connect Me</Button>
    </div>
  );
}

export default ConnectBTN;


