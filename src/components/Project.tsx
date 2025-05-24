import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/arman-sakif/movie_ratings_plot_summary" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/arman-sakif/movie_ratings_plot_summary" target="_blank" rel="noreferrer"><h2>Predicting Movie Ratings</h2></a>
                <p>Developed and deployed a BERT-based model to predict movie success from plot summaries, achieving an 81% F1-score—11% above baseline—using a custom dataset of 17,877 IMDB records.</p>
            </div>
            <div className="project">
                <a href="https://github.com/arman-sakif/Bengali-Fake-News-Detection" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/arman-sakif/Bengali-Fake-News-Detection" target="_blank" rel="noreferrer"><h2>Bengali Fake News Detection</h2></a>
                <p>Led a research project on Bengali fake news detection using NLP techniques and BERT fine-tuning, outperforming existing models, and co-authored a journal paper currently under Q2 review.</p>
            </div>
            <div className="project">
                <a href="https://github.com/arman-sakif/churnBigML" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/arman-sakif/churnBigML" target="_blank" rel="noreferrer"><h2>Churn BigML</h2></a>
                <p>Developed a telecom customer churn prediction model using the Churn BigML dataset and advanced ML algorithms, achieving 95.74% accuracy with LGBM and XGBoost while identifying key churn indicators through feature importance analysis.</p>
            </div>
            <div className="project">
                <a href="https://arman-sakif.github.io/ZuperMart/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://arman-sakif.github.io/ZuperMart/" target="_blank" rel="noreferrer"><h2>ZuperMart: A Clothing Website</h2></a>
                <p>Built a fully functional e-commerce website for a local clothing brand using HTML, CSS, JavaScript, Bootstrap5, and PHP, featuring a Wishlist system to replace traditional order and delivery methods.</p>
            </div>
            <div className="project">
                <a href="https://github.com/arman-sakif/CityBoard" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/arman-sakif/CityBoard" target="_blank" rel="noreferrer"><h2>CityBoard: Community Android App</h2></a>
                <p>Led a team of three to develop CityBoard, a community-focused Android app using Java and Firebase, allowing users to create posts for selling items, lost and found, event recruitment, and more.</p>
            </div>
            <div className="project">
                <a href="https://github.com/arman-sakif/Smart-Assassin" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/arman-sakif/Smart-Assassin" target="_blank" rel="noreferrer"><h2>Smart Assasin: Game</h2></a>
                <p>Developed a 3rd-person WebGL shooting game in C using iGraphics, where players complete objectives by strategically shooting at reflective surfaces to eliminate enemies, featuring a storyline and unlockable achievements.</p>
            </div>
            <div className="project">
                <a href="https://github.com/arman-sakif/expense_manager_f" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/arman-sakif/expense_manager_f" target="_blank" rel="noreferrer"><h2>Expense Manager App (Flutter)</h2></a>
                <p>Developed a cross-platform expense manager app using Flutter, AWS, and Python APIs, enabling users to input, categorize, and visualize expenses with dynamic pie charts across Android, iOS, and Web platforms.</p>
            </div>
            <div className="project">
                <a href="https://github.com/arman-sakif/Library-Management" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/arman-sakif/Library-Management" target="_blank" rel="noreferrer"><h2>Library Management System (Java Swing)</h2></a>
                <p>Created a Library Management System using Java Swing with features like adding, deleting, and searching books, utilizing a Red-Black Tree for efficient and balanced search operations.</p>
            </div>
            <div className="project">
                <a href="https://github.com/arman-sakif/cryptoPricePrediction" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/arman-sakif/cryptoPricePrediction" target="_blank" rel="noreferrer"><h2>TCrypto Price Prediction</h2></a>
                <p>Utilized historical CoinMarketCap data and advanced machine learning techniques to predict Bitcoin’s high value, delivering actionable insights for investors through robust data engineering and predictive modeling.</p>
            </div>
            <div className="project">
                <a href="https://github.com/arman-sakif/RainAlert" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/arman-sakif/RainAlert" target="_blank" rel="noreferrer"><h2>Rain Alert</h2></a>
                <p>  </p>
            </div>
        </div>
    </div>
    );
}

export default Project;