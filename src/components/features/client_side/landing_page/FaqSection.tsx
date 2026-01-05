"use client";

import React, { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "What is Cerina Health?",
    answer:
      "Cerina Health is a digital mental health platform offering personalised support through guided CBT sessions, structured programmes, AI-assisted tools, self-care exercises, and evidence-based therapeutic content.",
  },
  { question: "What Method does Cerina’s Digital Therapy Use?", answer: "Cerina's digital therapy primarily uses Cognitive Behavioural Therapy (CBT), a proven psychological approach that helps individuals identify and change negative thought patterns and behaviours." },
  { question: "What is Cognitive Behavioural Therapy?", answer: "Cognitive Behavioural Therapy (CBT) is a type of psychotherapy that focuses on changing negative thought patterns and behaviours. It helps individuals develop coping strategies for dealing with various mental health challenges." },
  { question: "What is anxiety?", answer: "Anxiety is a normal human emotion characterised by feelings of worry, nervousness, or unease about future events. While occasional anxiety is common, persistent or excessive anxiety can interfere with daily life and may indicate an anxiety disorder." },
  { question: "What is Generalised Anxiety Disorder (GAD)", answer: "Generalised Anxiety Disorder (GAD) is a mental health condition characterised by chronic, excessive worry and anxiety about various aspects of life, such as work, health, or relationships. People with GAD often find it difficult to control their worry and may experience physical symptoms like restlessness, fatigue, and muscle tension." },
  { question: "Who can use Cerina Health?", answer: "Cerina Health is designed for adults seeking support for mental health concerns, particularly those dealing with anxiety, stress, and related conditions. It's suitable for individuals looking for accessible, evidence-based mental health support." },
  { question: "On which platforms is Cerina available?", answer: "Cerina Health is available as a web application accessible through modern browsers, and mobile apps for iOS and Android devices, ensuring convenient access anytime, anywhere." },
  { question: "How does Cerina protect user privacy and data?", answer: "Cerina Health prioritises user privacy and data security. We use industry-standard encryption, comply with data protection regulations like GDPR, and implement strict access controls. User data is anonymised for analysis and never shared without consent." },
  { question: "How is AI used safely in Cerina?", answer: "AI in Cerina is used to personalise therapy recommendations and provide supportive insights, but human oversight ensures safety. Our AI tools are trained on evidence-based therapeutic principles and are designed to complement, not replace, professional mental health support." },
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto">
        <div
          className="py-8 px-4 md:py-16 md:px-12 lg:px-24"
          style={{
            width: "1388px",
            maxWidth: "100%",
            minHeight: "838px",
            borderRadius: "16px",
            background: "rgba(238,231,219,0.63)",
            opacity: 1,
            boxSizing: "border-box",
          }}
        >
          <div className="flex flex-col md:flex-row gap-[10px]">
            {/* Left column */}
            <div className="md:w-1/3 flex-shrink-0">
              <h2
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                  fontSize: "clamp(1.5rem, 1.5rem + 1.5vw, 2.5rem)",
                  lineHeight: "52.8px",
                  color: "#121212",
                }}
                className="mb-6"
              >
                Frequently Asked
                <br />
                Questions
              </h2>

              <h3
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                  fontSize: "clamp(0.9rem, 0.9rem + 0.8vw, 1.3rem)",
                  lineHeight: "28.8px",
                  color: "#121212",
                }}
                className="mb-2"
              >
                Still have a question?
              </h3>

              <p
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                  fontSize: "clamp(0.8rem, 0.8rem + 0.4vw, 1rem)",
                  lineHeight: "26px",
                  color: "#121212",
                }}
                className="mb-2"
              >
                Reach out to us.
              </p>

              <p
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 400,
                  fontSize: "clamp(0.8rem, 0.8rem + 0.4vw, 1rem)",
                  lineHeight: "26px",
                  color: "#121212",
                }}
              >
                Our team is happy to provide any
                <br />
                additional details.
              </p>

              <div className="mt-6 flex items-center gap-3 mb-4 md:mb-0">
                <Image
                  src="/home_page/group_people.svg"
                  alt="group"
                  width={168}
                  height={56}
                  className="object-contain rounded-full"
                />
              </div>
            </div>

            {/* Right column: accordion */}
            <div className="md:w-2/3">
              <div className="flex flex-col gap-4">
                {faqs.map((f, i) => {
                  const isOpen = openIndex === i;
                  return (
                    <div
                      key={i}
                      className={`bg-white rounded-lg p-6 shadow-sm transition-all duration-200 w-full ${
                        isOpen ? "ring-2 ring-[#EAE2D8]" : ""
                      }`}
                      style={{ minHeight: "68px", borderRadius: "8px", opacity: 1 }}
                    >
                      <button
                        className="w-full flex items-start justify-between gap-4 text-left"
                        onClick={() => toggle(i)}
                        aria-expanded={isOpen}
                      >
                        <div>
                          <div
                            style={{
                              fontFamily: "Montserrat",
                              fontWeight: 500,
                              fontSize: "clamp(0.9rem, 0.9rem + 0.8vw, 1.3rem)",
                              lineHeight: "28.8px",
                              color: "#121212",
                              overflowWrap: "break-word",
                            }}
                          >
                            {f.question}
                          </div>

                          {isOpen && f.answer && (
                            <p
                              className="mt-4"
                              style={{
                                fontFamily: "Montserrat",
                                fontWeight: 400,
                                fontSize: "clamp(0.8rem, 0.8rem + 0.4vw, 1rem)",
                                lineHeight: "26px",
                                color: "#121212",
                                overflowWrap: "break-word",
                              }}
                            >
                              {f.answer}
                            </p>
                          )}
                        </div>

                        <div className="flex items-center">
                          <div style={{ width: "24px", height: "24px", flexShrink: 0 }}>
                            <Image
                            src="/cross_icon.svg"
                            alt="toggle"
                            width={24}
                            height={24}
                            />
                          </div>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
