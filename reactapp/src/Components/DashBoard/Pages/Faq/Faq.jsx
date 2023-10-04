    // AboutUs.js
    import React from 'react';
    import './Faq.css';

    function Faq() {
    return (// FAQ.js


        <div className="faq-container">
            <h1 className="faq-title">Frequently Asked Questions</h1>
    
            <div className="faq-section">
            <h2 className="faq-question">1. What is MyVote?</h2>
            <p className="faq-answer">
                MyVote is a platform that allows football fans to cast their votes, show support for their favorite teams, and engage with fellow fans in a fun and fair voting experience.
            </p>
            </div>
    
            <div className="faq-section">
            <h2 className="faq-question">2. How can I vote for my favorite team?</h2>
            <p className="faq-answer">
                To vote for your favorite team, simply click on the "Vote" button next to the team's logo on the dashboard page.
            </p>
            </div>
    
            <div className="faq-section">
            <h2 className="faq-question">3. Can I change my vote after casting it?</h2>
            <p className="faq-answer">
                No, once you've cast your vote, it cannot be changed. Please vote carefully.
            </p>
            </div>
    
            <div className="faq-section">
            <h2 className="faq-question">4. How are the voting results calculated?</h2>
            <p className="faq-answer">
                Voting results are calculated based on the total number of votes cast for each team. The team with the most votes wins.
            </p>
            </div>
    
            <div className="faq-section">
            <h2 className="faq-question">5. Is my personal information safe on MyVote?</h2>
            <p className="faq-answer">
                Yes, we take your privacy seriously. Your personal information is securely stored and will not be shared with third parties.
            </p>
            </div>
        </div>
    
    );
    }

    export default Faq;
