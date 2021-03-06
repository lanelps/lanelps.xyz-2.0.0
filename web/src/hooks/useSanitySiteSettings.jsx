import { graphql, useStaticQuery } from "gatsby";

const useSanitySiteSettings = () => {
  const data = useStaticQuery(graphql`
    query useSanitySiteSettings {
      sanitySiteSettings {
        siteTitle: title
        description
        author {
          name
        }
        domain
        keywords
        indexed
      }
    }
  `);

  return data;
};

export default useSanitySiteSettings;
