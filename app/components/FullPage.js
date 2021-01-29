import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

export default function FullPage() {
    return (
        <ReactFullpage
    
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
                <section className="section home-section">
                    <h1>Home</h1>
                </section>
                <section className="section about-section">
                    <h1>About</h1>
                </section>
                <section className="section portfolio-section">
                    <h1>Portfolio</h1>
                </section>
                <section className="section contacts-section">
                    <h1>Contacts</h1>
                </section>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    )
}