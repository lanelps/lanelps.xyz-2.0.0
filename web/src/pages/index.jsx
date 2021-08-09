import React from "react";
import { graphql } from "gatsby";
import tw from "twin.macro";

import Layout from "~components/Layout";
import Title from "~components/Title";
import Video from "~components/Video";

const Home = ({ data: { sanityHomePage } }) => {
  return (
    <Layout title="Home" url="/">
      <section tw="sticky block h-min col-start-1 col-span-6 top-0">
        <Title title={sanityHomePage.title} text={sanityHomePage.text} />
      </section>

      <section tw="col-start-7 col-span-6">
        <Video src={sanityHomePage.showReel.asset.url} autoPlay loop />
      </section>
    </Layout>
  );
};

export default Home;

export const query = graphql`
  query Home {
    sanityHomePage {
      title
      text
      showReel {
        asset {
          url
        }
      }
    }
  }
`;
