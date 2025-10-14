"use client"

import { useRef, useEffect } from "react"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion, useAnimation, useInView } from "framer-motion"

import "react-vertical-timeline-component/style.min.css"

import { styles } from "../styles"
import { education } from "../constants"
import { SectionWrapper } from "../hoc"

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
        color: "#fff",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #1e1b4b" }}
      date={education.date}
      iconStyle={{
        background: education.iconBg,
        boxShadow: "0 0 0 4px #1e1b4b, 0 4px 12px rgba(0, 0, 0, 0.3)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={education.icon || "/placeholder.svg"}
            alt={education.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-2xl font-bold tracking-tight">{education.title}</h3>
        <p className="text-purple-300 text-base font-semibold mt-1">{education.company_name}</p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {education.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="text-gray-200 text-sm pl-1 tracking-wide leading-relaxed">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Education = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <div ref={sectionRef}>
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <p className={`${styles.sectionSubText} text-center`}>What I have Studied so far</p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h2 className={`${styles.sectionHeadText} text-center`}>Education.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard key={`experience-${index}`} education={education} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default SectionWrapper(Education, "education")
