import React, { Component } from 'react'
import "../css/mainContainer.css"

class SideBarNav extends Component {
    render() {
        return (
            <div className="sbn-container">
                <div className="sbn-heading">{this.props.heading}</div>
                <div className="sbn-icon">{this.props.icon}</div>
            </div>
        )
    }
}

export class SideBar extends Component {
    render() {
        return (
            <div className="SideBarCont">
                <div className="heroLogo">
                    <h1>उपनिषद<span>.</span></h1>
                    <p>study as <span>&</span> what you want</p>
                </div>
                <div className="sideBarNav">
                    <SideBarNav heading={"Home"} icon={<i class="fa fa-home" aria-hidden="true"></i>} />
                    <SideBarNav heading={"My Courses"} icon={<i class="fa fa-book" aria-hidden="true"></i>} />
                    <SideBarNav heading={"Favourite"} icon={<i class="fa fa-heart" aria-hidden="true"></i>} />
                    <SideBarNav heading={"Test"} icon={<i class="fa fa-list-alt" aria-hidden="true"></i>} />
                    <SideBarNav heading={"Achievements"} icon={<i class="fa fa-trophy" aria-hidden="true"></i>} />
                    <SideBarNav heading={"Certificate"} icon={<i class="fa fa-certificate" aria-hidden="true"></i>} />
                    <SideBarNav heading={"Settings"} icon={<i class="fa fa-cog" aria-hidden="true"></i>} />
                </div>
                <div className="userDataContainer">
                    <div className="userData">
                        <img className="footer-image" src="userimage.png" alt="Upnishad Deo profile" />
                        <div className="footer-username">
                            <p><span>Upnishad Deo</span></p>
                            <p>Premium Account</p>
                        </div>
                        <div className="footer-icon">
                            <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="userDataDesc">
                        <p>Current Score - <span>379/400</span></p>
                        <p>Activity Status - <span>4 out of 7 days</span></p>
                        <p>next date of submission- <span> 3rd May</span></p>
                    </div>
                </div>

            </div>
        )
    }
}

export default SideBar
