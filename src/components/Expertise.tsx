import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faCloud} from "@fortawesome/free-solid-svg-icons";
import { faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "Power BI",
  "Azure Ecosystem",
  "Microsoft Fabric",
  "DAX",
  "SQL",
  "Data Modeling",
  "Power Query",
  "Excel",
  "Business Analytics",
];

const labelsSecond = [
  "Databricks",
  "Apache Spark",
  "PySpark",
  "Python",
  "SQL",
  "Azure",
  "Delta Lake",
  "ETL Pipelines",
  "Data Warehousing",
  "Azure DevOps"
];

const labelsThird = [
    "OpenAI",
    "Azure OpenAI",
    "LangChain",
    "Hugging Face",
    "Python",
    "RAG",
    "Vector Databases",
    "ML Pipelines",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faChartLine} size="3x"/>
                    <h3>Data Analytics & BI</h3>
                    <p>I design interactive dashboards and analytics solutions using Power BI, which includes natural language answering capabilities using copilot. By optimizing data models, and translating business requirements into actionable insights, I bridge the gap between raw data and strategic decision-making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Keywords:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCloud} size="3x"/>
                    <h3>Data Engineering & Cloud</h3>
                    <p>I build and maintain scalable data pipelines and analytics infrastructure using modern cloud and big data platforms. My work includes ETL development, data transformation, orchestration, and performance optimization using Databricks and cloud services.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Keywords:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI Solutions & Automation</h3>
                    <p>I develop AI-powered solutions that integrate large language models and automation into real-world business workflows. My experience includes building copilots, AI assistants, and data-driven ML pipelines for analytics and operational use cases.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Keywords:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;