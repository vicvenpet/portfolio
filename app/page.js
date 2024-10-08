import React from "react";
import { Playfair_Display, Lato } from 'next/font/google'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
})

export default function AboutMe() {
  return (
    <div className={`max-w-4xl mx-auto px-4 py-12 ${lato.variable} ${playfair.variable} font-sans`}>
      <header className="mb-12">
        <h1 className="text-5xl font-bold mb-4 text-primary font-foreguard">who?</h1>
        <div className="flex space-x-6 sm:flex-row sm:items-start sm:space-x-6">
          <Avatar className="size-20">
            <AvatarImage src="https://github.com/vicvenpet.png" alt="@vicvenpet" />
            <AvatarFallback>VP</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-3xl font-semibold mb-2 font-foreground">Víctor Petkov</h2>
            <p className="text-xl text-muted-foreground">high-tech work</p>
          </div>
        </div>
      </header>
      
      <main className="space-y-8">
        <section>
          <p className="text-lg font-foreground">
            Welcome to my digital space! Almost no maintenance lmao.<br /> 
            I study web development in <span className='font-bold'>Spain, VA.</span>
          </p>
        </section>
        
        <section>
          <h3 className="text-2xl font-semibold mb-4 font-foreground">Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'JavaScript (ES6+)','TypeScript','React & Next.js','Node.js & Express','Python & Django','AWS & Cloud'
            ].map((skill, index) => (
              <div key={index} className="bg-secondary p-3 rounded-md text-center">
                <span className="font-semibold">{skill}</span>
              </div>
            ))}
          </div>
        </section> 
        
        <section>
          <h3 className="text-2xl font-semibold mb-3 font-foreground">Beyond Coding</h3>
          <p className="text-lg font-foreground">
            I&apos;ve been programming for years, so if you find any program or line of code that can be abominable, I wouldn&apos;t be surprised, be careful lol.
          </p>
        </section>
        
        <section>
          <p className="text-lg font-foreground mb-6">
            If you want to talk, email me to: <span className='underline'>hello [at] this website</span>. 
          </p>
        </section>

        <section className="flex space-x-4">
          <a
            href="https://github.com/vicvenpet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition duration-300"
          >
            <FaGithub size={35} />
          </a>
          <a
            href="https://www.linkedin.com/in/vicvenpet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition duration-300"
          >
            <FaLinkedin size={35} />
          </a>
        </section>
      </main>
    </div>
  )
}