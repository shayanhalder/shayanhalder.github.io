import BlurIn from './components/magicui/blur-in'
import GitHub from "./assets/GitHub.png"
import LinkedIn from "./assets/linkedin2.png"
import Email from "./assets/email.png"
import Flow from "./assets/flow.jpeg"
import Meta from "./assets/meta.jpeg"
import NASA from "./assets/lspace.jpeg"
import MLH from "./assets/mlh.jpeg"
import Resume from "./assets/Shayan_Halder_resume.pdf"
import Steganography from "./assets/steganography.webp"
import GroupDinner from "./assets/group-dinner.png"
import './App.css'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react'
import ViewPoint from "./assets/viewpoint3.png"
import CourseEater from "./assets/course-eater2.png"



function Skill({ name }: any) {
  return (
    <>
      <span className='skill-container'> {name} </span>
    </>
  )
}

function LinkTag({ name, link }: any) {
  return (
    <>
      <a target="_blank" href={link}><span className='link-tag'> {name}</span> </a>
    </>
  )
}

function Tab({ id, onClick, children }: any) {
  return (
    <div className={`tab ${id}`} onClick={onClick}>
      <div className='tab-cover'>
        {children}
      </div>
    </div>
  )
}

function ProjectCard({ imageURL, name, dateRange, description, skills, websiteLink, gitHubLink }: any) {
  return (
    <div className='card-container'>
      <div className='card-img-container'>
        <img src={imageURL} />
      </div>
      <div className='card-body-container'>
        <div className='card-header-container'>
          <div> {name} </div>
          <div> {dateRange} </div>
        </div>

        <div className='card-description-container'>
          {description}
        </div>

        <div className='card-footer-container'>
          <div className='card-skills-container'>
            {skills.map((skill: string) => {
              return <Skill name={skill} />
            })}
          </div>

          <div className='card-links-container'>
            {websiteLink && <LinkTag name="Website" link={websiteLink} />}
            <LinkTag name="GitHub" link={gitHubLink} />
          </div>

        </div>

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
      <h1 className='size-medium '> Fullstack Software Engineer | CS @ UCI </h1>
      <div className='tab-container'>
        <Tab onClick={() => scroll('root')}> About </Tab>
        <Tab> <a href={Resume} target='_blank'> Resume </a> </Tab>
        <Tab onClick={() => scroll('experience')}> Experience </Tab>
        <Tab onClick={() => scroll('projects')} id="last"> Projects </Tab>
      </div>
      <div className='icon-container'>
        <div>
          <a href="https://github.com/shayanhalder" target='_blank'>
            <img src={GitHub} id="github" className='icon' />
            GitHub
          </a>
        </div>
        <div>
          <a href="https://linkedin.com/in/shalder27" target='_blank'>
            <img src={LinkedIn} id="linkedin" className='icon' />
            LinkedIn
          </a>
        </div>
        <div>
          <a href="malito:shayanhalder2389@gmail.com">
            <img src={Email} id="email" className='icon' />
            Email
          </a>
        </div>
      </div>


      <div id='about' className='section'>
        <h1 className='medium-large teal-color'> About </h1>
        <p> I'm a Computer Science student at UC Irvine specializing in <span className='teal-color'>backend development</span> and <span className='teal-color'>reliability engineering</span>.
          Currently interning as a Software Engineer as Meta learning how to build reliable and scalable infrastructure.
        </p>
      </div>

      <div id='experience' className='section'>
        <h1 className='medium-large teal-color'> Experience </h1>
        <Accordion allowMultiple={true}>
            <AccordionItem className='accordion-item'>
              <h2>
                <AccordionButton>
                  <div className='accordion-container'>
                    <div className='experience-left'>
                      <img src={Meta} id='flow' />
                      <div className='experience-header'>
                        <div className='company'>Meta</div>
                        <div className='position'>Software Engineer Intern</div>
                      </div>
                    </div>
                    <div className='experience-right'>
                      June 2025 - Present
                    </div>
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <ul>
                  <li> Infrastructure capacity monitoring framework to analyze usage of virtual resource dependencies and alert teams of potential reliability risks for their service. </li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          {/* </div> */}

          <AccordionItem className='accordion-item'>
            <h2>
              <AccordionButton>
                <div className='accordion-container'>
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
                <div className='accordion-container'>
                  <div className='experience-left'>
                    <img src={NASA} className='experience-logo' />
                    <div className='experience-header'>
                      <div className='company'>NASA L'SPACE Mission Concept Academy </div>
                      <div className='position'>Software Engineer</div>
                    </div>
                  </div>
                  <div className='experience-right'>
                    May 2024 - August 2024
                  </div>
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
              <div className='accordion-container'>
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
      </div>

      <div id='projects' className='section'>
        <h1 className='medium-large teal-color'> Projects </h1>

        <div className='project-list'>
          <ProjectCard name="Viewpoint" dateRange="August 2023 - February 2024"
            description="Designed and developed full-stack web application to showcase news bias on currently trending topics."
            skills={["React", "Node.js", "Express.js", "MongoDB", "Webscraping", "Sentiment Analysis"]}
            imageURL={ViewPoint} websiteLink="https://shayanhalder.me/Viewpoint-News-App" gitHubLink="https://github.com/shayanhalder/Viewpoint-News-App/" />

          <ProjectCard name="Course Eater" dateRange="April 2024 - July 2024"
            description="Developed full-stack web application in a team of 3 other developers to allow students at UC Irvine to plan their 
            course progression in a drag-drop interface. "
            skills={["React", "Node.js", "Express.js", "MongoDB", "TypeScript"]}
            imageURL={CourseEater} websiteLink="https://course-eater.space" gitHubLink="https://github.com/NeatPatel/course-planner" />
          
          <ProjectCard name="Image Encrypter" dateRange="September 2024 - Present"
            description="Developed full-stack web application to encrypt and decrypt secret messages inside image files.   "
            skills={["Python", "Django", "AWS S3", "AWS Cloudfront", "React", "TypeScript", "SQL"]}
            imageURL={Steganography} gitHubLink="https://github.com/shayanhalder/image-encrypter" />

          <ProjectCard name="Group Dinner Price Tracker" dateRange="January 2024 - February 2024"
            description="Developed frontend application to track costs owed by each person at a group dinner for group and individual food items. "
            skills={["React", "TypeScript", "HTML", "CSS"]}
            imageURL={GroupDinner} websiteLink="https://group-dinner-calculator.netlify.app/" gitHubLink="https://github.com/shayanhalder/Group-Dinner-Cost-Calculator" />
        </div>
      </div>

      <div id='footer'>
        Made with &#x2764; by <a href="https://github.com/shayanhalder" target='_blank'>@shayanhalder</a>.

      </div>




    </div>
  )
}

export default App
