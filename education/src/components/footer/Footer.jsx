import React from 'react'

import { Icon } from '@iconify/react';

import "./Footer.css"

export default function Footer() {
  return (
    <div className='footerContainer'>
        <span>Join With Us :</span>
        <div className="footerContainerIcons">
        <Icon icon="devicon:google"  className="footerContainerIcon" />
        <Icon icon="logos:facebook"  className="footerContainerIcon" />
        <Icon icon="devicon:linkedin"  className="footerContainerIcon" />
        </div>
    </div>
  )
}
