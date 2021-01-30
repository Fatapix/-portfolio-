import axios from 'axios';
import { useEffect, useState } from 'react';
import Tilt from 'react-tilt';

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
                                    {project.content}
                                </p>
                            </div>
                        </div>
                    </Tilt>
                ))}
            </div>
        </section>
    )
}