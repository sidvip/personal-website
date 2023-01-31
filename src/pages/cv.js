import React from "react"
import { FaAward, FaBriefcase, FaCode } from 'react-icons/fa';
import META from "./cv.meta";
function FormattedSectionHOC(props) {
    return (
        <section className={"section " + props.className}>
            <h1 className="title cv is-4 has-text-info flex items-center">
                <span className="icon mr-2">
                    {props.icon()}
                </span>
                {props.title}
            </h1>
            {props.children}
        </section>
    )
}

function Education() {
    return (
        <FormattedSectionHOC title='Education' icon={() => <i className="fa fa-graduation-cap"></i>} className={'education'}>
            {
                META.qualifications.map((ele, idx) => (
                    <h2 className="subtitle is-6 mt-4 flex gap-10" key={'qual-' + idx}>
                        <span className="tag is-success is-light is-medium">{ele.year}</span>
                        <div>
                            <strong>{ele.title}</strong>
                            <div>{ele.college}</div>
                        </div>
                    </h2>
                ))
            }
        </FormattedSectionHOC>
    )
}

function Achievements() {
    return (
        <FormattedSectionHOC icon={() => <FaAward />} title='Achievements'>
            <ul className="list-disc list-inside text-justify">
                {
                    META.achievements.map((achievement, idx) => (
                        <li key={'achievement-' + idx} className='mt-1'>{achievement}</li>
                    ))
                }
            </ul>
        </FormattedSectionHOC>
    )
}

function Projects() {
    return (
        <FormattedSectionHOC icon={() => <FaCode />} title='Projects'>
            <ul className="list-disc list-inside text-justify">
                {
                    Object.keys(META.projects).map((project, idx) => (
                        <li key={'achievement-' + idx} className='mt-2'>{project} - {
                            META.projects[project].split(",").map((e, i) => <span className='tag mr-2 is-light is-danger' key={'proj-' + i}>{e}</span>)
                        }</li>
                    ))
                }
            </ul>
        </FormattedSectionHOC>
    )
}

function WorkEx() {
    return (
        <FormattedSectionHOC icon={() => <FaBriefcase />} title='Work Experience' className='work-ex'>
            {
                META.experiences.map((ele, idx) => (
                    <div key={'wex-' + idx}>
                        <div className="comp-profile flex justify-between items-center flex-1">
                            <span className="tag is-link is-light is-medium">{ele.duration}</span>
                            <div className="flex flex-col flex-end items-end">
                                <h2 className="subtitle is-6">{ele.designation}</h2>
                                <strong className="is-6 title">{ele.company}</strong>
                            </div>
                        </div>
                        <div className="bg-stone-50 rounded-lg p-3 text-justify mt-4 mb-3 mr-0 ml-0">
                            <ul className="list-disc list-inside">
                                {
                                    ele.responsibilities.map((resp, idx) => <li className='mt-1' key={'resp-' + idx}>{resp}</li>)
                                }
                            </ul>
                            <div className="flex gap-2 mt-2 flex-wrap">
                                {
                                    ele.techStack.map((tech, idx) => <span className="tag is-primary is-light" key={'tag-' + idx}>{tech}</span>)
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </FormattedSectionHOC>
    )
}

export default function CV() {

    return (
        <div className="columns">
            <div className="column is-half">
                <WorkEx />
            </div>
            <div className="column">
                <Education />
                <Achievements />
                <Projects />
            </div>
        </div>
    )
}