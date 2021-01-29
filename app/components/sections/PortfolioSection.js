import axios from 'axios';
import { useEffect, useState } from 'react';

export default function PortfolioSection() {

    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchData = async() => {
        await axios.get('http://localhost:1337/projects')
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
            {/* <ul className="projects-container">
                {projects.map((project, key) => (
                    <li className="item" key={key}>{project.title}</li>
                ))}
            </ul> */}
            <div className="projects-container">
                <div className="card">
                    <div className="card-img">
                        <img src="/img/design.jpg"></img>
                    </div>
                    <div className="card-content">
                        <h2>Website</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/img/design.jpg"></img>
                    </div>
                    <div className="card-content">
                        <h2>Website</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}