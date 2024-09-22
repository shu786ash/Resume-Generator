import Education from "./component/Education";
import Personalinfo from "./component/Personalinfo";
import Experience from "./component/Experience";
import Projects from "./component/Projects";
import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export const Resumeform=()=>{
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        personalInfo: {
            profileImage: null,
            name: '',
            nearArea: '',
            city: '',
            email: '',
            mobileNo: ''
        },
        education: {
            tenthGrade: {
                schoolName: '',
                marks: '',
                passingYear: ''
            },
            twelfthGrade: {
                schoolName: '',
                marks: '',
                passingYear: ''
            },
            college: {
                collegeName: '',
                marks: '',
                passingYear: ''
            }
        },
        experience: {
            organizationName: '',
            programName: '',
            roleAchievement: '',
            projectsInInternship: ''
        },
        projects: [{
            projectTitle: '',
            projectDescription: '',
            technologiesUsed: '',
            roleInProject: ''
        }]
    });
    
        const handleSubmit =async () => {
            const checkEmptyFields = (obj) => {
                for (let key in obj) {
                    if (typeof obj[key] === 'object' && obj[key] !== null) {
                        if (Array.isArray(obj[key])) {
                            for (let i = 0; i < obj[key].length; i++) {
                                checkEmptyFields(obj[key][i]);
                            }
                        } else {
                            checkEmptyFields(obj[key]);
                        }
                    } else if (obj[key] === '') {
                        alert(`Please fill in the ${key} field.`);
                        return false;
                    }
                }
                return true;
            };
            if (!checkEmptyFields(formData)) {
                return;
            }
            try {
                const response = await axios.post('http://localhost:3000/createresume', formData);
                console.log(response.data);
            } catch (error) {
                console.error('Error in creating resume:', error);
            }
            const template=localStorage.getItem('selectedTemplate');
            navigate('/template'+`${template}`,{formData:formData})
        };
    return (
        <>
            <Personalinfo formData={formData} setFormData={setFormData}/>
            <Education formData={formData} setFormData={setFormData}/>
            <Experience formData={formData} setFormData={setFormData}/>
            <Projects formData={formData} setFormData={setFormData}/>
            <button type="button" onClick={handleSubmit}>Create Resume</button>
        </>
    )
}
