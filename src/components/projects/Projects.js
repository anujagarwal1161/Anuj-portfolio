import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard 
          title="Authentication and Authorization Service"
          des=" This project focuses on managing and securing access within a multi-user system involving various roles and permissions. Itincludes API integrations for user authentication, authorization, and business operations. Key components include:User Authentication: Handling user login with phone and MPIN to generate access tokens.Authorization: Determining user types and generating business tokens based on user credentials.Business Management: Providing detailed business information and validating permissions for business-merchantinteractions."
          // src={projectOne}
        />
        <ProjectsCard
          title="Delhi Metro Whatsapp Ticket Booking System"
          des="This project enables seamless metro ticket booking via WhatsApp, enhancing user convenience with a chatbot-based interface. Key features include:User-Friendly Booking: Allows users to book metro tickets by simply chatting on WhatsApp.Payment Integration: Supports secure online payments for hassle-free transactions.QR Code Generation: Generates QR-based digital tickets for easy entry at metro stations.Real-Time Updates: Provides live updates on ticket status, metro schedules, and fare details.Secure & Scalable:Ensures data security while handling a high volume of booking requests efficiently."
          src={projectTwo}
        />
        <ProjectsCard
          title="Mumbai Metro Whatsapp Ticket Booking System"
          des="This project enables hassle-free metro ticket booking via WhatsApp, offering a seamless and automated travel experience. Key features include:Easy Ticket Booking: Users can book metro tickets directly through WhatsApp chat.Integrated Payment System: Secure online payments for quick and convenient transactions.QR Code-Based Tickets: Generates digital QR tickets for smooth entry at metro stations.Live Metro Updates: Provides real-time schedules, fare details, and ticket status notifications.Scalable & Secure: Designed to handle large volumes of bookings with robust security measures."
          src={projectThree}
        />
        <ProjectsCard
          title="Zealicon"
          des="Designed to highlight all events for the Zealicon festival. Provides functionality for purchasing tickets directly through the site.Comprehensive display of all scheduled events with detailed descriptions.Developed and optimized the user interface to enhance usability and engagement.Users can register for an event by clicking on event."
          src={projectThree}
        />
      </div>
    </section>
  );
};

export default Projects;
