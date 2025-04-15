import React, { useState } from "react";
import backgroundVideo from "../assets/shutterstock_1090016551-mar23-low.mp4";
import img_1 from "../assets/industrie-datenanalyse.jpg";
import img_2 from "../assets/illustration-data-privacy-day-green_931878-573359.jpg";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import carousel_img_1 from "../assets/caro_1.jpg";
import carousel_img_2 from "../assets/caro_2.jpg";
import carousel_img_3 from "../assets/caro_3.jpg";
import carousel_img_4 from "../assets/caro_4.jpg";
import carousel_img_5 from "../assets/caro_5.jpg";
import carousel_img_7 from "../assets/caro_7.jpg";

const imageData = [
  {
    src: carousel_img_1,
    alt: "Description 1",
    title: "IMPROVING WOMEN'S HEALTH OUTCOMES ",
    dsc: "We have helped create loT driven digital health platforms for cancer diagnosis and treatment. With our processes tightly integrated to those of our customers, our work in AI/ML (cancer malignancy detection, natural language processing for electronic medical records, Al based analytics on the cloud, Al containerization for on-premise solutions), connectivity and quality have led to better patient outcomes. Our focus in this area extends to supporting local non profit organizations focused on women's health and within our own team supporting women's careers resulting in an industry leading 41% female engineer ratio.",
  },
  {
    src: carousel_img_2,
    alt: "Description 2",
    title: "ADVANCING CT X RAY SOLUTIONS ",
    dsc: "As the COVID-19 pandemic began, our team brought to bear our extensive experience in CT systems development and 3D rendering algorithms to help our customer deploy enhancements to their systems. Our engineers worked at hospitals in the epicenter of the pandemic to get improved COVID specific imaging to doctors and save lives. We also work closely with organizations focused on bringing low cost CT solutions to underserved communities globally.",
  },
  {
    src: carousel_img_3,
    alt: "Description 3",
    title: "ENABLING FASTER, SAFER, AND MORE CONVENIENT SECURITY SOLUTIONS ",
    dsc: "Working with long-term strategic customers, we helped innovate new x-ray systems using depth perception and Al assisted threat detection for luggage, trucks, and other vehicles. We have also helped an aerospace major extract critical operational safety information from live camera feeds using video analytics at the edge.",
  },
  {
    src: carousel_img_4,
    alt: "Description 4",
    title: "FACILITATING ACQUISITIONS IN ENTERPRISE SOFTWARE ",
    dsc: "We have worked with leading financial sponsors to drive the technical integration of multiple enterprise software companies as part of growth strategies. This includes the technical capability to bridge/modify disparate technology stacks, implementing DevOps, and providing flexibility and bandwidth to allow seamless customer support and unwavering focus on the market opportunity.",
  },
  {
    src: carousel_img_5,
    alt: "Description 4",
    title: "PARTNERING IN THE JOURNEY FROM STARTUP TO ENTERPRISE ",
    dsc: "As an extension to the R&D teams of our customers, we have helped rapidly scale software engineering and customer support for start-up growth organizations in enterprise storage. These collaborations span multiple years, including post exit, resulting in consistently modernized product lines that continue to drive revenue and market value.",
  },
  {
    src: carousel_img_7,
    alt: "Description 4",
    title: "ENSURING LEGACY APPLICATION CUSTOMER SATISFACTION ",
    dsc: "By taking over - in some cases entirely - the development, support, and maintenance for previous generation or orphaned product branches, we let our enterprise solutions customers focus on their new initiatives and next generation products. This also enables the end customers of these legacy products - often SMB businesses - continue with their core business and not be forced into costly and distracting technology deployment before they are ready.",
  },
];
const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      title: "Accelerated Innovation",
      color: "bg-blue-500",
      services: [
        "System Modeling and Simulation",
        "Concept Realization and Feasibility",
        "Technology and Design Evaluation",
        "Rapid Prototyping",
        "Algorithm Design",
        "Software/Hardware/Enclosure Prototyping",
        "Product V&V",
        "AI / ML",
      ],
      benefits: [
        "Deep subject matter expertise and domain experience",
        "Ability to integrate cross functional inputs from multiple stakeholders",
        "Detailed focus on cost & practical design considerations",
      ],
    },
    {
      title: "Engineering",
      color: "bg-lime-500",
      services: [
        "Mobile and Web Apps",
        "Cloud Engineering",
        "DevOps Services",
        "Embedded System Design Services",
        "Hardware/ Mechanical Engineering",
        "Cybersecurity Services",
        "Product V&V",
        "AI / ML",
      ],
      benefits: [
        "Accelerated execution",
        "Deeply ingrained adherence to Compliance and Quality processes",
        "Shortening Time-to-Market by taking complete ownership",
      ],
    },
    {
      title: "Post - Production",
      color: "bg-blue-500",
      services: [
        "Product Sustenance and Maintenance",
        "Application and Infra Monitoring",
        "Product Portfolio Rationalization",
        "Self Healing Solutions",
        "Product Obsolescence Management",
        "Manageability Solutions",
        "Product V&V",
        "AI / ML",
      ],
      benefits: [
        "Extensive experience with SLA definitions and compliance",
        "Focus on end-customer experience, quick turnaround",
        "End-to-end ownership, integrated view of product and support",
      ],
    },
  ];
  return (
    <div className="w-full h-full flex flex-col gap-[64px]">
      <section className="relative overflow-hidden h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className="absolute top-0 left-0 w-full h-full z-10"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        ></div>
        <div className="relative z-20 px-[20px] sm:px-[80px] text-white flex flex-col items-start justify-center h-full gap-8">
          <h1 className="text-5xl font-bold">
            Collaborative Innovation from Chip to Cloud
          </h1>
          <p className="max-w-4xl">
            Agiliad is an Engineering and R&D Services company offering a unique
            combination of domain focus and a deep understanding of diverse
            products and technologies from embedded systems to cloud platforms.
            We help customers accelerate their Digital transformation journey
            through collaborative innovation. With our speed, experience, and
            execution intensity, we are a strategic partner to the world's
            largest product companies as well as cutting edge startups,
            delivering impactful outcomes from day one.
          </p>
        </div>
      </section>
      <section className="px-[20px] sm:px-[50px]  lg:px-[80px] ">
        <div className="flex sm:flex-row flex-col items-center gap-8">
          <div className="bg-white w-full flex flex-col items-start px-7 gap-4">
            <div className="w-full ">
              <img src={img_1} className="w-[100%] h-[300px]  z-0 " />
            </div>
            <div className="z-20 text-black flex flex-col items-start justify-center gap-4">
              <h1 className="text-2xl font-bold">Product Engineering</h1>
              <p className="max-w-4xl">
                We help our customers realize and accelerate their product
                development goals by creating innovative chip-to-cloud solutions
                built on our capabilities across the technology stack. Our teams
                in Storage and ISV are proud to have worked on category-leading
                products with some of the most demanding use cases. At our core
                is creating an impact and developing sophisticated products
                addressing the world’s needs in the areas of Medical Devices and
                Healthcare, Industrial Products, and Heavy Machinery and
                Automotive.
              </p>
            </div>
            <div className="flex items-center justify-end w-full">
              <Link
                to={"https://agiliad.com/product-engineering/"}
                className="font-semibold underline hover:text-[#b6b734] text-[#246ba2]"
              >
                Read more
              </Link>
            </div>
          </div>
          <div className="bg-white w-full flex flex-col items-start px-7 gap-4">
            <div className="w-full ">
              <img
                src={img_2}
                className="w-[100%] h-[300px] object-cover  z-0 "
              />
            </div>
            <div className="z-20 text-black flex flex-col items-start justify-center gap-4">
              <h1 className="text-2xl font-bold">Services</h1>
              <p className="max-w-4xl">
                As part of our Services, we strive to deliver exceptional value
                to our customers by offering a comprehensive range of solutions.
                Our expertise in Accelerated Innovation, Engineering,
                Post-production, Artificial Intelligence, and
                Verification/Validation empowers us to transform ideas into
                tangible realities. We are dedicated to partnering with our
                clients to develop cutting-edge products and services that meet
                the evolving demands of the world. Together, we shape a brighter
                future through innovation and excellence.
              </p>
            </div>
            <div className="flex items-center justify-end w-full">
              <Link
                to={"https://agiliad.com/services/"}
                className="font-semibold underline hover:text-[#b6b734] text-[#246ba2]"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#e4eef7] py-10 px-[20px] sm:px-[50px] lg:px-[80px] flex flex-col gap-8">
        <div className="flex flex-col items-start gap-8">
          <header className="flex flex-col items-start gap-4">
            <h1 className="text-3xl font-semibold text-black flex flex-wrap items-start gap-1">
              <span className="">
                {" "}
                Capabilities{" "}
                <div className="w-1/2 h-1 bg-[#b6b734] rounded-md"></div>
              </span>{" "}
              across the Technology Stack
            </h1>
          </header>
          {/* card */}
          <div className="sm:sticky sm:top-[100px] w-full h-[100%] lg:h-[550px] bg-[#1582cc] rounded py-6 px-6 sm:px-12 flex items-start flex-col md:flex-row gap-8 text-white">
            <div className="flex flex-col items-start gap-3 md:w-[30%] w-full">
              <h5 className="text-lg font-semibold">1. VISUALIZATION</h5>
              <ul className="list-disc pl-2 sm:pl-4 flex items-start md:flex-col flex-row flex-wrap gap-6 md:gap-2 w-full">
                <li>Mobile</li>
                <li>Desktop Apps</li>
                <li>Web Apps</li>
              </ul>
            </div>
            <div className="flex w-full flex-col items-start gap-4">
              <h2 className="text-2xl">VISUALIZATION</h2>
              <p className="text-1xl">
                Our offerings in the Visualization space span UI/UX for
                front-ends, 2D, 3D rendering. volumetric visualizations, native
                application user interfaces, web, and mobile applications.{" "}
              </p>
              <p className="text-1xl">
                We build interactive and responsive dashboards to provide clear
                and coherent insights into data using WebGL, OpenGL, DirectX,
                Qt/QML-based or WPF-based native applications, creating hybrid
                and native mobile applications in iOS / Android.{" "}
              </p>
              <p className="text-1xl">
                Our team works with leading frameworks like Angular, React, and
                Vuejs to create professional dashboards and web user interfaces.{" "}
              </p>
              <p className="text-1xl">
                Agiliad has developed IDEs for industrial customers, IoT
                dashboards and imaging workstations for medical customers, and
                data lake-based rendering engines for storage customers.
              </p>
            </div>
          </div>
          {/* card */}
          <div className="sm:sticky sm:top-[100px] w-full h-[100%] lg:h-[550px] bg-[#b6b734] rounded py-6 px-6 sm:px-12 flex items-start flex-col md:flex-row gap-8 text-white">
            <div className="flex flex-col items-start gap-3  md:w-[30%] w-full">
              <h5 className="text-lg font-semibold">2. CLOUD SERVICES</h5>
              <ul className="list-disc pl-2 sm:pl-4 flex items-start md:flex-col flex-row flex-wrap gap-6 md:gap-2 w-full">
                <li>Data Persistence</li>
                <li>Compute</li>
                <li>DevOps</li>
                <li>Big Data</li>
              </ul>
            </div>
            <div className="flex w-full flex-col items-start gap-4">
              <h2 className="text-2xl">CLOUD SERVICES</h2>
              <p className="text-1xl">
                Agiliad offers full-stack chip-to-cloud transformation to our
                customers by harnessing the increasing capabilities of cloud
                service offerings. We not only use Cloud offerings to create
                end-to-end solutions for our customers but also enable cloud
                service providers through developing data storage systems.
              </p>
              <p className="text-1xl">
                We have: <br /> Delivered solutions based on Azure, AWS, and
                Google Cloud Platform offerings.
              </p>
              <p className="text-1xl">
                Provided integrated cloud solutions around Storage, Compute,
                Containers & Deployments, Database, Analytics, Security,
                Serverless, and more.
              </p>
              <p className="text-1xl">
                Created micro-services based architectures that are scalable,
                maintainable, and meet stringent performance requirements.
              </p>
              <p className="text-1xl">
                Broad experience in various As-a-service offerings including
                laaS, PaaS, SaaS, DRaaS, DaaS, etc.
              </p>
              <p className="text-1xl">
                Provided Hybrid cloud solution with Azure Stack integration, and
                also Multicloud solutions with a common heterogeneous
                architecture for services with different cloud vendors.
              </p>
            </div>
          </div>
          {/* card */}
          <div className="sm:sticky sm:top-[100px] w-full h-[100%] lg:h-[550px] bg-[#1582cc] rounded p-6 px-6 sm:px-12 flex items-start flex-col md:flex-row gap-8 text-white">
            <div className="flex flex-col items-start gap-3 w-[30%]">
              <h5 className="text-lg font-semibold">
                3. CONNECTIVITY <br /> SERVICES
              </h5>
            </div>
            <div className="flex w-full flex-col items-start gap-4">
              <h2 className="text-2xl">CONNECTIVITY SERVICES</h2>
              <p className="text-1xl">
                We work with domain specific
                Connectivity/protocols/communication data formats, and have also
                executed several projects to bind device layers to Cloud service
                offerings across domains.
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                <p className="text-1xl">
                  Medical: <br /> IHE, DICOM, HL7, HL7 FHIR{" "}
                </p>
                <p className="text-1xl">
                  Generic: <br /> BLE, Zigbee, WiFi Mesh, 6LoWPAN{" "}
                </p>
                <p className="text-1xl">
                  Storage: <br /> SATA, SAS, NVMe, FCoE, NW Fabrics{" "}
                </p>
                <p className="text-1xl">
                  Industrial Automation: <br /> OPC-UA, EtherCAT, CAN, LIN,
                  Ethernet/IP{" "}
                </p>
              </div>
              <p className="text-1xl">
                In addition, Agiliad has executed projects on various classes of
                communication:
              </p>{" "}
              <div className="grid sm:grid-cols-2 gap-2">
                <p className="text-1xl">
                  Sensor to Machine: <br /> BLE, Modbus RTU, Modbus TCP/IP,{" "}
                  <br /> LIN, SENT, AVTP. Serial (RS232/485){" "}
                </p>
                <p className="text-1xl">
                  Machine to Machine (Peer to Peer): <br />
                  J1939, CAN. gRPC, Ethernet/IP, EtherCAT, <br /> AVTP, WiFi
                  Mesh, BLE Mesh, DLR
                </p>
                <p className="text-1xl">
                  Machine to Cloud/gateway: <br /> MQTT, HTTP
                </p>
              </div>
              <p className="text-1xl">
                Agiliad's range of experience includes protocol implementation,
                creation of reusable connectivity libraries, automated QA, and
                integrated solutions. We have also developed hardware solutions
                for protocol conversion and connectivity.
              </p>{" "}
            </div>
          </div>
          {/* card */}
          <div className="sm:sticky sm:top-[100px] w-full h-[100%] lg:h-[550px] bg-[#b6b734] rounded p-6 px-6 sm:px-12 flex items-start flex-col md:flex-row gap-8 text-white">
            <div className="flex flex-col items-start gap-3 md:w-[30%] w-full">
              <h5 className="text-lg font-semibold">
                4. APPLICATION <br /> SERVICES
              </h5>
              <ul className="list-disc pl-4 flex items-start md:flex-col flex-row gap-8 md:gap-2 w-full">
                <li>Native Apps</li>
                <li>Firmware</li>
                <li>Virtualization</li>
              </ul>
            </div>
            <div className="flex w-full flex-col items-start gap-4">
              <h2 className="text-2xl">APPLICATION SERVICES </h2>
              <p className="text-1xl">
                Agiliad provides application-specific service offerings which
                are essentially domain oriented. Our experience across the
                technology and domain stack allows us to understand end-customer
                needs and create solutions that directly address the end-user
                scenarios. Our process models enable continuous improvement and
                Agile development of applications. We have created applications
                that comply with domain-specific certifications/regulations as
                well.
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                <p className="text-1xl">
                  Medical: <br />
                  Medical Imaging Surgical Navigation Endoscopy Applications{" "}
                </p>
                <p className="text-1xl">
                  Industrial Automation: <br /> Industrial HMIs Control Systems
                  Modeling IDE Development{" "}
                </p>
                <p className="text-1xl">
                  Storage: <br />
                  RAID Controllers SSD/HDD Firmware Disaster Recovery Solutions{" "}
                </p>
                <p className="text-1xl">
                  Software and Platforms: <br /> DevOps and Security Platforms
                  Virtual assistance and chatbots Infrastructure Analytics{" "}
                </p>
              </div>
              <p className="text-1xl">
                Our range of application offerings spans desktop, embedded,
                mobile, and web apps.
              </p>{" "}
            </div>
          </div>
          {/* card */}
          <div className="sm:sticky sm:top-[100px] w-full h-[100%] lg:h-[550px] bg-[#1582cc] rounded p-6 px-6 sm:px-12 flex items-start flex-col md:flex-row gap-8 text-white">
            <div className="flex flex-col items-start gap-3 md:w-[30%] w-full">
              <h5 className="text-lg font-semibold">
                5. DEVICE LEVEL
                <br /> SERVICES
              </h5>
              <ul className="list-disc pl-2 sm:pl-4 flex items-start md:flex-col flex-row flex-wrap gap-6 md:gap-2 w-full">
                <li>RTOS</li>
                <li>GPGPU</li>
                <li>FPGA</li>
                <li>Storage infra</li>
              </ul>
            </div>
            <div className="flex w-full flex-col items-start gap-4">
              <h2 className="text-2xl">DEVICE LEVEL SERVICES </h2>
              <p className="text-1xl">
                End customers (consumer and industrial) need smarter and
                connected products that can solve everyday problems at lower
                costs and better efficiencies.
              </p>
              <div>
                <p className="text-1xl">
                  Agiliad's service offering at the Device layer spans across:
                </p>
                <ul className="list-disc pl-4">
                  <li>Embedded Software Development & QA </li>
                  <li>Firmware Development & QA </li>
                  <li>Electronic Design & Layout </li>
                  <li>Mechanical Design & Drafting </li>
                </ul>
              </div>
              <p className="text-1xl">
                We have worked on systems/devices from Microcontrollers to
                high-speed FPGA/GPGPU-based systems for industrial and medical
                customers. Data center computing and storage devices experience
                has enabled us to support qualifications and compliance
                requirements for our storage customers.
              </p>{" "}
              <p className="text-1xl">
                Our teams have experience in creating full BSP/Device Driver and
                Embedded Application architectures for these devices.
                Optimization of core algorithms for GPGPU-based architectures is
                another key offering.
              </p>{" "}
              <p className="text-1xl">
                Our in-house labs for Mammography systems, Ultrasound systems,
                Heavy equipment ECUs, Control Systems, and Electronics assembly
                enable us to support core engineering, connectivity solutions,
                and QA activities.
              </p>{" "}
            </div>
          </div>
          {/* card */}
          <div className="sm:sticky sm:top-[100px] w-full h-[100%] lg:h-[550px] bg-[#b6b734] rounded p-6 px-6 sm:px-12 flex items-start flex-col md:flex-row gap-8 text-white">
            <div className="flex flex-col items-start gap-3 md:w-[30%] w-full">
              <h5 className="text-lg font-semibold">6. CYBER SECURITY</h5>
            </div>
            <div className="flex w-full flex-col items-start gap-4">
              <h2 className="text-2xl">CYBER SECURITY </h2>
              <p className="text-1xl">
                Global connectivity and the increasing footprint of cloud
                services require that products are designed with cybersecurity
                considerations upfront rather than as an afterthought. Agiliad's
                cybersecurity offerings include:
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                <ul className="list-disc pl-4">
                  <li className="text-1xl">
                    Security engineering and management{" "}
                  </li>
                  <li className="text-1xl">
                    Analyzing product user cybersecurity context and regulatory
                    needs to create engineering requirements{" "}
                  </li>
                  <li className="text-1xl">Vulnerability assessment </li>
                  <li className="text-1xl">Penetration testing </li>
                  <li className="text-1xl">
                    NIST frameworks-based security compliance{" "}
                  </li>
                </ul>
                <ul className="list-disc pl-4">
                  <li>
                    Device engineering for cybersecurity compliance as per
                    industry standards{" "}
                  </li>
                  <li>
                    Cybersecurity compliance assessment and configuration for
                    cloud-hosted loT platforms{" "}
                  </li>
                  <li>
                    Periodic monitoring of vulnerabilities for production
                    devices and systems{" "}
                  </li>
                </ul>
              </div>
              <p className="text-1xl">
                Information security and confidentiality are of paramount
                importance for medical, industrial, and storage customers. The
                use cases span medical health records, factory safety control
                networks, and customer data integrity. Our cybersecurity service
                offering handles both data-at-rest and data-in-transit.
              </p>{" "}
              <p className="text-1xl">
                We provide DevSecOps offerings such as the development of
                cybersecurity products providing digital security and also
                application security products with SAST and DAST capabilities.
              </p>{" "}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end w-full">
          <Link className="py-2 px-6 bg-[#1582cc] text-white hover:bg-[#b6b734] rounded text-base outline-none font-semibold">
            Learn more
          </Link>
        </div>
      </section>
      <section className="px-[20px] sm:px-[50px] lg:px-[80px] flex flex-col gap-8">
        <div>
          <header className="flex flex-col items-start gap-4">
            <h1 className="text-3xl font-semibold text-black flex flex-wrap items-start gap-1">
              <span className="">
                {" "}
                Services{" "}
                <div className="w-1/2 h-1 bg-[#b6b734] rounded-md"></div>
              </span>{" "}
              across the Product Lifecycle
            </h1>
          </header>
        </div>
        <div className="">
          {/* Tab Headers */}
          <div className="flex mb-4">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`flex-1 p-2 sm:p-3 text-sm sm:text-lg font-medium transition-all duration-300 ${
                  activeTab === index
                    ? index === 0 || index === 2
                      ? "bg-blue-500 text-white"
                      : "bg-lime-500 text-white"
                    : index === 0 || index === 2
                    ? "bg-blue-100"
                    : "bg-lime-100"
                } ${index === 0 ? "rounded-l-lg" : ""} ${
                  index === 2 ? "rounded-r-lg" : ""
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-md transition-all duration-500">
            <div className="grid grid-cols-1 gap-4">
              {/* Services */}
              <div className="grid sm:grid-cols-2  md:grid-cols-4 gap-3">
                {tabs[activeTab].services.map((service, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg shadow-lg text-white text-center transition-all duration-300 transform ${
                      idx < 8
                        ? activeTab === 1
                          ? "bg-lime-500"
                          : "bg-blue-500"
                        : "bg-gray-300"
                    } hover:scale-105`}
                    style={{
                      animationDelay: `${idx * 0.1}s`,
                      animation: "fadeIn 0.5s ease forwards",
                    }}
                  >
                    {service}
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="bg-blue-50 rounded-lg p-6 mt-4">
                <h3 className="text-lg font-medium mb-3">Key Benefits</h3>
                <ul className="space-y-2">
                  {tabs[activeTab].benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-start transition-all duration-300"
                      style={{
                        animationDelay: `${idx * 0.2}s`,
                        animation: "slideIn 0.5s ease forwards",
                      }}
                    >
                      <GoDotFill
                        className="text-blue-500 mt-1 flex-shrink-0"
                        size={16}
                      />
                      <span className="ml-2">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes slideIn {
              from {
                opacity: 0;
                transform: translateX(-20px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
          `}</style>
        </div>
      </section>
      <section className="w-full px-[20px]  sm:px-[50px] lg:px-[80px]">
        <div className="w-full">
          <Carousel
            opts={{
              align: "start",
            }}
            orientation="vertical"
            className="w-full flex flex-col gap-1"
          >
            <div>
              <header className="flex flex-col items-start gap-4">
                <h1 className="text-3xl font-semibold text-black flex  items-start gap-1">
                  <span className="">
                    {" "}
                    Our{" "}
                    <div className="w-1/2 h-1 bg-[#b6b734] rounded-md"></div>
                  </span>{" "}
                  Impact
                </h1>
              </header>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p className="font-semibold text-sm sm:text-lg">
                We are proud of the impact we continue to make – for our
                customers, our communities, and our team.
              </p>
              <div className="flex items-center justify-end gap-2">
                <CarouselPrevious className="static translate-y-0 translate-x-0" />
                <CarouselNext className="static translate-y-0 translate-x-0" />
              </div>
            </div>
            <CarouselContent className="-mt-1 h-[450px]">
              {imageData.map((image, index) => {
                return (
                  <CarouselItem key={index} className="pt-1 md:basis-1/2">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex items-center justify-center sm:p-6">
                          <div className="relative w-full h-[450px] sm:h-[400px]">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover"
                            />{" "}
                            <div className="absolute bottom-0 left-0 right-0 sm:bottom-2 sm:left-2 sm:right-2 p-4 bg-black text-white opacity-80 rounded-lg">
                              <h4 className="text-[#b6b734] font-semibold text-lg">
                                {image.title}
                              </h4>
                              <p className="text-sm">{image.dsc}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Home;
