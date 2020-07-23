import React from 'react';

import resumePDF from '../assets/images/resume.pdf';

function ResumePage(){

    return(
        <div className="container mt-2">
          <embed src={resumePDF} type="application/pdf" width="100%" height="800px" zoom="70" />
        </div>
        
    );

}

export default ResumePage;
