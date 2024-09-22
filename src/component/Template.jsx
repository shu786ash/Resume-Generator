import { useNavigate } from 'react-router-dom';
import '../Template.css'
const Template=()=>{
    const navigate=useNavigate();
    const navigateResume=(templateKey)=>{
        localStorage.setItem('selectedTemplate', templateKey);
        navigate('/resumeform');
    }
    return (
        <>
        <div className="hero-header">
            <h2 className=''>Amazing Templates</h2>
            <div className="process-header">
                <p><button className='free-btn'>1</button>Choose One</p>
                
                <p><button className="free-btn">2 </button>Enter Your Details</p>
                
                <p><button className='free-btn'>3 </button>Download Resume</p>
            </div>
        </div>
        
        <div className="template-container">
            <div className="temp1"><a onClick={()=>navigateResume('1')}><img src="../assets/Screenshot 2024-05-05 132102.png" alt="" /></a></div>
            <div className="temp2"><a onClick={()=>navigateResume('2')}><img src="../assets/WhatsApp Image 2024-05-05 at 14.50.32_e6a09e72.jpg" alt="" /></a></div>
            <div className="temp3"><a onClick={()=>navigateResume('3')}><img src="../assets/WhatsApp Image 2024-05-05 at 14.50.32_fa3744eb.jpg" alt="" /></a></div>
        </div>
        </>
    )
}
export default Template;
