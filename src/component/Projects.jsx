const Projects = ({formData,setFormData}) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => {
            let newState = JSON.parse(JSON.stringify(prevState)); // create a deep copy
            let keys = name.split('.'); // split the name by '.' to get nested keys
            let lastKey = keys.pop(); // the last key is the one we'll assign the value to
            let nestedObject = keys.reduce((obj, key) => obj[key], newState); // get the nested object where we'll assign the value
            nestedObject[lastKey] = value; // assign the value
            return newState;
        });
    };
    // const handleAddProject = () => {
    //     setFormData(prevState => ({
    //         ...prevState,
    //         projects: [...prevState.projects, {
    //             projectTitle: '',
    //             projectDescription: '',
    //             technologiesUsed: '',
    //             roleInProject: ''
    //         }]
    //     }));
    // };
    
    return (
        <>
             <h3>Projects</h3>
                    {formData.projects.map((project, index) => (
                        <div key={index}>
                            <label htmlFor=""><b> Project Title</b> :
                                <input type="text" name={`projects.${index}.projectTitle`} onChange={(e) => handleChange(e, index)}/>
                            </label><br/><br/>
                            <label htmlFor="">
                                Project description :
                                <textarea name={`projects.${index}.projectDescription`} onChange={(e) => handleChange(e, index)}></textarea>
                            </label><br/><br/>
                            <label htmlFor="">
                                Technologies Used :
                                <textarea name={`projects.${index}.technologiesUsed`} onChange={(e) => handleChange(e, index)}></textarea>
                            </label><br/><br/>
                            <label>
                                Role in Project :
                                <input type="text" name={`projects.${index}.roleInProject`} id="project_role" onChange={(e) => handleChange(e, index)}/>
                            </label>
                            <br/><br/>
                        </div>
                    ))}
                    {/* <button type="button" onClick={handleAddProject}>Add Project</button> */}
        </>
    )
}
export default Projects;