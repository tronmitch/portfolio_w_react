import "../styles/Resume.css"
import resume from '../assets/Theron_Mitchell_Resume.pdf'

export default function Resume() {
  return (
    
<body>
<div class="download">
    <a href="theron_mitchell_resume.pdf" download={resume}>Download Resume as PDF</a>
  </div>
    <div class="resume">
        <div class="header">
            <h1>Theron Mitchell</h1>
            <p>522 S 500 E, Orem, UT 84097 | theron.mitchell@gmail.com | (775) 225-1472</p>
        </div>

        <div class="experience">
            <h2>EXPERIENCE</h2>
            <div class="job">
                <h3>CDS Visual, San Jose CA — 2017-Present</h3>
                <ul>
                    <li>Manage up to 5 projects at a time as technical lead, working with the client and offshore our engineering team.
                        <ul>
                            <li>Produce customer tailored demos</li>
                            <li>Coordinate with sales team to deliver timely quotes</li>
                        </ul>
                    </li>
                    <li>Developed smart drawing for cutting tool company (Kennametal) that can produce sales drawings for 100k+ different tool combinations used on their site today.</li>
                </ul>
            </div>
            <div class="job">
                <h3>Parametric Solutions INC., Jupiter FL — 2015-2017</h3>
                <ul>
                    <li>Developed custom automation tools for aerospace customer (Pratt & Whitney)
                        <ul>
                            <li>Created CMM data plot tool using Python that displays results 4x faster than predecessor</li>
                            <li>Created IBR (integrated blade rotor) sectioning tool for NX using Java reducing the time it takes to create an IBR section from days to hours</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="job">
                <h3>Belcan Engineering Group, Provo UT — 2006-2015</h3>
                <ul>
                    <li>Developed custom automation tools for NX and Teamcenter
                        <ul>
                            <li>Created drawing export tool using C++ that saves Belcan 1000 man-hours per year</li>
                            <li>Created de-featuring tool using C++, which reduced time to prepare CAD models for meshing from weeks to hours</li>
                        </ul>
                    </li>
                    <li>Managed team of 6 engineers:
                        <ul>
                            <li>Supervised the creation of CAD & GD&T drawings from legacy manufacturing drawings</li>
                            <li>Established a method whereby team members could work on 30 sheet drawing in parallel, which took completion time down from 4 weeks to 2 weeks</li>
                        </ul>
                    </li>
                    <li>Designed rail cart for aerospace customer (Pratt & Whitney) that is now used to transport and install HPW3000 turbine engines in test rig</li>
                    <li>Designed cooling system for semiconductor customer (ASML) which helps maintain the air temperature within ± 0.3° C for a machine used to make integrated chips</li>
                </ul>
            </div>
        </div>
        <div class="technical-skills">
            <h2>TECHNICAL SKILLS</h2>
            <ul>
                <li>CAD (NX, SolidWorks, Creo)</li>
                <li>Programming (Java, Python, NX API)</li>
                <li>Microsoft Office (Excel, Access, PowerPoint, Word)</li>
            </ul>
        </div>
        <div class="education">
            <h2>EDUCATION</h2>
            <ul>
                <li>Bachelor of Science - Mechanical Engineering, Brigham Young University</li>
                <li>Minor - Mathematics, Brigham Young University</li>
            </ul>
        </div>
    </div>
</body>
  );
}
