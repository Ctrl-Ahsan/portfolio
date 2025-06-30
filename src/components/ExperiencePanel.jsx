import styled from "styled-components"
import { RiSuitcaseLine } from "react-icons/ri"
import soti from "../assets/soti.png"

const ExperiencePanel = () => {
    const ExperienceContainer = styled.div`
        width: 85%;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 30px auto;

        .heading {
            margin-top: 50px;
            margin-bottom: 75px;
            font-size: 3em;
            font-weight: 500;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        .item {
            border-radius: 20px;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
            padding: 40px;
            max-width: 600px;
            font-size: 0.9em;
            text-align: left;
            transition: transform 0.3s, box-shadow 0.3s;

            .image {
                display: flex;
                justify-content: center;
                width: 100%;
                margin: 20px 0;
            }

            .title {
                font-weight: 700;
                font-size: 1.8em;
            }

            .subtitle {
                color: #606060;
                font-size: 1.2em;
                margin-bottom: 15px;
            }

            .description {
                font-size: 1.1em;
                line-height: 1.5;
            }

            .techStack {
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
                margin: 15px 0;
            }

            .tech {
                background-image: linear-gradient(#45befa, #07aae5);
                color: white;
                padding: 5px 10px;
                border-radius: 5px;
                font-size: 0.9em;
                font-weight: 600;
            }

            .bullets {
                margin-top: 15px;
                list-style-type: disc;
                padding-left: 20px;
            }

            .bullet {
                margin-bottom: 10px;
            }
        }
    `

    return (
        <ExperienceContainer>
            <div className="heading">
                <RiSuitcaseLine />
                <br />
                Experience
            </div>
            <div className="list">
                <div className="item">
                    <div className="image">
                        <img src={soti} />
                    </div>
                    <div className="title">Software Developer Intern</div>
                    <div className="subtitle">January 2023 - December 2023</div>
                    <div className="techStack">
                        <div className="tech">TypeScript</div>
                        <div className="tech">Angular</div>
                        <div className="tech">C#</div>
                        <div className="tech">.NET</div>
                        <div className="tech">SQL</div>
                    </div>
                    <div className="description">
                        <ul className="bullets">
                            <li className="bullet">
                                Participated in the migration of legacy codebase
                                to modern Angular, reducing code complexity and
                                improving maintainability
                            </li>
                            <li className="bullet">
                                Developed a reporting feature in a distributed
                                system, enabling users to schedule and automate
                                data insights
                            </li>
                            <li className="bullet">
                                Localized flagship product for Japanese market,
                                enhancing accessibility and usability for
                                international clients
                            </li>
                            <li className="bullet">
                                Conducted thorough unit and integration testing
                                using Jasmine, identifying and resolving bugs
                                early in the agile development lifecycle
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </ExperienceContainer>
    )
}

export default ExperiencePanel
