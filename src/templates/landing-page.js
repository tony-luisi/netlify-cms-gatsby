import React from "react";
import { graphql } from "gatsby";

export const LandingPageTemplate = ({ title }) => {
    console.log("here", title)
  return <h1>{title}</h1>;
};

const LandingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return <LandingPageTemplate title={frontmatter.title} />;
};

export const pageQuery = graphql`
  query MainPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "landing-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;

export default LandingPage;
