import React from "react";
import { renderAst } from "../helpers/markdownTemplate";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import BlogPost from "../components/BlogPost";

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data;
  const { edges: posts } = allMarkdownRemark;
  return (
    <div>
      <Header />
      <div className="container">
        <PageTitle />
        <div style={{
          width: "100%",
          display: "flex",
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "50px"
        }}
        >
          <BlogPost img="https://p.vitalmtb.com/photos/users/2/slideshows/9999/photos/22934/s1200_slideshow_photo_1460157605.jpg" />
          <BlogPost noBg img="https://www.wikihow.com/images/thumb/7/74/Write-a-Confusing-Code-Step-1.jpg/aid319822-v4-728px-Write-a-Confusing-Code-Step-1.jpg.webp" />
          <BlogPost noBg light img="http://rajsuvd8yc-flywheel.netdna-ssl.com/wp-content/uploads/2016/05/DSC_0286-1-e1499891304192-705x293.jpg" />
        </div>
        <div style={{
          width: "100%",
          display: "flex",
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "25px"
        }}
        >
          <BlogPost img="https://p.vitalmtb.com/photos/users/2/slideshows/9999/photos/22934/s1200_slideshow_photo_1460157605.jpg" />
          <BlogPost noBg light long img="http://rajsuvd8yc-flywheel.netdna-ssl.com/wp-content/uploads/2016/05/DSC_0286-1-e1499891304192-705x293.jpg" />
        </div>
      </div>
      <Footer />
      {/* <div>{renderAst(posts[0].node.htmlAst)}</div> */}
    </div>
  );
};

export const query = graphql`
 query IndexQuery {
   allMarkdownRemark {
     totalCount
     edges {
       node {
         id
         htmlAst
         frontmatter {
           path
         }
       }
     }
   }
 }
`;

export default IndexPage;
