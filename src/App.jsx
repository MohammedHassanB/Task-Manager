import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";
function App() {
  const[projectState,setProjectState]=useState(
    {
      selectedProjectId:undefined,
      projects:[],
      tasks:[],
    });

    function handelAddTask(text)
    {
      setProjectState((previousState)=>{
        const taskId= Math.random();
        const newTask={
         text:text,
         id:taskId,
         projectId:previousState.selectedProjectId,
        };
         return{
 
           ...previousState,
           tasks:[newTask,...previousState.tasks ],
         }
       });
    }

    function handelDeleteTask(id)
    {
      setProjectState(previousState=>{
        return {
          ...previousState,
          tasks:previousState.tasks.filter(task=>task.id!==id),
        };
      });

    }
    function handelAddProject()
    {
      setProjectState(previousState=>{
        return {
          ...previousState,
          selectedProjectId:null,  
        }
      });
    }


    function handelCancelAddProject()
    {
      setProjectState(previousState=>{
        return {
          ...previousState,
          selectedProjectId:undefined,  
        }
      });
    }

    function handelProjectData({...projectData})
    {
      setProjectState((previousState)=>{
       const newProject={
        ...projectData,
        id: Math.random(),
       };
        return{

          ...previousState,
          projects: [...previousState.projects ,newProject],
          selectedProjectId:undefined,
        }
      });
    }

    function handelSelectProject(id)
    {
      setProjectState(previousState=>{
        return {
          ...previousState,
          selectedProjectId:id,  
        };
      });
    }

    function handelDeleteProject()
    {
      setProjectState(previousState=>{
        return {
          ...previousState,
          selectedProjectId:undefined,
          projects:previousState.projects.filter(project=>project.id!==previousState.selectedProjectId),
        };
      });
    }

   
  const selectedProject=projectState.projects.find(project=>project.id === projectState.selectedProjectId);

    let content=<SelectedProject  project={selectedProject} onDelete={handelDeleteProject} onAddTask={handelAddTask} onDeleteTask={handelDeleteTask}
    tasks={projectState.tasks}/>;
    if(projectState.selectedProjectId === null)
    {
      content= <NewProject onAdd={handelProjectData} onCancel={handelCancelAddProject} />
    }
    else if (projectState.selectedProjectId === undefined)
    {
   content= <NoProject onAddingProject={handelAddProject} />;
    }
  return (
   <main className="h-screen my-8 flex gap-8">
      <Sidebar onSelectProject={handelSelectProject}  onAddingProject={handelAddProject} projects={projectState.projects}
      selectedProjectId={projectState.selectedProjectId}/>
      {content}
  </main>
  );
}

export default App;

