// Section2.js
import React from 'react';
import { Parallax } from 'react-scroll-parallax';

export default function Section2() {
  return (
    <section className="bg-lirelative md:w-full md:h-screen bg-[#040e15]">
      <Parallax translateY={[-10, 10]}>
        <div className="flex flex-col gap-6 items-center justify-center md:pt-48 md:p-28">
          <center className="text-2xl md:text-6xl font-bold bg-gradient-to-r from-cyan-200 bg-[#78D3E3] text-transparent bg-clip-text md:pb-10">
            What is aws cloud club adani?
          </center>
          <span className="text-xl md:text-2xl bg-gradient-to-r from-cyan-200 bg-[#78D3E3] text-transparent text-center bg-clip-text">
            AWS Cloud Club at Adani University is a student-led community focused on cloud computing, AWS technologies, and career growth in cloud-related fields. The club connects students with industry experts and AWS professionals through guest lectures and networking events. Members get opportunities to work on real-world projects and enhance their cloud skills. It fosters collaboration, innovation, and learning in cloud computing among university students.
          </span>
        </div>
      </Parallax>
    </section>
  );
}
