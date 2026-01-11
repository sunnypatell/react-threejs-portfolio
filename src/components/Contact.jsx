"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { Toaster, toast } from "react-hot-toast"
import Confetti from "react-confetti"
import ReCAPTCHA from "react-google-recaptcha"

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faEnvelope, faComment, faPaperPlane, faSpinner, faPhone } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
  const formRef = useRef()
  const captchaRef = useRef()
  const [captchaToken, setCaptchaToken] = useState(null)
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener("resize", detectSize)
    return () => {
      window.removeEventListener("resize", detectSize)
    }
  }, [])

  useEffect(() => {
    if (showConfetti) {
      document.body.style.overflowX = "hidden"
    } else {
      document.body.style.overflowX = ""
    }

    return () => {
      document.body.style.overflowX = ""
    }
  }, [showConfetti])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields before submitting. ⚠️", {
        duration: 3000,
        position: "bottom-right",
      })
      return
    }

    if (!captchaToken) {
      toast("Hold up! Gotta make sure you're not a spam bot, checkmark the CAPTCHA! 🧠🤖", {
        icon: "🛡️",
        duration: 3500,
        position: "bottom-right",
      })
      return
    }

    setLoading(true)

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Sunny Patel",
          from_email: form.email,
          to_email: "sunnypatel124555@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAIL_JS_ACCESS_TOKEN,
      )
      .then(
        () => {
          setLoading(false)
          setSuccess(true)
          setForm({ name: "", email: "", message: "" })
          toast.success("Message sent successfully!", {
            duration: 3000,
            position: "bottom-right",
          })
          setShowConfetti(true)
          setCaptchaToken(null)
          captchaRef.current.reset()
          setTimeout(() => {
            setSuccess(false)
            setShowConfetti(false)
          }, 5000)
        },
        (error) => {
          setLoading(false)
          console.error(error)
          toast.error("Something went wrong. Please try again.", {
            duration: 3000,
            position: "bottom-right",
          })
        },
      )
  }

  const handleConfettiComplete = useCallback(() => {
    setShowConfetti(false)
  }, [])

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden no-select`}>
      <Toaster />
      {showConfetti && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={false}
          numberOfPieces={windowDimension.width > 768 ? 200 : 100}
          onConfettiComplete={handleConfettiComplete}
        />
      )}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-tertiary/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]"
      >
        <div className="flex justify-between items-center mb-4">
          <p className={styles.sectionSubText}>Get in touch</p>
          <a
            href="tel:+14372161611"
            className="text-purple-400 hover:text-purple-300 transition-all duration-300 flex items-center gap-2 hover:gap-3 group"
          >
            <FontAwesomeIcon icon={faPhone} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-medium">(437) 216-1611</span>
          </a>
        </div>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex-1">
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4 flex items-center gap-2">
                  <FontAwesomeIcon icon={faUser} className="text-purple-400" />
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-black-100/50 backdrop-blur-sm py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border-2 border-white/20 font-medium transition-all duration-300 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 focus:bg-black-100/70 hover:border-white/30"
                />
              </label>
            </div>
            <div className="flex-1">
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4 flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} className="text-purple-400" />
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="bg-black-100/50 backdrop-blur-sm py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border-2 border-white/20 font-medium transition-all duration-300 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 focus:bg-black-100/70 hover:border-white/30"
                />
              </label>
            </div>
          </div>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faComment} className="text-purple-400" />
              Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hey Sunny, love the website! I'd like to chat about some opportunities you might like! 🎉"
              className="bg-black-100/50 backdrop-blur-sm py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border-2 border-white/20 font-medium transition-all duration-300 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 focus:bg-black-100/70 hover:border-white/30 resize-none"
            />
          </label>

          <div className="flex justify-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                onChange={(token) => setCaptchaToken(token)}
                theme="dark"
                ref={captchaRef}
              />
            </div>
          </div>
          <span className="text-xs text-gray-400 text-center -mt-4">Protected by reCAPTCHA Enterprise. ⚔️</span>

          <button
            type="submit"
            className="relative bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden group"
            disabled={loading}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} spin className="text-xl" />
            ) : success ? (
              <>
                <span>Sent Successfully</span>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </>
            ) : (
              <>
                <span>Send Message</span>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </>
            )}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
