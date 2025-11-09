import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MemberCard from './components/MemberCard';
import { members } from './data/members';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const sections = {
        "Section-1: President": ["President"],
        "Section-2: Vice Presidents": ["Vice - President"],
        "Sections-3: Treasurer & Core Leads": ["Treasurer", "Core Lead"],
        "Section-4: Secretaries": ["Secretary"],
        "Section-5: Co-Treasurer & Core Team": ["Co - Treasurer", "Core Team"],
        "Section-6: Club Managers": ["Club Manager"],
        "Section-7: Joint Secretaries": ["Joint Secretary"],
        "Section-8: Club Coordinators": ["Club Coordinator"],
    };

    const groupedMembers = Object.keys(sections).reduce((acc, section) => {
        acc[section] = members
            .filter(member => sections[section].includes(member.designation))
            .sort((a, b) => {
                if (a.designation === "Co - Treasurer") return -1;
                if (b.designation === "Co - Treasurer") return 1;
                return 0;
            });
        return acc;
    }, {});

    return (
        <div className="App">
            <header>
                <div
                  className="logo"
                  onClick={scrollToTop}
                >
                  <img src="/sac-new-logo.png" alt="SAC Logo" style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                </div>
                <div className="header-text">
                    <h1>Student Activity Council (SAC)</h1>
                    <h2>Vignan's Institute of Information Technology (A)</h2>
                    <h3>Academic Year 2025-2026</h3>
                </div>
            </header>
            <main id="member-cards">
                {Object.entries(groupedMembers).map(([section, membersInSection]) => (
                    <div key={section} className="section" data-aos="fade-up">
                        <h2 className="section-title" data-aos="fade-down">{section.split(': ')[1]}</h2>
                        <div className="card-container" data-aos="zoom-in">
                            {membersInSection.map(member => (
                                <MemberCard key={member.regdNo} member={member} data-aos="flip-left" />
                            ))}
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
}

export default App;
