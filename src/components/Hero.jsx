import React, { useState, useEffect } from 'react';
import { ArrowDownIcon, DocumentArrowDownIcon, EyeIcon } from '@heroicons/react/24/outline';
import { profileData } from '../data/profile';

// ✅ Import your profile image
import profilePic from '../assets/profile-portfolio.png';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [currentQuote, setCurrentQuote] = useState('');

  const typingTexts = profileData.hero.typingText;

  const qaQuotes = [
    "Ooh, facing bugs in production?",
    "Need a QA to safeguard your release?",
    "Want to hire someone to break it before your users do?",
    "Struggling with automation coverage?",
    "Looking for someone to ensure your website never crashes?",
    "Bugs love hiding… QA loves finding them!",
    "Hire QA → Ship quality 🚀",
  ];

  useEffect(() => {
    setCurrentQuote(qaQuotes[Math.floor(Math.random() * qaQuotes.length)]);
    const interval = setInterval(() => {
      setCurrentQuote(qaQuotes[Math.floor(Math.random() * qaQuotes.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = typingTexts[currentIndex];
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, typingTexts]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary-100/20 to-secondary-100/20 dark:from-primary-900/10 dark:to-secondary-900/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-accent-100/20 to-primary-100/20 dark:from-accent-900/10 dark:to-primary-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="space-y-8">
            {/* Dynamic QA Quote */}
            <div className="space-y-2">
              <p className="text-lg sm:text-xl text-primary-600 dark:text-primary-400 font-medium animate-fade-in">
                {currentQuote}
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white animate-slide-up">
                <span className="text-gradient">{profileData.name}</span>
              </h1>
            </div>

            {/* Dynamic Title */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200">
                {profileData.hero.headline}
              </h2>
              <div className="text-xl sm:text-2xl lg:text-3xl text-primary-600 dark:text-primary-400 font-medium min-h-[2.5rem] flex items-center justify-center">
                <span>Automating Quality for </span>
                <span className="ml-2 font-semibold">
                  {displayText}
                  <span className={`typing-cursor ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
                </span>
              </div>
            </div>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in">
              {profileData.hero.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {profileData.hero.subheadline.split(' · ').map((tech, index) => (
                <span
                  key={index}
                  className="skill-badge transform hover:scale-105 transition-transform duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <a
                href={profileData.resume.downloadUrl}
                download
                className="btn-primary flex items-center space-x-2"
              >
                <DocumentArrowDownIcon className="h-5 w-5" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => scrollToSection('projects')}
                className="btn-secondary flex items-center space-x-2"
              >
                <EyeIcon className="h-5 w-5" />
                <span>View My Work</span>
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <button
                onClick={() => scrollToSection('about')}
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-primary-600 dark:text-primary-400 hover:bg-white/20 transition-all duration-300"
                aria-label="Scroll to about section"
              >
                <ArrowDownIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Profile Image */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary-200 to-secondary-200 dark:from-primary-800 to-secondary-800 p-1">
          <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
            <img 
              src={profilePic}
              alt="Lakshya Sharma"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
