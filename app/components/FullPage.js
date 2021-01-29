import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

export default function FullPage({ children }) {
    return (
        <ReactFullpage
    
        autoScrolling = {true}
        scrollHorizontally = {true}
        navigation = {true}
        anchors = {['home-section', 'about-section', 'portfolio-section', 'contacts-section']}

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
                {children}
            </ReactFullpage.Wrapper>
          );
        }}
      />
    )
}