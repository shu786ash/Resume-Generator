const Experience=({formData,setFormData})=>{
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => {
            let newState = JSON.parse(JSON.stringify(prevState)); // create a deep copy
            let keys = name.split('.'); // split the name by '.' to get nested keys
            let lastKey = keys.pop(); // the last key is the one we'll assign the value to
            let nestedObject=keys.reduce((obj,key)=>obj[key],newState);
            nestedObject[lastKey] = value; // assign the value
            return newState;
        });
    };
    return (
        <>
            <h3>Intership and Experience</h3>
            <label>
                Organization Name:
                <input type="text" name="experience.organizationName" id="organization" onChange={handleChange}/>
            </label>
            <label >
                Program Name :
                <input type="text" name="experience.programName" id="programname" onChange={handleChange}/>
            </label><br/><br/>
            <label>Role and Acheivement :
                <textarea name="experience.roleAchievement" id="" cols="60" rows="5" onChange={handleChange}></textarea>
            </label><br/><br/>
            <label htmlFor="">Projects in Intership :
                <input type="text" name="experience.projectsInInternship" id="projectsname" onChange={handleChange}/>
            </label>
            
        </>
    )
}
export default Experience;