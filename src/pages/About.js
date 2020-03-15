import React, { useState } from "react";
import Header from "./../components/header";
import FAQ from "./../components/FAQ";

function About() {
  const [faqs, setfaqs] = useState([
    {
      question:
        "Which TV shows and movies have influenced the making of Rick and Morty?",
      answer:
        "Creators of the adult cartoon Rick and Morty (2013 ) are not shy about the influences on their show, giving interviews to IGN and Vulture. While the influences may not be secret, their range is vast, including childrens and adults movies and TV shows from the 70s, 80s, and 90s, a science fiction novel, and their mothers.",
      open: false
    },
    {
      question: "What do Jerry and Beth do for a living?",
      answer:
        "Jerry (the dad) is unemployed, but previously worked in advertising. Beth (the mom) is a veterinarian who specializes in heart surgery on horses. ",
      open: false
    },
    {
      question: "Is Rick Jerry or Beth´s father?",
      answer:
        "Grandpa Rick is Beth´s father. Her mother, and Rick´s ex, is deceased. ",
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <>
      <Header />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ index={i} faq={faq}  toggleFAQ={toggleFAQ} />
        ))}
      </div>
      </>
  );
}

export default About;
