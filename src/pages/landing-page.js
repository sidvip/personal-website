import * as React from 'react';
import '../scss/landing-page.scss';
import Background from '../components/background';
import { useSpring, animated } from 'react-spring';
import NavBar from './nav-bar';
import selfImg from '../images/sid.jpg';
import TextTransition, { presets } from 'react-text-transition';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export function IntroBox() {
    const TEXTS = [
        "👨‍💻 Software Engineer",
        "🐶 Rio's Buddy",
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className="container is-max-widescreen">
            <div className="columns intro-box">
                <div className="column">
                    <img style={{ borderRadius: '50%', width: '350px', height: '350px', border: '2px solid rgba(13, 13, 245, 0.5)', padding: '2px' }} src={selfImg} alt='self' />
                </div>
                <div className="column flex items-center justify-center">
                    <div className="tile">
                        <article className="tile is-child">
                            <p className="title">Siddhartha Vibhu Pharswan</p>
                            <p className="subtitle">
                                <TextTransition springConfig={presets.wobbly} delay={100}>
                                    {TEXTS[index % TEXTS.length]}
                                </TextTransition>
                            </p>
                            <div className="content text-justify">
                                Working as a Software Engineer at Advend. After landing up in Robotics at IIT Kanpur, I could able to get rid of this (🫠) feeling
                                which I had for Computers and Programming. Luckily <em><strong>Machine Learning</strong></em>'s maths and and <strong>MATLAB</strong> (
                                <em style={{ fontSize: '13px' }}>first programming language, I worked on</em>)
                                increased my interest in programming.
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function LandingPage() {
    const [props,] = useSpring(
        () => ({
            from: { skewX: '12deg', transformOrigin: 'top left' },
            to: { skewX: '0deg', transformOrigin: 'top left' },
        }),
        []
    );

    return (
        <div style={{ position: 'relative' }}>
            <Background />
            <div style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, overflow: 'auto' }}>
                <div className="hero-body h-full ">
                    <div className="container h-full" >
                        <animated.div className='box h-full overflow-auto' style={{ ...props }}>
                            <NavBar />
                            <Outlet />
                        </animated.div>
                    </div>
                </div >
            </div >
        </div >)
}