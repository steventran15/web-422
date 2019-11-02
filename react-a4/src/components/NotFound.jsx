import React from 'react';

import MainContainer from "./MainContainer";

const NotFound = () => {
    return (  
        <div>
        <div className="container-fluid">
          <div className="row">
            <MainContainer>
              <h1 className="page-header"><b>Not Found</b></h1>
                    <span>Page Not Found</span>
            </MainContainer>
          </div>
        </div>
      </div>

        
    );
}
 
export default NotFound;