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
            <ul>
                {projects.map((project, key) => (
                    <li key={key}>{project.title}</li>
                ))}
            </ul>
        </section>
    )
}