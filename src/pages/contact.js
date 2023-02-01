import React from 'react';
import { FaMobileAlt, FaLinkedin, FaGithub, FaWhatsappSquare, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { IoMdMail } from 'react-icons/io';
import { ImMobile } from 'react-icons/im';
export function Contacts() {

    return (
        <div className='h-3/5 relative'>
            <div className='container is-fluid'>
                <div className="section flex">
                    <article className="tile flex flex-col gap-2">
                        <p className="title flex gap-2 is-5"><ImMobile fontSize={25} /> Mobile</p>
                        <p className="subtitle">
                            <a href="tel:+91-7895385692" className='has-text-info flex items-center gap-2'>
                                (+91)-7895385692
                            </a>
                        </p>
                    </article>
                    <article className="tile flex flex-col gap-2">
                        <p className="title flex gap-2 is-5"><IoMdMail fontSize={25} />E-Mail</p>
                        <p className="subtitle">
                            <a href="mailto:siddharthapharswan@gmail.com" className='has-text-info flex items-center gap-2'>
                                siddharthapharswan@gmail.com
                            </a>
                        </p>
                    </article>
                    <article className="tile flex flex-col gap-2">
                        <p className="title flex gap-2 is-5"><MdLocationPin fontSize={25} />Location</p>
                        <p className="subtitle has-text-link">Dehradun, Uttarakhand - India</p>
                    </article>
                </div>
            </div >
            <div className='absolute left-0 right-0 bottom-0 p-4 border-2  border-indigo-100 rounded-lg'>
                <div className='flex justify-center items-center gap-2'>
                    <a href='https://www.linkedin.com/in/svpharswan/' target='_blank' rel='noopenner noreferrer' title='LinkedIn'>
                        <FaLinkedin className='has-text-info cursor-pointer' fontSize={30} />
                    </a>
                    <a href='https://github.com/sidvip' target='_blank' rel='noopenner noreferrer' title='Github'>
                        <FaGithub className='has-text-dark cursor-pointer' fontSize={30} />
                    </a>
                    <a href='https://www.instagram.com/_sidvip_/' target='_blank' rel='noopenner noreferrer' title='Instagram'>
                        <img className='w-7 h-7' alt='instagram' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png' />
                    </a>
                    <a href="https://wa.me/917895385692" target='_blank' rel='noopenner noreferrer' title='WhatsApp'>
                        <FaWhatsappSquare className='has-text-success' fontSize={30} />
                    </a>
                    <a href="https://twitter.com/_SIDVIP_" target='_blank' rel='noopenner noreferrer' title='Twitter'>
                        <FaTwitter className='has-text-info' fontSize={30} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCIDKtpEWBQzamdfF5TpOaLw" target='_blank' rel='noopenner noreferrer' title='YouTube'>
                        <FaYoutube className='has-text-danger' fontSize={30} />
                    </a>
                </div>
                <div className='block mt-2 text-center'>
                    © Copyright 2023
                </div>
            </div>
        </div>
    )
}