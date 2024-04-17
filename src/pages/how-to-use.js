import React, { useRef } from 'react';
import * as styles from './about.module.css';

import Layout from '../components/Layout/Layout';
import ThemeLink from '../components/ThemeLink';
import Container from '../components/Container';
import Button from '../components/Button';
import { toOptimizedImage } from '../helpers/general';

const HowToUsePage = (props) => {
  let builtRef = useRef();
  let toolsRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    
    <Layout>
      <div className={styles.root}>
        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(builtRef)} to={'#builtby'}>
            About this Project
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(toolsRef)} to={'#tools'}>
            Compatible technologies
          </ThemeLink>
        </div>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.content} style={{ paddingTop: '80px' }}>
            <h3>Made with Passion.</h3>
            <div id="#builtBy" ref={builtRef}>
              <p>
                This theme is proudly brought to you by {' '}
                <Button target={true} href=" "> 
                Aaditya Parmar.
                </Button>{' '}
              </p>
              <p>
                The Feather is built as an ecommerce theme
                suitable for Fronted Projects with all the archtitecture. Free to use
                and quite interesting while using.
              </p>
              <p>
                I am hFormerly with CarDekho, now a Full Stack Web Developer with a passion 
                for open source projects. Proficient in JavaScript and C++, with a keen interest
                in AI/ML, Data Science, Blockchain, and Crypto technologies. Active in the software 
                development community and a tech enthusiast. #SoftwareDev #TechEnthusiast
              </p>
              <Button target={true} href="https://www.linkedin.com/in/aadityaparmar">
                Connect with me on Linked IN.
              </Button>
              
            </div>
            <h3>Used Tools</h3>
            <div id={'#tools'} ref={toolsRef}>
              <p>
              The frontend e-commerce project is built using React and is bootstrapped, allowing for rapid development 
              and deployment. With React, the project benefits from a modular and component-based architecture, facilitating 
              efficient management and scalability. Bootstrap, a popular CSS framework, provides pre-designed UI components 
              and responsive layout utilities, ensuring a polished and mobile-friendly design. Integration with backend APIs 
              enables seamless data exchange for features such as product browsing, search, and checkout. Additionally, the 
              project incorporates key functionalities like user authentication, cart management, and integration with payment
               gateways for secure transactions. The combination of React and Bootstrap allows for the creation of a visually 
               appealing and user-friendly e-commerce platform with reduced development time and effort.
              </p>
              

      
            </div>
          </div>
        </Container>
        <div className={styles.imageContainer}>
          <img
            alt={'Best of Breed tools'}
            src={toOptimizedImage('/how-to-use/logos@3x.png')}
          ></img>
        </div>
      </div>
      
    </Layout>
    
  );
};

export default HowToUsePage;
