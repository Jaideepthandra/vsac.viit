import React from 'react';

const MemberCard = ({ member }) => {
    return (
        <div className="card">
            <img src={member.image} alt={member.name} />
            <div className="card-content">
                <h3>{member.name}</h3>
                <p>{member.designation}</p>
                <p>Year: {member.year} | Dept: {member.department}</p>
                <p>Regd No: {member.regdNo}</p>
            </div>
        </div>
    );
};

export default MemberCard;