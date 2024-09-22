import React,{ useState } from "react";
const Personalinfo=({formData,setFormData})=>{
    const [profileImage, setProfileImage] = useState(null);

    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
            setProfileImage(imageFile);
            setFormData(prevState => ({ ...prevState, profileimg: reader.result }));
        };
    
        reader.readAsDataURL(imageFile);
    };
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
            <h3>Personal Information</h3>
            <div className="image-container">
                {profileImage && (
                    <img
                        src={URL.createObjectURL(profileImage)}
                        alt="Profile"
                        style={{ maxWidth: '150px', borderRadius: '10%', height:'20%'}}
                    />
                )}
            </div>
                <label htmlFor="resumeprofile">Resume Profile :</label>
                <input type="file" accept="image/*" onChange={handleImageChange} id="resumeprofile"/><br/><br/>
                <label htmlFor="name">Name :</label>
                <input type="text" name="personalInfo.name" id="name" onChange={handleChange}/><br/><br/>
                <label htmlFor="neararea">Near area: </label>
                <input type="text" name="personalInfo.nearArea" id="neararea" onChange={handleChange}/>
                <label htmlFor="city">City :</label>
                <input type="text" name="personalInfo.city" id="city" onChange={handleChange}/><br/><br/>
                <label htmlFor="email">Email :</label>
                <input type="email" name="personalInfo.email" id="email" onChange={handleChange}/>
                <label htmlFor="mobileno">Mobile Number :</label>
                <input type="text" name="personalInfo.mobileNo" id="mobileno" onChange={handleChange}/><br/><br/>
            </>
    )
}
export default Personalinfo;