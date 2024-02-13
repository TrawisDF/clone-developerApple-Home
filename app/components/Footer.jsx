"use client";
import React, { useState } from "react";

function Footer() {
  const [showPlatform, setShowPlatform] = useState("hidden");
  const [showTools, setShowTools] = useState("hidden");
  const [showTopics, setShowTopics] = useState("hidden");
  const [showResources, setShowRescouces] = useState("hidden");
  const [showSupports, setShowSupports] = useState("hidden");
  const [showAccount, setShowAccount] = useState("hidden");
  const [showPrograms, setShowPrograms] = useState("hidden");
  const [showEvents, setShowEvents] = useState("hidden");

  const platformHandler = (e) => {
    if (showPlatform === "hidden") {
      setShowPlatform("block");
    } else {
      setShowPlatform("hidden");
    }
  };

  const toolsHandler = (e) => {
    if (showTools === "hidden") {
      setShowTools("block");
    } else {
      setShowTools("hidden");
    }
  };

  const topicsHandler = (e) => {
    if (showTopics === "hidden") {
      setShowTopics("block");
    } else {
      setShowTopics("hidden");
    }
  };

  const resourcesHandler = (e) => {
    if (showResources === "hidden") {
      setShowRescouces("block");
    } else {
      setShowRescouces("hidden");
    }
  };

  const supportsHandler = (e) => {
    if (showSupports === "hidden") {
      setShowSupports("block");
    } else {
      setShowSupports("hidden");
    }
  };

  const accountHandler = (e) => {
    if (showAccount === "hidden") {
      setShowAccount("block");
    } else {
      setShowAccount("hidden");
    }
  };

  const programsHandler = (e) => {
    if (showPrograms === "hidden") {
      setShowPrograms("block");
    } else {
      setShowPrograms("hidden");
    }
  };

  const eventsHandler = (e) => {
    if (showEvents === "hidden") {
      setShowEvents("block");
    } else {
      setShowEvents("hidden");
    }
  };

  const rotateCheck = (x) => {
    if (x === "block") {
      return "rotate-45";
    } else {
      return null;
    }
  };

  return (
    <div className="px-2 lg:p-0 pt-2 mx-auto border-t-2 max-w-[746px] w-full lg:max-h-[900px]  lg:flex lg:flex-col lg:flex-wrap ">
      <div
        className="lg:pl-5 lg:pt-10 border-b-2 lg:border-none hover:cursor-pointer lg:hover:cursor-default"
        onClick={platformHandler}
      >
        <div className="flex justify-between ">
          <h3 className=" font-normal lg:font-semibold">Platforms</h3>
          <div
            className={`lg:hidden ${rotateCheck(
              showPlatform
            )} transition ease-in-out delay-150`}
          >
            +
          </div>
        </div>
        <div className={`${showPlatform} lg:block`}>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">iOS</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">iPadOS</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">macOS</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">tvOS</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">visionOS</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">watchOS</p>
          </a>
        </div>
      </div>
      <div
        className="lg:pl-5 lg:pt-10 border-b-2  lg:border-none hover:cursor-pointer lg:hover:cursor-default"
        onClick={toolsHandler}
      >
        <div className="flex justify-between">
          <h3 className=" font-normal lg:font-semibold ">Tools</h3>
          <div
            className={`lg:hidden ${rotateCheck(
              showTools
            )} transition ease-in-out delay-150`}
          >
            +
          </div>
        </div>
        <div className={`${showTools} lg:block`}>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Swift</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">SwiftUI</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Swift Playground</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Test Flight</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Xcode</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Xcode Clound</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">SF Symbols</p>
          </a>
        </div>
      </div>
      <div
        className="lg:pl-5 lg:pt-10 border-b-2 lg:border-none hover:cursor-pointer lg:hover:cursor-default"
        onClick={topicsHandler}
      >
        <div className="flex justify-between">
          <h3 className=" font-normal lg:font-semibold ">
            Topics & Technologies
          </h3>
          <div
            className={`lg:hidden ${rotateCheck(
              showTopics
            )} transition ease-in-out delay-150`}
          >
            +
          </div>
        </div>
        <div className={`${showTopics} lg:block`}>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Accessibility</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Accessories</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">App Extensions</p>
          </a>
          <a href="#" className="ho	ver:underline leading-8">
            <p className="text-[12px]">App Store</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Audio & Video</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Augmented Reality</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Business</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Design</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Distribution</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Education</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Fonts</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Games</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Health & Fitness</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">In-App Purchase</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Localization</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Maps & Location</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Machine Learning</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Open Source</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Security</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Safari & Web</p>
          </a>
        </div>
      </div>
      <div
        className="lg:pl-5 lg:pt-10 border-b-2 lg:border-none hover:cursor-pointer lg:hover:cursor-default"
        onClick={resourcesHandler}
      >
        <div className="flex justify-between">
          <h3 className=" font-normal lg:font-semibold">Resources</h3>
          <div
            className={`lg:hidden ${rotateCheck(
              showResources
            )} transition ease-in-out delay-150`}
          >
            +
          </div>
        </div>
        <div className={`${showResources} lg:block`}>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Documentation</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">iPadOS</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Curriculum</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Downloads</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Forums</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Videos</p>
          </a>
        </div>
      </div>
      <div
        className="lg:pl-5 lg:pt-10 border-b-2 lg:border-none hover:cursor-pointer lg:hover:cursor-default"
        onClick={supportsHandler}
      >
        <div className="flex justify-between">
          <h3 className=" font-normal lg:font-semibold ">Support</h3>
          <div
            className={`lg:hidden ${rotateCheck(
              showSupports
            )} transition ease-in-out delay-150`}
          >
            +
          </div>
        </div>
        <div className={`${showSupports} lg:block`}>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Support Articles</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Contact Us</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Bug Reporting</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">System Status</p>
          </a>
        </div>
      </div>
      <div
        className="lg:pl-5 lg:pt-10 border-b-2 lg:border-none hover:cursor-pointer lg:hover:cursor-default"
        onClick={accountHandler}
      >
        <div className="flex justify-between">
          <h3 className=" font-normal lg:font-semibold ">Account</h3>
          <div
            className={`lg:hidden ${rotateCheck(
              showAccount
            )} transition ease-in-out delay-150`}
          >
            +
          </div>
        </div>
        <div className={`${showAccount} lg:block`}>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Apple Developer</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">App Store Connect</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Certificates, IDs, & Profiles</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Feedback Assistant</p>
          </a>
        </div>
      </div>
      <div
        className="lg:pl-5 lg:pt-10 border-b-2 lg:border-none hover:cursor-pointer lg:hover:cursor-default"
        onClick={programsHandler}
      >
        <div className="flex justify-between">
          <h3 className=" font-normal lg:font-semibold ">Programs</h3>
          <div
            className={`lg:hidden ${rotateCheck(
              showPrograms
            )} transition ease-in-out delay-150`}
          >
            +
          </div>
        </div>
        <div className={`${showPrograms} lg:block`}>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Apple Developer Program</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Apple Developer Enterprise Program</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">App Store Small Business Program</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">MFi Program</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">News Partner Program</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Video Partner Program</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Security Bounty Program</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Security Research Device Program</p>
          </a>
        </div>
      </div>
      <div
        className="lg:pl-5 lg:pt-10 border-b-2 lg:border-none hover:cursor-pointer lg:hover:cursor-default"
        onClick={eventsHandler}
      >
        <div className="flex justify-between">
          <h3 className=" font-normal lg:font-semibold ">Events</h3>
          <div
            className={`lg:hidden ${rotateCheck(
              showEvents
            )} transition ease-in-out delay-150`}
          >
            +
          </div>
        </div>
        <div className={`${showEvents} lg:block`}>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Meet with Apple Experts</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">App Accelerators</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">App Store Awards</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Apple Design Awards</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Apple Developer Academies</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">Entrepreneur Camp</p>
          </a>
          <a href="#" className="hover:underline leading-8">
            <p className="text-[12px]">WWDC</p>
          </a>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;
