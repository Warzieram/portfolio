/* eslint react/prop-types: 0 */
import { Link } from 'react-router-dom'
function ProjectCard(props){
  const link = "/projects/" + props.slug;
  return (
    <div className="card">
      <h2> {props.title} </h2>
      <p> {props.description} </p>
      <Link to={link}> Voir + </Link>
    </div>
  )
}

export default ProjectCard
