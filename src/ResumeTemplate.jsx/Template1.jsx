import { useLocation } from 'react-router-dom';
import { React,useState,useEffect} from 'react';
import html2canvas from 'html2canvas';
import jsPdf from 'jspdf';
 
import './Template1.css';
const Template1=()=>{
    const [isDownloading, setIsDownloading] = useState(false);
    useEffect(() => {
        if (isDownloading) {
            html2canvas(document.body).then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPdf();
                pdf.addImage(imgData, 'PNG', 0, 0);
                pdf.save("resume.pdf");
                setIsDownloading(false);
            });
        }
    }, [isDownloading]);
    const location = useLocation();
    const formData = location.state?.formData;
    return(
        <>
            {!isDownloading && <button onClick={()=>{setIsDownloading(true)}}>Download Resume</button>}
            {isDownloading ?<div>Loading...</div> :(<div>
                <header>
                    <div className="left">
                        <h1>{y?.personalInfo?.name}</h1>
                        <p>ADDRESS | E-mail | </p>
                        <a href="">linkedIn</a>
                    </div>
                </header>
                <div className="preview-image">
                        <img src="../assets/images/profile-image.jpg" alt="" id="image_dsp" />
                </div>
                <main>
                    <section id="education">
                        <h2>Education</h2>
                        <ul>
                            <li>Course, University</li>
                            <li>Intermediate, School - Date of completion</li>
                            <li>High School, School  - Date of completion</li>
                        </ul>
                    </section>
                    <section id="experience">
                        <h2>Internship/Training Experience</h2>
                        <ul>
                            <li>Training 1- Description</li>
                            <li>Training 2- Description</li>
                        </ul>
                    </section>
                    <section id="projects">
                        <h2>Projects</h2>
                        <ul>
                            <li>Project 1</li>
                            <li>Project 2</li>
                            <li>Project 3</li>
                        </ul>
                    </section>
                    <section id="skills">
                        <h2>Skills</h2>
                        <div className="skills-container">
                            <h3>Technical</h3>
                            <ul>
                                <li>xyz</li>
                                <li>xyz</li>
                                <li>xyz</li>
                                <li>xyz</li>
                            </ul>
                            <h3>Professional</h3>
                            <ul>
                                <li>xyz </li>
                                <li>xyz</li>
                                <li>xyz</li>
                            </ul>
                        </div>
                    </section>
                    <section id="certifications">
                        <h2>Extra/Co-Curricular Activities</h2>
                        <ul>
                            <li>no.1</li>
                            <li>no.2</li>
                            <li>no.3</li>
                            <li>no.4</li>
                        </ul>
                    </section>
                    <section id="declare">
                        <h2>Declaration</h2>
                        <p>I hereby declare that all the above mentioned information is true and correct to the best of my knowledge.</p>
                    </section>
                </main>
            </div>)}
        </>
    )
}
export default Template1;

 // Import the CSS file

        

