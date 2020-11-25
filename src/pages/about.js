import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";
import Image from "gatsby-image";

import Layout from "../layouts";
import batman from "../img/batman.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "./about.module.css";

const BlogPost = () => {
  const data = useStaticQuery(graphql`
  query HeaderImageQuery {
    file(
      relativePath: { eq: "img/crew.jpg" }
    ) {
      headerImage: childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      },
    }
  }
`);
  return (
    <Layout>
      <div>
        <Helmet>
          <title>
          Dino Trojak | About
          </title>
        </Helmet>
        <Header />
        <div className={styles.container}>
          <img className={styles.icon} src={batman} alt="batman" />

          <h1 className={styles.title}>
        About me
          </h1>
          <p className={styles.desc}>
        It's really short I promise
          </p>
        </div>
        <div className={styles.headImgCont}>
          <Image fluid={data.file.headerImage.fluid} />
        </div>
        <div className={styles.content}>
        Hi, my name is Dino I’m 29 and founder of
          {" "}
          <a href="https://github.com/reactor-studio">
          Reactor studio
          </a>
          {" "}
          based in Zagreb. I love building quality software and experiment with new technologies. My language of choice is JavaScript. I believe in Agile practices and TDD. What does that mean? It means I’m devoted to awesome tests and I don’t settle for anything less. It means my definition of '’refactoring’’ doesn’t consider only the code. Yes, I consider myself a pragmatic journeyman. I’m a fast adopter and I care about details. I like to know how things work internally, whether it’s a testing framework, an interpreter, or a web­framework. I’m continuously working on improving my ever-expanding skillset. I absolutely love to hack on tools to make my environment more efficient (coding/non-coding). I advocate regular exercise so I can have a clear mind and good idea flow. I’m on my enduro bike whenever I find some spare time. Also, I love my green race bike which I ride all year long for commuting. The community is important to me that's why I'm a
          {" "}
          <a href="http://jszgb.com/">
          JavaScript Zagreb
          </a>
          {" "}
        organizer,
          {" "}
          <a href="https://nodeschool.io/zagreb/">
          NodeSchool Zagreb
          </a>
          {" "}
        organizer and
          {" "}
          <a href="https://www.mop-fest.com/">
          MOP fest
          </a>
          {" "}
        co-organizer.
        </div>
      </div>
      <div className={styles.instagram}>
        <iframe
          title="instagram"
          src="//lightwidget.com/widgets/2667a5dcd0285a61a13eeb54532858ad.html"
          scrolling="no"
          allowTransparency="true"
          className="lightwidget-widget"
          style={{ width: "100%", border: 0, overflow: "hidden" }}
        />
      </div>
      <Footer />
    </Layout>
  );
};

export default BlogPost;
