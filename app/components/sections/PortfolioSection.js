import { useEffect, useState } from 'react';
import Tilt from 'react-tilt';

import PopUp from '../PopUp';

export default function PortfolioSection({ data }) {

    const { API_URL } = process.env
    const projects = data

    function truncate(str, n, useWordBoundary){
        if(str.length <= n) { return str; }

        const subString = str.substr(0, n-1)
        
        return (useWordBoundary 
          ? subString.substr(0, subString.lastIndexOf(" ")) 
          : subString) + "..."
    }

    function openPopUp(data) {
        console.log(data)
    }

    return (
        <section className="section portfolio-section">
            <div className="projects-container">
                {projects.map((project) => (
                    <Tilt className="tilt" options={{ max : 35 }} key={project.id}>
                        <div className="card">
                            <div className="card-img">
                                <img src={API_URL + project.screen.url}></img>
                            </div>
                            <div className="card-content">
                                <h2>{project.title}</h2>
                                <p>
                                    {truncate(project.content, 80, true)}
                                </p>
                                <a onClick={() => openPopUp(project)}>En savoir plus...</a>
                            </div>
                        </div>
                    </Tilt>
                ))}
            </div>
        </section>
    )
}