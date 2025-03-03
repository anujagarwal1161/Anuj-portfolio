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
        <div className="mt-6 lgl:mt-14 w-full h-[1500px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Technology in Computer Science and Engineering"
            subTitle="JSS Academy Of Technical Education, Noida (2020 - 2024)"
            result="8.12/10"
            des="I hold a B.Tech in Computer Science and Engineering, where I gained a strong foundation in software development, data structures & algorithms, databases, and system design. Throughout my studies, I worked on real-world projects, problem-solving, and emerging technologies like AI, cloud computing, and cybersecurity. My education has equipped me with the technical expertise and analytical mindset to develop scalable and efficient software solutions."
          />
          <ResumeCard
            title="High School(10TH)"
            subTitle="BLUE BELLS GROUP OF SCHOOLS (2017 - 2018)"
            result="86.66%"
            des="During my high school education, I built a strong foundation in mathematics, science, and logical reasoning, which fueled my interest in technology and programming. This phase played a crucial role in shaping my analytical and problem-solving skills, setting the stage for my journey into computer science and software development"
          />
          <ResumeCard
            title="INTERMIDIATE(12TH)"
            subTitle="JAI ACADEMY (2019 - 2020)"
            result="93%"
            des="In my 12th-grade education, I specialized in science with mathematics, strengthening my understanding of physics, chemistry, and advanced mathematics. This period helped me develop critical thinking, problem-solving abilities, and a deep interest in programming, which later guided me toward pursuing computer science and engineering."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1500px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer"
            subTitle="Pelocal Fintech Private Limited - (2024 - Present)"
            result="Noida"
            des="Developed a standalone authentication backend, focusing extensively on authentication and authorization processes. Mycontributions included designing and implementing robust authentication services to enhance security and streamline userverification.Developed a comprehensive leave management system, streamlining the process for requesting, approving, and tracking employee leave. This system enhanced operational efficiency and ensured accurate leave records.Optimized DTC and DMRC systems by implementing caching strategies with Redis and enhancing performance through load balancing. This approach improved data retrieval speeds and system reliability, ensuring more efficient and scalable operations."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education