import Aos from "aos"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import "aos/dist/aos.css"

const WelcomeAddress = styled.section`
  position: relative;
  display: flex;
  gap: 2rem;
  padding: 4rem;
  background: beige;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Ensures the SVG edges are clipped properly */
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    flex-direction: column;
    height: auto;
  }

  img {
    flex: 1;
    padding: 1rem;
    border: 3px solid #444406;
    max-width: 500px;
    height: 400px;

    @media (max-width: 768px) {
      width: 100%;
      height: 300px !important;
      padding: 0;
    }
  }

  div {
    flex: 2;
    padding-bottom: 1rem;
    margin-top: -20px;
    @media (max-width: 768px) {
      margin-top: 0;
      text-align: left;
    }
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 12px;
      line-height: 1.6;
    }
  }

  /* Add the SVG for curly edges */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: beige;
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' d='M0,256L48,240C96,224,192,192,288,160C384,128,480,96,576,112C672,128,768,192,864,213.3C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
    mask-size: cover;
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' d='M0,256L48,240C96,224,192,192,288,160C384,128,480,96,576,112C672,128,768,192,864,213.3C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
    -webkit-mask-size: cover;
    z-index: -1; /* Ensures the SVG stays behind the content */
  }
`

const TypewriterEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index])
        setIndex(index + 1)
      } else {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [index, text, speed])

  return <p className="typewriter-text">{displayedText}</p>
}

const Welcome = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    })
  }, [])
  return (
    <WelcomeAddress data-aos="fade-up">
      <img src="../src/assets/images/director.jpeg" alt="Welcome" />
      <div>
        <h1>Welcome to Eltons Christian School</h1>
        <p>
          Thank you for visiting our website and I hope that you find it
          informative. At Eltons Christian School, We strive to glorify God in
          all we do by addressing the whole child: academically, spiritually,
          physically and emotionally. This means that we focus both on academics
          and the spiritual development of our children. Everything we do is
          filtered through the lens of a biblical worldview.lt is an honour to
          partner with you in Christian education as pupils grow in the grace
          and knowledge of our Lord Jesus Christ. We offer a wonderful
          Christ-centered academic program.Our pupils examine their subjects
          through the lenses of a biblical worldview. At ECS, we have high
          expectations of our children and set challenging targets for them.
          Every child is encouraged to reach their full potential. We also
          recognise that every child is unique and has valid contributions to
          make. Our staff are God fearing, dedicated, hardworking and
          experienced. We provide a safe, calm and caring atmosphere and we
          encourage hard work. We recognise that parents play an important role
          in the education of their children, therefore, we solicit your
          co-operation in making your child’s time at ECS enjoyable. We are
          blessed to have a vibrant Parents/teachers Forum and encourage parents
          to be involved in all aspects of school life as children do well when
          their parents are involved in their school life. We are a member of a
          recognized international Christian educational body- ACSI (Association
          of Christian Schools International). We are confident that God will
          bless our efforts and guide us “to equip students to be disciples for
          Christ,” as our mission statement reads. We are excited to share more
          about our school with you and we look forward to starting a wonderful
          partnership with your family. Remain Blessed and Highly Favoured.
          <br />
          <b>MRS OMOLARA EFFIOM .</b>
          <br />
          <b>Proprietress.</b>
        </p>
      </div>
    </WelcomeAddress>
  )
}

export default Welcome
