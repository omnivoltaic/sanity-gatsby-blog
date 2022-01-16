export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61e3ef01f21951a7a5f2c453",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-txcdo4ca",
                  apiId: "69710ef1-c990-4dfb-aad9-2f4d5ff92f6a",
                },
                {
                  buildHookId: "61e3ef02d5eabe87bc996a2f",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-zie1rrw3",
                  apiId: "4a7add6d-6dd7-4418-bd33-4738a0b37a36",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/omnivoltaic/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-zie1rrw3.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
