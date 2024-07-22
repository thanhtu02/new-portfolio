import React, { useEffect } from 'react';
import HomePage from './homepage/HomePage';
import Contact from './contact/Contact';
import Project from './projects/Project';
import AboutMe from './aboutme/AboutMe';


function Home({toggle}) {

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.section');
            sections.forEach((sec) => {
                const offset = sec.offsetTop;
                const height = sec.offsetHeight;
                const top = window.scrollY;
                if (top >= offset && top < offset + height) {
                    sec.classList.add('show-animate');
                } else {
                    sec.classList.remove('show-animate');
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="container w-full mx-auto px-4">            
            <section className="home" id="home">
                <HomePage toggle={toggle} />
            </section>
            <section className="about-me" id="about-me">
                <AboutMe toggle={toggle} />
            </section>
            <section className="projects" id="projects">
                <Project toggle={toggle} />
            </section>
            <section className="contact-us" id="contact-us">
                <Contact toggle={toggle}/>
            </section>
        </div>
    );
}

export default Home;

