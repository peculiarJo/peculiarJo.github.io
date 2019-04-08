import React from 'react'
import {Timeline, TimelineEvent} from 'react-event-timeline'

class Experience extends React.Component{
    constructor(){
        super();
    }

    render() {
       return (
           <section id="experience">
                <div className="container-fluid">
                    <div className="animate-box section-header" data-animate-effect="fadeInLeft">
                        <span className="font-note">Experience</span>
                        <h2 className="header">Work Experience</h2>
                    </div>
                    <div className="container-fluid timeline">
    			        <Timeline>
                            <TimelineEvent title="Dentsu Ageis Network, 11/2017 - Now"
                                           createdAt="Senior Data Technology Developer"
                                           icon={<i className="fa fa-laptop"></i>}
                            >
                                <ul>    
                                    <li>
                                        <p>
                                            The sole full stack developer for data analytics web applications that are driven
                                            by Angular at the front-end and asp.Net framework at the back-end. Design
                                            and implement features to provide dynamic, interactive data visualization
                                            functions, such as charts and dashboards, within or across data sets.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Provide optimized automation solutions for data visualization results exporting
                                            in multiple formats including images, data tables, and demo-able slides with
                                            editable charts.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Implement, improve and maintain the ETL process for data used by the data
                                            analytics applications.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Improve and implement front-end features for another data warehouse
                                            application. Collaborate with back-end developers to optimize performance and
                                            troubleshoot issues.
                                        </p>
                                    </li>
                                </ul>
                            </TimelineEvent>
                            <TimelineEvent title="Ascenz Solution, 02/2017 - 11/2017"
                                           createdAt="Software Engineer"
                                           icon={<i className="fa fa-laptop"></i>}
                            >
                                <ul>    
                                    <li>
                                        <p>
                                        Individually developed a module that analyzes bunkering processes to detect
                                        and classify bunker states which can assist ship owners in identifying and
                                        preventing frauds. Deployed the module as a python web application and
                                        created APIs to work with existing web product. Integrated the module with
                                        on-board devices to provide real-time analysis.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                        Worked as full stack developer for a web portal using jQuery and .Net.
Together with teammates, developed and maintained features like vessel
tracking, geo-fence monitoring, data visualization and report generation etc.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                        Conducted investigation of issues and provided fixes. Worked closely with sales
and marketing to answer to customers' requests.
                                        </p>
                                    </li>
                                </ul>
                            </TimelineEvent>
                            <TimelineEvent title="Gemalto, 07/2013 - 02/2017"
                                           createdAt="Software Engineer"
                                           icon={<i className="fa fa-laptop"></i>}
                            >
                                <ul>    
                                    <li>
                                        <p>
                                        Developed and maintained operation systems for SIM card using C and Java.
Successfully optimized OS size by 50% saving manufacturing time. Analyzed
security vulnerabilities and implemented security enhancing features.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                        Designed validation plans and created small java card testing applets and test
scripts with VB.Net against various specifications and real life scenarios.
Managed validation everyday reporting.
                                        </p>
                                    </li>
                                </ul>
                            </TimelineEvent>
                            <TimelineEvent title="NUS, 08/2010 - 04/2013"
                                           createdAt="Lab Teaching Assistant (Part-time)"
                                           icon={<i className="fa fa-pencil"></i>}
                            >
                                <ul>    
                                    <li>
                                        <p>
                                        Tutored students in an elementary programming course using C.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                        Supervised labs, marked tests and provided tutorials on all lab tasks. Reply to
students' enquiries actively.
                                        </p>
                                    </li>
                                </ul>
                            </TimelineEvent>
                            <TimelineEvent title="Taidii Pte Ltd, 01/2013 - 04/2013"
                                           createdAt="Software Engineer (Part-time)"
                                           icon={<i className="fa fa-laptop"></i>}
                            >
                                <ul>    
                                    <li>
                                        <p>
                                        Participated in the development of a vitals and attendance tracking system that uses sensing technology. 
                                        The product is targeted for preschools.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                        Provided deployment, maintenance and training services for customers.
                                        </p>
                                    </li>
                                </ul>
                            </TimelineEvent>
                            <TimelineEvent title="AECOME, 05/2011 - 08/2011"
                                           createdAt="Eletrical Engineer (Internship)"
                                           icon={<i className="fa fa-bolt"></i>}
                            >
                                <ul>    
                                    <li>
                                        <p>
                                        Worked as assistant engineer in the M&E department in projects of Asia Square Tower and MRT East West Line. 
                                        Designed lighting and speaker layout, verified electrical variations and estimated power consumptions.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                        Liaised with contractors and checked designs to help AECOM endorse cost for electrical devices installation.
                                        </p>
                                    </li>
                                </ul>
                            </TimelineEvent>
                        </Timeline>
                    </div>                    
                </div>
    		</section>
       )
    }
}
export default Experience