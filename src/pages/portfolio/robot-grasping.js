import React from "react";
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import IrosPdf from './iros.pdf';

const VIDEO_LINKS = [
    {
        rFrame: 'https://www.youtube.com/embed/fLyEEp4vjBo?autoplay=0',
        cFrame: 'https://www.youtube.com/embed/Wv0Vq-z6vt0?autoplay=0'
    },
    {
        rFrame: 'https://www.youtube.com/embed/9Ha-Xq8isik?autoplay=0',
        cFrame: 'https://www.youtube.com/embed/VcFDMeB3fVQ?autoplay=0'
    },
    {
        rFrame: 'https://www.youtube.com/embed/_FJz5rkliKE?autoplay=0',
        cFrame: 'https://www.youtube.com/embed/_iwJKELXzqI?autoplay=0'
    },
    {
        rFrame: 'https://www.youtube.com/embed/vEctN_ufcEk?autoplay=0',
        cFrame: 'https://www.youtube.com/embed/RDFRnslogbg?autoplay=0'
    },
    {
        rFrame: 'https://www.youtube.com/embed/yXsuHLbjjhM?autoplay=0',
        cFrame: 'https://www.youtube.com/embed/F2qHf6v2nGU?autoplay=0'
    },
    {
        rFrame: 'https://www.youtube.com/embed/4nk0EeBtfYU?autoplay=0',
        cFrame: 'https://www.youtube.com/embed/ucGlKfug6to?autoplay=0'
    },
    {
        rFrame: 'https://www.youtube.com/embed/NJAA3OJgBQ8?autoplay=0',
        cFrame: 'https://www.youtube.com/embed/R9IdOfectIo?autoplay=0'
    }
]

export default function RobotGraspingPage() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <div className="container is-fluid h-full">
            <div className="container m-4">
                <div className="title underline">Introduction</div>
                <div className="content">
                    In this piece of work, we tried to solve the problem of grasping in cluttered environment. Universal Robot 5 is used with EZGripper
                    to pick objects of
                    <a href='http://pwurman.org/amazonpickingchallenge/results.shtml' className='has-text-linkn' target='_blank' rel="no-referrer noreferrer">
                        &nbsp;Amazon Picking Challenge 2016
                    </a> and
                    <a className="has-text-link" href='https://www.robocup2017.org/' target='_blank' rel="no-referrer noreferrer">
                        &nbsp;Amazon Robotics Challenge 2017.
                    </a>
                </div>
            </div>
            <div className="container m-4">
                <div className="title underline">Demonstration and Paper</div>
                <div className="columns">
                    <div className="column is-half">
                        {
                            VIDEO_LINKS.map((ele, idx) => (
                                <div className="flex justify-center gap-4 mt-4" key={'video-' + idx}>
                                    <iframe className="video" title='demo-1' src={ele.rFrame} />
                                    <iframe className="video" title='demo-1' src={ele.cFrame} />
                                </div>
                            ))
                        }
                    </div>
                    <div className="column h-[50rem]">
                        <Viewer
                            fileUrl={IrosPdf}
                            plugins={[
                                // Register plugins
                                defaultLayoutPluginInstance,
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}