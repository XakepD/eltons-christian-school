import Aos from "aos"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import "aos/dist/aos.css"

const WelcomeAddress = styled.section`
  position: relative;
  display: flex;
  gap: 2rem;
  padding: 4rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;

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
    border-radius: 8px;
    object-fit: cover;

    @media (max-width: 768px) {
      width: 100%;
      height: 300px;
      padding: 0;
    }
  }

  .welcome-content {
    flex: 2;
    padding-bottom: 1rem;

    @media (max-width: 768px) {
      margin-top: 0;
      text-align: left;
    }

    h1 {
      font-size: 2rem;
      color: #1a5276;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 0.8rem;
      line-height: 1.6;
      color: #333;
      margin-bottom: 1.5rem;
    }

    .welcome-text {
      position: relative;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }

    .welcome-text.collapsed {
      max-height: 150px;
    }

    .read-more-btn {
      display: inline-block;
      background: #1a5276;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.3s ease;
      border: none;
      margin-top: 1rem;

      &:hover {
        background: #d4ac0d;
        color: #1a5276;
      }
    }

    .signature {
      font-weight: bold;
      margin-top: 1.5rem;
      font-style: italic;
    }
  }
`

const Welcome = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const welcomeText = `
    Thank you for visiting our website and I hope that you find it informative. 
    At Eltons Christian School, we strive to glorify God in all we do by addressing 
    the whole child: academically, spiritually, physically and emotionally. This means 
    that we focus both on academics and the spiritual development of our children. 
    Everything we do is filtered through the lens of a biblical worldview.
    
    It is an honour to partner with you in Christian education as pupils grow in the 
    grace and knowledge of our Lord Jesus Christ. We offer a wonderful Christ-centered 
    academic program. Our pupils examine their subjects through the lenses of a biblical 
    worldview. At ECS, we have high expectations of our children and set challenging 
    targets for them. Every child is encouraged to reach their full potential.
    
    We also recognise that every child is unique and has valid contributions to make. 
    Our staff are God fearing, dedicated, hardworking and experienced. We provide a 
    safe, calm and caring atmosphere and we encourage hard work. We recognise that 
    parents play an important role in the education of their children, therefore, we 
    solicit your co-operation in making your child's time at ECS enjoyable.
    
    We are blessed to have a vibrant Parents/Teachers Forum and encourage parents to be 
    involved in all aspects of school life as children do well when their parents are 
    involved in their school life. We are a member of a recognized international Christian 
    educational body - ACSI (Association of Christian Schools International).
    
    We are confident that God will bless our efforts and guide us "to equip students to be 
    disciples for Christ," as our mission statement reads. We are excited to share more 
    about our school with you and we look forward to starting a wonderful partnership with 
    your family.
  `

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    })
  }, [])

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <WelcomeAddress data-aos="fade-up">
      <img src="../src/assets/images/director.jpeg" alt="Welcome" />
      <div className="welcome-content">
        <h1>Welcome to Eltons Christian School</h1>
        <div className={`welcome-text ${isExpanded ? "" : "collapsed"}`}>
          <p>{welcomeText}</p>
          <p className="signature">
            Remain Blessed and Highly Favoured.
            <br />
            <b>MRS OMOLARA EFFIOM</b>
            <br />
            <b>Proprietress</b>
          </p>
        </div>
        <button
          className="read-more-btn"
          onClick={toggleReadMore}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? "Read less" : "Read more"}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </WelcomeAddress>
  )
}

export default Welcome
