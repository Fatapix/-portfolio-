import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

export default function FullPage() {
    return (
        <ReactFullpage
    
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
                <section className="section home-section">
                    <div className="background-filter"></div>
                    <span className="tags top-tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span> 

                    <div className="content">
                        <div className="container">
                                <div className="subtitle">Noha Khirat</div>
                                <div className="title">
                                    Développeur Web
                                </div>
                                <p>Full-Stack - Typescript NodeJS</p>
                        </div>
                    </div>

                    <span className="tags bottom-tags">
                        &nbsp;&nbsp;&nbsp;&lt;/body&gt;
                        <br/>
                        &lt;/html&gt;
                    </span>
                    <div className="scroll-icon"></div>
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