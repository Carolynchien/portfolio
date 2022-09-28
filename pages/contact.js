import React from 'react'
import styles from '../styles/contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const defaultUserInput = {
  senderName: '',
  email: '',
  dob: '',
  subject: '',
  message: ''
}
export default function Contact() {
  const [isSendingEmail, setisSendingEmail] = useState(false)
  const [emailInput, setEmailInput] = useState(defaultUserInput)
  const { senderName, email, subject, message } = setEmailInput
  const [issent, setIsSent] = useState(false)
  const form = useRef()
  const handleChange = (e) => {
    const { name, value } = e.target

    setEmailInput({ ...emailInput, [name]: value })
  }
  console.log(emailInput)

  const sendEmail = (e) => {
    e.preventDefault()
    console.log('coming')
    emailjs
      .sendForm(
        'service_zuy8w7l',
        'template_y9cyy88',
        form.current,
        'V4s7DsT9W8Xpz6p_L'
      )
      .then(
        (result) => {
          console.log(result.text)
          if (result.text === 'OK') {
            setIsSent(true)
            setTimeout(() => {
              setEmailInput(defaultUserInput)
              setisSendingEmail(false)
              setIsSent(false)
            }, 1500)
          }
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className={styles.contactMainContainer}>
      {isSendingEmail && (
        <div className={styles.emailContainer}>
          <h3>Send me a message</h3>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className={styles.iconX}
            onClick={() => setisSendingEmail(false)}
          />
          <form
            className={styles.formContainer}
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="senderName"
              placeholder="Full name*"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address*"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="message"
              value={message}
              onChange={handleChange}
              required
              rows="100"
              cols="40"
              placeholder="Message"
              className="message"
            />
            <button type="submit">Send Message</button>
          </form>
          {issent && <p>Message sent to Carolyn successfully</p>}
        </div>
      )}

      <div className={styles.contactSecondContainer}>
        <h1>Contact Me</h1>
        {!isSendingEmail && (
          <div className={styles.contactThirdContainer}>
            <div className={styles.contactFourthContainer}>
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
              <h3>By Linkedin</h3>
              <p>Send me a message through Linkedin</p>
              <Link href="https://www.linkedin.com/in/yin-ting-chien/">
                <a target="_blank" className="nav-link">
                  Carolyn&apos;s Linkedin
                </a>
              </Link>
            </div>
            <div className={styles.contactFourthContainer}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              <h3>Send me a Message</h3>
              <p>
                I am happy to answer any questions you might have, look forward
                to hearing from you
              </p>
              <a onClick={() => setisSendingEmail(true)}>Start Here</a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
