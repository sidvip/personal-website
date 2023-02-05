import React from 'react';
import PROJECTS_META from './projects.meta';

export default function RoboticsProjects() {

    return (
        <div className='container'>
            {
                PROJECTS_META.map((project, id) => (
                    <div className='section' key={'project-' + id}>
                        <div className='title'>{project.title}</div>
                        <div className='content text-justify'>{project.content}</div>

                        <div className='grid grid-cols-2 gap-10'>
                            {
                                project.media.map((media, id) => (
                                    <div key={'media-' + id} className='flex flex-col items-center flex-1'>
                                        {media.link && <iframe title='proj-video' src={media.link} className='w-[50%] h-[220px] rounded-lg' allowFullScreen />}
                                        <div className='subtitle mt-3 is-5'>{media.title}</div>
                                        <div className='subtitle is-6 has-text-info -mt-4'>{media.subTitle || ""}</div>
                                        <div className='content text-justify has-text-success is-light'>{media.details}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}