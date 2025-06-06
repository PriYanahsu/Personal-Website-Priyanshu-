import React, { useState } from "react";
import MachinelearningwithPython from "../assets/certificate/Machine Learning with Python.png";
import ArtificialIntelligenceAnalyst from "../assets/certificate/Artificial Intelligence Analyst.png";
import BussinessIntelligence from "../assets/certificate/Bussiness Intelligence.png";
import NoSQLAndDABaas from "../assets/certificate/NoSQL And DABaaS 101.png";
import PythonWithDataScience from "../assets/certificate/Python Data Science.png";
import DataStructureandBackendWithJava from "../assets/certificate/Data Structure & Backend With java.png";
import FrontendCertificate from "../assets/certificate/Frontend Certificate.png";
import JavaCertificate from "../assets/certificate/Java Certificate.png";
import MySqlCertificate from "../assets/certificate/Mysql Certificate.png";
import ProblemSolving from "../assets/certificate/Problem Solving Certificate.png";




const Certificate = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certificates = [
        {
            id: 1,
            title: "Machine learning with Python",
            image: MachinelearningwithPython,
            link: "https://courses.bbdu.skillsnetwork.site/certificates/2e8ff54cce0a48ed92526c76f1422d3c",
        },
        {
            id: 2,
            title: "Frontend Certificate",
            image: FrontendCertificate,
            link: "https://www.coursera.org/account/accomplishments/verify/USXHP6XWZEYL",
        },
        {
            id: 3,
            title: "Artificial Intelligence Analyst",
            image: ArtificialIntelligenceAnalyst,
            link: "https://courses.bbdu.skillsnetwork.site/certificates/713dd99de9d34583a76c93cef84675e8",
        },
        {
            id: 4,
            title: "Java Certificate",
            image: JavaCertificate,
            link: "https://www.hackerrank.com/certificates/iframe/b8062a55bdb2",
        },
        {
            id: 5,
            title: "Bussiness Intelligence",
            image: BussinessIntelligence,
            link: "https://courses.bbdu.skillsnetwork.site/certificates/141e4dfe6bd040c084c606b3d24b587e",
        },
        {
            id: 6,
            title: "Problem Solving Certificate",
            image: ProblemSolving,
            link: "https://www.hackerrank.com/certificates/iframe/144387ffdba7",
        },
        {
            id: 7,
            title: "NoSQL And DABaas",
            image: NoSQLAndDABaas,
            link: "https://courses.bbdu.skillsnetwork.site/certificates/e6be221fff5145ddb950ab215efb94b2",
        },
        {
            id: 8,
            title: "Data Structure & Backend With Java",
            image: DataStructureandBackendWithJava,
            link: "https://www.coursera.org/account/accomplishments/records/RP8V380YTQG2",
        },
        {
            id: 9,
            title: "Python With Data Science",
            image: PythonWithDataScience,
            link: "https://courses.bbdu.skillsnetwork.site/certificates/47a4b24e74864357a2a5ea39f2ba42ec",
        },
        {
            id: 10,
            title: "MySQL Certificate",
            image: MySqlCertificate,
            link: "https://www.hackerrank.com/certificates/a2c369bb2800",
        },
    ];

    return (
        <div
            name="certificates"
            className="bg-gradient-to-b from-gray-800 to-black w-full py-12 md:py-20"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div className="text-center md:text-left pb-8">
                    <p className="text-3xl sm:text-4xl md:text-5xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Certificates
                    </p>
                    <p className="py-6 text-base sm:text-lg md:text-xl">
                        Click on a certificate to view it
                    </p>
                </div>

                {/* Grid for certificate thumbnails */}
                <div className="w-full grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-4 sm:px-0">
                    {certificates.map(({ id, title, image, link }) => (
                        <div
                            key={id}
                            className="shadow-md hover:scale-105 duration-500 flex flex-col justify-between rounded-lg shadow-gray-500 cursor-pointer"
                            onClick={() => setSelectedCert({ title, image })}
                        >
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-30 object-cover rounded"
                            />
                            <p className="my-2">{title}</p>
                            <a href={link}>
                                <button className="w-1/2 duration-200 hover:scale-105 text-blue-500 hover:text-green-500 mb-2">
                                    Credential
                                </button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedCert && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-4 max-w-xl w-[90%] relative">
                        <button
                            className="absolute top-2 right-2 text-black text-xl font-bold"
                            onClick={() => setSelectedCert(null)}
                        >
                            ✕
                        </button>
                        <h2 className="text-center text-xl font-bold mb-4 text-black">
                            {selectedCert.title}
                        </h2>
                        <img
                            src={selectedCert.image}
                            alt={selectedCert.title}
                            className="w-full h-auto rounded"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Certificate;
