import React, { Component } from 'react'
import Tilt from 'react-vanilla-tilt'
import "../css/mainContainer.css"
import SideBar from './SideBar'



class SuubjectCard extends Component {
    render() {
        return (
            <div className="subjectCard">
                <div className="cardHeading">
                    <p>{this.props.CardHeading}</p>
                    <p><span>{this.props.cardPara} hours of <br /> video tutorials</span></p>
                </div>
                <div className="cardReviews">
                    <div className="ratings">
                        <p>{this.props.ratings}</p>
                    </div>
                    <div className="reviewsImage">
                        <img src="review.png" />
                    </div>
                </div>
            </div>
        )
    }
}

class TaskTab extends Component {
    render() {
        return (
            <div className="taskContainer">
                <div className="taskHeading">
                    <div className="taskIcons">
                        {this.props.icon}
                    </div>
                    <div className="flexHeading">
                        <h2>{this.props.TaskHeading}</h2>
                        <p>{this.props.TaskDesc}</p>
                    </div>
                </div>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
        )
    }
}


export class MainConatiner extends Component {
    render() {
        return (
            <div className="mainContainer">
                <div className="firstCol">
                    <SideBar />
                </div>
                <div className="secCol">
                    <div className="centerContainer">
                        <div className="centerContainer1">
                            <h2>Hi Upnishad,</h2>
                            <h1>What will you learn today?</h1>
                        </div>
                        <div className="mainImage">
                            <img src="image2.gif" alt="subjects" />
                        </div>
                        <div className="thirdRow" >
                            <h1>Your learning path</h1>
                            <div className="thirdRowCard">
                                <SuubjectCard CardHeading={"Intro to React"} cardPara={`12`} ratings={"423 Students"} />
                                <SuubjectCard CardHeading={"Become a manager"} cardPara={`8`} ratings={"648 Students"} />
                                <SuubjectCard CardHeading={"Sketch from A to Z"} cardPara={`24`} ratings={"780 Students"} />
                            </div>

                        </div>
                    </div>
                    <div className="lastContainer">
                        <div className="userStatsHeader">
                            <div className="userStatSearch">
                                <i class="fa fa-search" aria-hidden="true"></i>
                                <p>Search</p>
                            </div>
                            <div className="bellDiv">
                                <i class="fa fa-bell-o" aria-hidden="true"></i>
                            </div>

                        </div>
                        <div className="userStatsCenter">
                            <div className="userStatsSecHead">Course in progress</div>
                            <TaskTab icon={<i class="fa fa-free-code-camp" aria-hidden="true"></i>} TaskHeading={"Build your first application"} TaskDesc={"CodeIgnitor"} />
                            <TaskTab icon={<i class="fa fa-diamond" aria-hidden="true"></i>} TaskHeading={"Build something beautiful"} TaskDesc={"sketch"} />
                            <TaskTab icon={<i class="fa fa-google-wallet" aria-hidden="true"></i>} TaskHeading={"Firebase on Android: cloud Fire"} TaskDesc={"Firebase"} />
                            <TaskTab icon={<i class="fa fa-pinterest-p" aria-hidden="true"></i>} TaskHeading={"Creating Custom Animations"} TaskDesc={"principle"} />
                        </div>
                        <div className="userStatslast">
                            <h2>Your learning point</h2>
                            <img src="graphImage.png" alt="student time stat" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainConatiner

