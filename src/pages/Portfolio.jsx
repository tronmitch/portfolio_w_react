import React from "react";
import "../styles/style.css";

const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
};

function Portfolio({ projects }) {
  console.log(projects)
  return (
    <section style={styles.card}>
      {/* <h2 style={styles.heading}>Work</h2> */}
      <hr className="solid" />
      <div className="parent-img">
        {projects.map(( project )=> (
        <div key = {project.title}> 
        <h3>{project.title}</h3>
        {/* <section>{project.description } </section> */}
        <a href={project.url}>
          <img src={project.image} alt={`Project ${project.title}`} onError={(e) => 
            console.log('Error loading image:', e.target.src)} />
        </a>
        <a href={project.repo}>
          <p>Repo</p> 
        </a>
        </div>
        ))}
        

      </div>
    </section>
  );
}

export default Portfolio;