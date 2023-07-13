import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BTECH in Computer Science"
            subTitle="JSS Academy Of Technical Education, Noida (2020 - 2024)"
            result="8.21/10"
            // des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="High School(10TH)"
            subTitle="BLUE BELLS GROUP OF SCHOOLS (2017 - 2018)"
            result="86.66%"
            // des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="INTERMIDIATE(12TH)"
            subTitle="JAI ACADEMY (2019 - 2020)"
            result="93%"
            // des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="WEB DEVELOPER"
            subTitle="CARIKATURE INDIA - (2023 - Present)"
            result="REMOTE"
            des="Primarily I work in ReactJS and as a fresher currently I have been assigned some tasks in React and Javascript."
          />
          <ResumeCard
            title="FULL STACK DEVELOPER"
            subTitle="MEDZO TECHNOLOGIES - (2022 - 2023)"
            result="REMOTE"
            des="Developed a frontend of the Animal Welfare Website using ReactJS and Redux.Also integrated payment gateway using Razorpay.Worked under the mentors who are graduates from the top IIT's and NIT's."
          />
          <ResumeCard
            title="FULL STACK DEVELOPER"
            subTitle="AVIZ EVENTS - (2021 - 2022)"
            result="Remote"
            des="Developed a frontend of the event management website in ReactJS and Redux.Used Firebase for backend.Worked with experience team."
          />
          <ResumeCard
            title="TECHNICAL HEAD"
            subTitle="MICROSOFT MOBILE INNOVATION LABS - (2020 - PRESENT)"
            result="College Society"
            des="Lead a team of web developers and together we create amazing projects.Learned Management Skills and organized various workshops and events in the college."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education