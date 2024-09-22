const Education=({formData,setFormData})=>{
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
    return (
        <>
            <h3>Education</h3>
            <h5>10th grade and Info</h5>
            <label>
                School name :
                <input type="text"  name="education.tenthGrade.schoolName" id="schoolname_10" onChange={handleChange}/>
            </label>
            <label>
                Marks :
                <input type="text" onChange={handleChange} name="education.tenthGrade.marks" id="marks_10"/>
            </label>
            <label>
                Passing year :
                <input type="text" onChange={handleChange} name="education.tenthGrade.passingYear" id="passingyear_10"/>
            </label>
            <h5>12th grade and Info</h5>
            <label>
                School name :
                <input type="text" onChange={handleChange} name="education.twelfthGrade.schoolName" id="schoolname_12"/>
            </label>
            <label>
                Marks :
                <input type="text" onChange={handleChange} name="education.twelfthGrade.marks" id="marks_12"/>
            </label>
            <label>
                Passing year :
                <input type="text" onChange={handleChange} name="education.twelfthGrade.passingYear" id="passingyear_12"/>
            </label>
            <h5>College grade and Info</h5>
            <label>
                College name :
                <input type="text" onChange={handleChange} name="education.college.collegeName" id="collegename"/>
            </label>
            <label>
                Marks :
                <input type="text" onChange={handleChange} name="education.college.marks" id="marks_college"/>
            </label>
            <label>
                Passing year :
                <input type="text" onChange={handleChange} name="education.college.passingYear" id="passingyear_college"/>
            </label>
        </>
    )
}
export default Education;