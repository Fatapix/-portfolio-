import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

export default function FullPage() {
    return (
        <ReactFullpage
        scrollingSpeed = {1000} /* Options here */
    
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>

            </ReactFullpage.Wrapper>
          );
        }}
      />
    )
}