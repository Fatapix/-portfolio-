import axios from 'axios';
import { useEffect, useState } from 'react';
import Tilt from 'react-tilt';

import PopUp from '../PopUp';

export default function PortfolioSection() {
    const serverAddresse = "http://localhost:1337"

    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchData = async() => {
        await axios.get(serverAddresse +'/projects')
            .then(res => {
                setError(false)
                setProjects(prevState => [...prevState, ...res.data])
            })
            .catch(() => {
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    function truncate(str, n, useWordBoundary){
        if(str.length <= n) { return str; }
        const subString = str.substr(0, n-1)
        return (useWordBoundary 
          ? subString.substr(0, subString.lastIndexOf(" ")) 
          : subString) + "...";
      };

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section className="section portfolio-section">
            <div className="projects-container">
                {projects.map((project, key) => (
                    <Tilt className="tilt" options={{ max : 35 }}>
                        <div className="card">
                            <div className="card-img">
                                <img src={serverAddresse + project.screen.url}></img>
                            </div>
                            <div className="card-content">
                                <h2>{project.title}</h2>
                                <p>
                                    {truncate(project.content, 80, true)}
                                </p>
                                <a>En savoir plus...</a>
                            </div>
                        </div>
                    </Tilt>
                ))}
            </div>
            {/* <PopUp data={projects} /> */}
        </section>
    )
}