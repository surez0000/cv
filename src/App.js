import logo from './logo.svg';
import {useState} from 'react';
import profile from './images/profile.png';
import html from './images/html.png';
import css from './images/css.png';
import js from './images/js.png';
import './base.css';
import './App.css';
import './styles/progressStyles.css';
import CustomCircularProgressBar from './components/CustomCircularProgressBar';


function App() {
  const [percentage, setPercentage] = useState(35);
  return (
    <div>
      {/* <div className="background"></div> */}
        <div className="poppins">
            <div className="backgroundGradient"></div> 
            <div className="bodyWrapper">
              <div className="topPanelFirstSection">
                <div className="portfolioLeftPanel">
                  <div className="quickProfileSection white">
                      <div className='leftPanelProfileWrap'>
                        <img src={profile} className="leftPanelProfile"/>
                      </div>
                      <h4 className="aligncenter pt12 f20 poppinsBold">SureshRaja N</h4>
                      <h4 className="aligncenter pt5 f14 poppinsLight op5">Javascript Developer / UI Engineer</h4>
                      <div className="userDetailsInfoWrap">
                        <ul className='userDetailsListWrap'>
                          <li className='userDetailsInfo'>
                              <span>Age</span>
                              <span>26</span>
                          </li>
                          <li className='userDetailsInfo'>
                              <span>Experience</span>
                              <span>2 + 5 years </span>
                          </li>
                          <li className='userDetailsInfo'>
                              <span>City</span>
                              <span>Chennai</span>
                          </li>
                        </ul>
                        <div className='pt20 knowledgeIconsWrap'>
                          <CustomCircularProgressBar 
                              percentage={percentage} 
                              circleWidth="60" 
                              fillColor="#182932" 
                              strokeColor="#cd4019" 
                              radius="24"
                              path={html}
                              imageClassName="knowledgeIcon"
                          ></CustomCircularProgressBar>
                          <CustomCircularProgressBar 
                              percentage={percentage} 
                              circleWidth="60" 
                              fillColor="#182932" 
                              strokeColor="#0d6ead" 
                              radius="24"
                              path={css}
                              imageClassName="knowledgeIcon"
                          ></CustomCircularProgressBar>
                          <CustomCircularProgressBar 
                              percentage={percentage} 
                              circleWidth="60" 
                              fillColor="#182932" 
                              strokeColor="#db7825" 
                              radius="24"
                              path={js}
                              imageClassName="knowledgeIcon"
                          ></CustomCircularProgressBar>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="portfolioRightPanel"></div>
              </div>
              
            </div>
        </div>
    </div>
    
   
  );
}

export default App;
