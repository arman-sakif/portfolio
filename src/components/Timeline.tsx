import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Sept 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Solutions and BI Developer Co-op</h3>
            <h4 className="vertical-timeline-element-subtitle"style={{ color: 'teal' }}>FGF Brands</h4>
            <h4 className="vertical-timeline-element-subtitle">North York, ON, Canada</h4>
            <p>
              Power BI dashboard and report, data transformation and integration, optimizing SQL and semantic models.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2024 - Aug 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Medical Billing and RCM Associate</h3>
            <h4 className="vertical-timeline-element-subtitle"style={{ color: 'teal' }}>Intelligency Solutions</h4>
            <h4 className="vertical-timeline-element-subtitle">Northville, MI (Remote)</h4>
            <p>
              Revenue Cycle Management(RCM), CPT / ICD-10 Coding, Medical Terminology, EMR/EHR Systems, HIPAA Compliance
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2023 - Aug 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Python Developer Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle"style={{ color: 'teal' }}>Techscope Org.</h4>
            <h4 className="vertical-timeline-element-subtitle">New York, NY (Remote)</h4>
            <p>
              Python, Data Transformation, Unit Testing, Client Handling
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2020 - Aug 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Backend Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: 'teal' }}>ProyogLab</h4>
            <h4 className="vertical-timeline-element-subtitle">Dhaka, Bangladesh</h4>
            <p>
              Customer Support, Retail Management, Web Development Backend architecture
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2020 - Apr 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Customer Service Rep</h3>
            <h4 className="vertical-timeline-element-subtitle"style={{ color: 'teal' }}>Just Storys Ltd.</h4>
            <h4 className="vertical-timeline-element-subtitle">Dhaka, Bangladesh</h4>
            <p>
              Customer Service, Social Media Management, Upselling, Collaboration, Communication
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;