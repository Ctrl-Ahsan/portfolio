import styled from "styled-components"
import pfp from "../assets/pfp.png"
import map from "../assets/map.jpg"
import resume from "../assets/resume.pdf"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineDocumentText } from "react-icons/hi"
import TypewriterComponent from "typewriter-effect"

const IdentityCard = () => {
    const IdentityContainer = styled.div`
        background-color: #121212;
        border-radius: 20px;
        box-shadow: 0px 0px black;

        width: 60%;
        height: auto;
        z-index: 1;

        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 30px auto;
        padding: 10px;
        padding-bottom: 20px;

        color: white;

        @media screen and (max-width: 550px) {
            width: 95%;
        }
        @media screen and (max-width: 1024px) {
            width: 70%;
        }

        & .pfp {
            width: 150px;
            border-radius: 360px;
            margin-top: 40px;
            margin-bottom: 0px;

            @media screen and (max-width: 550px) {
                width: 100px;
            }
        }

        & .panel {
            background-color: rgb(60, 60, 60);
            border-radius: 10px;
            color: white;
            display: flex;
            flex-direction: column;
            width: 90%;
            min-height: 45px;
            margin-top: 20px;
            padding-top: 10px;
            padding-bottom: 10px;
            justify-content: center;
            text-align: left;
            font-family: Roboto Mono, Arial;
            font-weight: 500;

            img {
                border-radius: 10px;
                width: 30%;
                max-width: 100px;
                margin-right: 10px;
            }
        }

        & .panelHeading {
            padding-left: 20px;
            padding-bottom: 1px;
            font-size: 1em;
        }

        & .panelText {
            padding-left: 20px;
            padding-right: 20px;
            color: dodgerblue;
            font-size: 1.1em;
        }
    `

    return (
        <IdentityContainer>
            <div>
                <img src={pfp} alt="PFP" className="pfp" />
            </div>
            <div>
                <div style={{ fontWeight: "700", fontSize: "3em" }}>Ahsan</div>
                <div
                    style={{
                        fontSize: "1.5em",
                        paddingTop: "5px",
                        paddingBottom: "15px",
                        color: "grey",
                    }}
                >
                    Software Engineer
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                    }}
                >
                    <a href={resume} target="_blank" rel="noopener noreferrer">
                        <HiOutlineDocumentText style={{ fontSize: "2.8em" }} />
                    </a>
                    <a
                        href={"https://github.com/Ctrl-Ahsan"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github"
                    >
                        <FaGithub
                            style={{ fontSize: "2.5em", paddingRight: "5px" }}
                        />
                    </a>
                    <a
                        href={"https://linkedin.com/in/ahsania"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin style={{ fontSize: "2.5em" }} />
                    </a>
                </div>
            </div>
            <div className="panel">
                <div className="panelHeading">about</div>
                <div className="panelText">
                    Hi, I'm a recent Computer Science graduate from Queen’s
                    University
                </div>
            </div>
            <div className="panel">
                <div className="panelHeading">professional experience</div>
                <div className="panelText">1 year</div>
            </div>
            <div className="panel">
                <div className="panelHeading">currently</div>
                <div className="panelText">
                    Actively seeking a full-time software developer position
                </div>
            </div>
            <div className="panel">
                <div className="panelHeading">interests</div>
                <div className="panelText">
                    <TypewriterComponent
                        options={{
                            delay: 50,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .changeDeleteSpeed(10)
                                .typeString(
                                    "Fascinated by AI and its power to build smarter products"
                                )
                                .pauseFor(4000)
                                .deleteChars(56)
                                .typeString(
                                    "Excited about VR/AR and the future of digital interaction"
                                )
                                .pauseFor(4000)
                                .deleteChars(57)
                                .typeString(
                                    "Passionate about building exceptional digital experiences"
                                )
                                .start()
                        }}
                    />
                </div>
            </div>
            <div
                className="panel"
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <div>
                    <div className="panelHeading">location</div>
                    <div className="panelText" style={{ color: "white" }}>
                        Toronto, Ontario
                        <br />
                        Canada
                    </div>
                </div>
                <img src={map} alt="map" />
            </div>
        </IdentityContainer>
    )
}

export default IdentityCard
