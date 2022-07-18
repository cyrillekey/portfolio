import React from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header'
import Introduction from '../Components/Introduction';
import ProjectDesc from '../Components/ProjectDesc';
import { projects } from '../constants/projects';

const SingleProject = () => {
  const params = useParams();
  const [project,setProject ]= React.useState();
  React.useEffect(()=>{
    let id = params.id;
  
    setProject(projects[id]);
  },[]);
  return (
    <>
    <Header
    />
    <Introduction
    title={project?.name ?? ''}
    link={project?.src ?? ''}
    cta="Live Link"
    key={project.id}
    />
    <ProjectDesc project={project}/>
    <Footer/>
    </>
  )
}

export default SingleProject