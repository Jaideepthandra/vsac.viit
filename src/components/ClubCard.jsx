import React from 'react';
import './ClubCard.css';

const ClubCard = ({ club, index }) => {
    const isEven = index % 2 === 0;
    const isExtraLargeLogoClub = club.name === "Shivananda Yoga Club" || club.name === "Latha Mangeshkar Music Club";
    const isLargeLogoClub = club.name === "Fest Fusion Club" || club.name === "Amitabh Bachchan Movie Club" || club.name === "Nataraja Dance Club";
    const isSacCard = club.name === "About the Student Activity Council" || club.name === "Planning and Execution of Institution Clubs";

    return (
        <div className={`club-card ${isEven ? 'even' : 'odd'}`}>
            <img
                src={club.logo}
                alt={`${club.name} Logo`}
                className={`club-card-logo ${isExtraLargeLogoClub ? 'club-logo-extra-large' : isLargeLogoClub ? 'club-logo-large' : ''} ${isSacCard ? 'no-border-radius' : ''}`}
            />
            <div className="club-card-content">
                <div className="club-info">
                    <h3 className="club-name">{club.name}</h3>
                    <p className="club-description">{club.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ClubCard;