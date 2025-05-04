"use client";
import SectionWrapper from "./SectionWrapper";

import { ContactInformation } from "@/data/contact";

const ContactMe = () => {
  return (
    <SectionWrapper heading="Contact Me">
      {/* Contact Information */}
      <p className=" mb-6 text-center">
        Feel free to reach out through any of these platforms. I&apos;m always
        open to discussing new projects, creative ideas, or opportunities to be
        part of your vision.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {ContactInformation.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`
        flex items-center p-4 rounded-xl transition-all
        bg-gradient-to-brfrom-gray-800 to-gray-700
        border  border-gray-600
        hover:shadow-lg hover:-translate-y-1
        w-full sm:w-48
        
      `}
          >
            <contact.icon className={`text-2xl mr-3 ${contact.color}`} />
            <span className="font-medium ">{contact.name}</span>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
};

ContactMe.displayName = "ContactMe";

export default ContactMe;
