import styled from "styled-components"
import { BsMailbox } from "react-icons/bs"
import { FaUserCircle, FaEnvelope } from "react-icons/fa"
import { useState } from "react"
import emailjs from "emailjs-com"
import Swal from "sweetalert2"
import Spinner from "./Spinner"

const ContactPanel = () => {
    const [submit, setSubmit] = useState(false)
    const Form = () => {
        const [name, set_name] = useState("")
        const [email, set_email] = useState("")
        const [message, set_message] = useState("")

        const handleName = (e) => {
            set_name(e.target.value)
        }
        const handleEmail = (e) => {
            set_email(e.target.value)
        }
        const handleMessage = (e) => {
            set_message(e.target.value)
        }

        const handleSubmit = (e) => {
            setSubmit(true)
            e.preventDefault()
            emailjs
                .sendForm(
                    "service_o2hkgsn",
                    "template_qskqa6q",
                    e.target,
                    "Ec62-6gaZWpu-S_FN"
                )
                .then(
                    (result) => {
                        setSubmit(false)
                        Swal.fire({
                            icon: "success",
                            title: "Your message has been sent!",
                            confirmButtonColor: "#24baf0",
                        })
                        set_name("")
                        set_email("")
                        set_message("")
                    },
                    (error) => {
                        console.log(error.text)
                        Swal.fire({
                            icon: "error",
                            title: "Ooops, something went wrong",
                            text: error.text,
                            confirmButtonColor: "#24baf0",
                        })
                    }
                )
        }

        return (
            <form onSubmit={handleSubmit}>
                <label>
                    <FaUserCircle
                        size={20}
                        style={{ marginRight: "5px", verticalAlign: "middle" }}
                    />
                    Name
                </label>
                <input
                    required
                    key="input1"
                    className="form"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={name}
                    onChange={handleName}
                />

                <label>
                    <FaEnvelope
                        size={18}
                        style={{
                            marginRight: "6px",
                            marginLeft: "2px",
                            verticalAlign: "middle",
                        }}
                    />
                    Email
                </label>
                <input
                    required
                    key="input2"
                    className="form"
                    type="email"
                    name="email"
                    placeholder="someone@example.com"
                    value={email}
                    onChange={handleEmail}
                />

                <label>Message</label>
                <textarea
                    required
                    key="input3"
                    className="form"
                    name="message"
                    placeholder="Hi Ahsan!"
                    value={message}
                    onChange={handleMessage}
                    rows="10"
                    style={{ resize: "none" }}
                ></textarea>

                {submit && <Spinner />}
                {!submit && <button type="submit">Send</button>}
            </form>
        )
    }

    const ContactPanelContainer = styled.div`
        display: flex;
        flex-direction: column;

        & .heading {
            margin-top: 50px;
            margin-bottom: 60px;
            font-size: 3em;
            font-weight: 500;
        }

        & form {
            display: flex;
            flex-direction: column;
            margin: 10px auto;
            margin-bottom: 75px;
            padding: 20px;
            padding-top: 10px;
            width: 60%;
            max-width: 500px;
            border-radius: 10px;
            background-color: rgb(255, 255, 255, 0.25);
            transition: all 0.3s;
        }

        & .form {
            margin: 10px;
            padding: 10px;
            border-radius: 5px;
            border: grey;
            font-family: inherit;
            font-size: 1em;
        }

        & label {
            text-align: left;
            font-size: 1.1em;
            font-weight: 700;
            vertical-align: bottom;
            padding-top: 10px;
            padding-left: 15px;
        }

        & button {
            width: 100px;
            font-size: 1em;
            margin: 10px auto;
            margin-bottom: 0px;
            padding: 10px;
            border-radius: 5px;
            font-size: 1.4em;
            font-weight: 700;
            font-family: inherit;
            background-image: linear-gradient(#45befa, #07aae5);
            color: white;
            border: none;
            cursor: pointer;
        }
    `

    return (
        <ContactPanelContainer>
            <div className="heading">
                <BsMailbox />
                <br />
                Contact
            </div>
            <Form />
        </ContactPanelContainer>
    )
}

export default ContactPanel
