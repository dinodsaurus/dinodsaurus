import React from "react";
import { renderAst } from "../helpers/markdownTemplate";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data;
  const { edges: posts } = allMarkdownRemark;
  return (
    <div>
      <Header />
      <PageTitle />
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
