import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './Authentication/AuthContext';
const NavBar = () => {
  const navigate=useNavigate();
  const changeHandleSignup=()=>{
    navigate('/signup');
  }
  const changeHandleLogin=()=>{
    navigate('/login');
  }
  return (
    <div className="nav_bar">
      <div className="left_nav">
        <h1>Resume-Generator</h1>
      </div>
      <div className="right_nav">
        <a className="nav_link" href="">HOME</a>
        <a className="nav_link" href="about.html">ABOUT US</a>
        <button onClick={changeHandleSignup}>SignUp</button>
        <button onClick={changeHandleLogin}>Login</button>
      </div>
    </div>
  );
};

const Header = () => {
  const {isLoggedIn,setIsLoggedIn }=useContext(AuthContext);
    const navigate=useNavigate();
    const navigateTemplate=()=>{
      if(!isLoggedIn){
        alert(`you are not loggedin`)
        localStorage.setItem('prevPath', '/template');
        navigate('/login')
      }
      else{
        navigate('/template');
      }
    }
  return (
    <header className="header bg-bright" id="header">
      <div className="container">
        <div className="header-content text-center">
          <h2 className="text-uppercase text-blue-dark fs-14 fw-6 ls-1">Online resume builder</h2>
          <h1 className="lg-title">Only 2% of resumes make it pass the first round. Be in the top 2%</h1>
          <p className="text-dark fs-18">Use professional field-tested resume templates that follow that exact 'resume rules' employers look for. Easy to use and done within minutes - try now for free!</p>
          
          <button onClick={navigateTemplate} className='btn btn-primary text-uppercase'>Create Resume</button>

          <img src="../assets/dublin-resume-templates.avif" alt="Resume Templates" />
        </div>
      </div>
    </header>
  );
};

const SectionOne = () => {
  return (
    <div className="herocontainer">
        <div className="imgcontainer">
            
                <img src="../assets/visual-0c7080adf17f1f207276f613447c924f667dab34b7ac415cd7ef653172defd0b.svg" alt="" />
            
        </div>
        <div className="textcontainer">
        <h2 class = "lg-title">Use the best resume maker as your guide!</h2>
              <p class = "text">Getting that dream job can seem like an impossible task. We're here to change that. Give yourself a real advantage with the best online resume maker: created by experts, imporved by data, trusted by millions of professionals.</p>
        </div>
    </div>
  );
};
function SectionTwo() {
    return (
      <div className="section-two bg-bright">
        <div className="container">
          <div className="section-two-content">
            <div className="section-items">
              <div className="section-item">
                <div className="section-item-icon">
                  <img src="assets/images/feature-1-edf4481d69166ac81917d1e40e6597c8d61aa970ad44367ce78049bf830fbda5.svg" alt="" />
                </div>
                <h5 className="section-item-title">Make a resume that wins interviews!</h5>
                <p className="text">Use our resume maker with its advanced creation tools to tell professional story that engages recruiters, hiring managers and even CEOs.</p>
              </div>
              <div className="section-item">
                <div className="section-item-icon">
                  <img src="../assets/feature-2-a7a471bd973c02a55d1b3f8aff578cd3c9a4c5ac4fc74423d94ecc04aef3492b.svg" alt="" />
                </div>
                <h5 className="section-item-title">Resume writing made easy!</h5>
                <p className="text">Resume writing has never been this effortless. Pre-generated text, visual designs and more - all already integrated into the resume maker. Just fill in your details.</p>
                </div>
            <div className="section-item">
              <div className="section-item-icon">
                <img src="assets/images/feature-3-4e87a82f83e260488c36f8105e26f439fdc3ee5009372bb5e12d9421f32eabdd.svg" alt="" />
              </div>
              <h5 className="section-item-title">A recruiter-tested CV maker tool</h5>
              <p className="text">Our resume builder and its pre-generated content are tested by recruiters and IT experts. We help your CV become truly competitive in the hiring process.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="container">
        <div className="footer-content text-center">
          <p className="fs-15">&copy;Copyright 2024. All Rights Reserved - <span>resume-hub</span></p>
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </div>
  );
};

export default Home;