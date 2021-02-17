import React from 'react';

import { Document } from 'react-pdf';

const Resume = () => {
  return (
    <div>
      <Document file="../documents/EricKimoSilvaSoftwareCV.pdf" />
    </div>
  )
}

export default Resume;