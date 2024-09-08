import BlurIn from './components/magicui/blur-in'
import GitHub from "./assets/GitHub.png"
import LinkedIn from "./assets/linkedin2.png"
import Email from "./assets/email.png"
import Flow from "./assets/flow.jpeg"
import NASA from "./assets/lspace.jpeg"
import MLH from "./assets/mlh.jpeg"
import './App.css'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react'

function Tab({ id, onClick, children }: any) {
  return (
    <div className={`tab ${id}`} onClick={onClick}>
      <div className='tab-cover'>
        {children}
      </div>
    </div>
  )

}

function App() {

  function scroll(id: string) {
    const node = document.getElementById(id)
    if (node)
      node.scrollIntoView()

  }



  return (
    <div id='page-root'>

      <h1 className='size-medium '> Hey! I'm </h1>
      <BlurIn word={"Shayan"} duration={1.7} className='name-hero'></BlurIn>
      {/* <GradualSpacing text={"Shayan"} className='name-hero'></GradualSpacing> */}
      <h1 className='size-medium '> Fullstack Software Engineer | CS @ UCI </h1>
      <div className='tab-container'>
        <Tab onClick={() => scroll('about')}> About </Tab>
        <Tab> <a href="src/assets/Shayan_Halder_resume.pdf" target='_blank'> Resume </a> </Tab>
        <Tab onClick={() => scroll('experience')}> Experience </Tab>
        <Tab id="last"> Projects </Tab>
      </div>
      <div className='icon-container'>
        <div>
          <img src={GitHub} id="github" className='icon' />
          GitHub
        </div>
        <div>
          <img src={LinkedIn} id="linkedin" className='icon' />
          LinkedIn
        </div>
        <div>
          <img src={Email} id="email" className='icon' />
          Email
        </div>
      </div>


      <div id='about'>
        <h1 className='medium-large teal-color'> About </h1>
        <p> I'm a Computer Science student at UC Irvine specializing in <span className='teal-color'>Fullstack Web Development</span>. I love
          tackling difficult challenges head-on with <span className='teal-color'>growth-mindset</span> and a <span className='teal-color'>mission-driven mentality</span>. I'm
          inspired by the endless pursuit of knowledge in Software Development, knowing that there's more to learn
          than can be done in several lifetimes.
        </p>
      </div>

      <div id='experience'>
        <h1 className='medium-large teal-color'> Experience </h1>
        <Accordion allowToggle>
          <AccordionItem className='accordion-item'>
            <h2>
              <AccordionButton>
                <div className='experience-left'>
                  <img src={Flow} id='flow' />
                  <div className='experience-header'>
                    <div className='company'>Flow Global Software Technologies </div>
                    <div className='position'>Software Development Intern</div>
                  </div>
                </div>
                <div className='experience-right'>
                  April 2024 - August 2024
                </div>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ul>
                <li> Developed the frontend of a sales productivity-enhancing desktop application using Electron.js and React.js.</li>
                <li> Integrated LinkedIn embedded popup modal to improve sales rep outreach efficiency by 20%.</li>
                <li> Updated frontend components to match backend contacts model schema changes for storing lead information in
                  PostgreSQL database.</li>
                <li>  Resolved unexpected 404 popup during remote JS execution on LinkedIn modal to automate connection requests</li>
              </ul>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className='accordion-item'>
            <h2>
              <AccordionButton>
                <div className='experience-left'>
                  <img src={NASA} className='experience-logo' />
                  <div className='experience-header'>
                    <div className='company'>NASA L'SPACE Mission Concept Academy </div>
                    <div className='position'>Computer Engineering Planner</div>
                  </div>
                </div>
                <div className='experience-right'>
                  May 2024 - August 2024
                </div>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ul>
                <li> Collaborated in team of 15 students to plan a mock NASA mission to search the moon’s south pole for ice-water.</li>
                <li> Conducted Failure Mode and Effect Analysis to track the severity of 10+ subsystem risks.</li>
                <li> Composed documentation for 11 API routes for transmission of text/image/command data from Mission Control.</li>
                <li> Produced software architecture flowchart and pseudocode to integrate requirements from thermal, power, and
                  payload subsystems.</li>
                <li> Developed recovery/redundancy protocol to autonomously regulate rover subsystem health metrics.</li>
              </ul>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className='accordion-item'>
            <h2>
              <AccordionButton>
                <div className='experience-left'>
                  <img src={MLH} className='experience-logo' />
                  <div className='experience-header'>
                    <div className='company'>Meta x Major League Hacking Fellowship </div>
                    <div className='position'>Site Reliability Engineering Fellow</div>
                  </div>
                </div>
                <div className='experience-right'>
                  May 2024 - August 2024
                </div>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ul>
                <li> Completed 12-weeks of structured curriculum covering core SRE concepts, supplemented with events and workshops hosted by leading Meta industry experts.</li>
                <li> Created an open-source personal portfolio website template using Python, Flask, Jinja, MySQL, Nginx, and unittest. </li>
                <li> Automated testing and deployment workflows with bash scripting and GitHub Actions CI/CD tools.</li>
                <li> Implemented monitoring and visualization of CPU/RAM/Disk utilization of Docker containers on VPS with Prometheus and Grafana.</li>
              </ul>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className='accordion-item'>
            <h2>
              <AccordionButton>
                <div className='experience-left'>
                  <img src={MLH} className='experience-logo' />
                  <div className='experience-header'>
                    <div className='company'>Meta x Major League Hacking Fellowship </div>
                    <div className='position'>Site Reliability Engineering Fellow</div>
                  </div>
                </div>
                <div className='experience-right'>
                  May 2024 - August 2024
                </div>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ul>
                <li> Completed 12-weeks of structured curriculum covering core SRE concepts, supplemented with events and workshops hosted by leading Meta industry experts.</li>
                <li> Created an open-source personal portfolio website template using Python, Flask, Jinja, MySQL, Nginx, and unittest. </li>
                <li> Automated testing and deployment workflows with bash scripting and GitHub Actions CI/CD tools.</li>
                <li> Implemented monitoring and visualization of CPU/RAM/Disk utilization of Docker containers on VPS with Prometheus and Grafana.</li>
              </ul>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className='accordion-item'>
            <h2>
              <AccordionButton>
                <div className='experience-left'>
                  <img src={MLH} className='experience-logo' />
                  <div className='experience-header'>
                    <div className='company'>Meta x Major League Hacking Fellowship </div>
                    <div className='position'>Site Reliability Engineering Fellow</div>
                  </div>
                </div>
                <div className='experience-right'>
                  May 2024 - August 2024
                </div>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ul>
                <li> Completed 12-weeks of structured curriculum covering core SRE concepts, supplemented with events and workshops hosted by leading Meta industry experts.</li>
                <li> Created an open-source personal portfolio website template using Python, Flask, Jinja, MySQL, Nginx, and unittest. </li>
                <li> Automated testing and deployment workflows with bash scripting and GitHub Actions CI/CD tools.</li>
                <li> Implemented monitoring and visualization of CPU/RAM/Disk utilization of Docker containers on VPS with Prometheus and Grafana.</li>
              </ul>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className='accordion-item'>
            <h2>
              <AccordionButton>
                <div className='experience-left'>
                  <img src={MLH} className='experience-logo' />
                  <div className='experience-header'>
                    <div className='company'>Meta x Major League Hacking Fellowship </div>
                    <div className='position'>Site Reliability Engineering Fellow</div>
                  </div>
                </div>
                <div className='experience-right'>
                  May 2024 - August 2024
                </div>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ul>
                <li> Completed 12-weeks of structured curriculum covering core SRE concepts, supplemented with events and workshops hosted by leading Meta industry experts.</li>
                <li> Created an open-source personal portfolio website template using Python, Flask, Jinja, MySQL, Nginx, and unittest. </li>
                <li> Automated testing and deployment workflows with bash scripting and GitHub Actions CI/CD tools.</li>
                <li> Implemented monitoring and visualization of CPU/RAM/Disk utilization of Docker containers on VPS with Prometheus and Grafana.</li>
              </ul>
            </AccordionPanel>
          </AccordionItem>



        </Accordion>
        {/* <Accordion allowToggle>
          <AccordionItem>
            test
            <AccordionPanel>
              awef
              aweoifjawoeifjaowieafowjiefjo
              aweoifjawoeifjaowieafowjiefjofij

            </AccordionPanel>


          </AccordionItem> 
        </Accordion> */}
      </div>




    </div>
  )
}

export default App
