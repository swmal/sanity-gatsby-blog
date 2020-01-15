export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e1f281fef244a5fcce5a4c9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-583f6gv5',
                  apiId: '1cc7a86f-241e-437e-be71-3c49546c9160'
                },
                {
                  buildHookId: '5e1f281fb38f9153ade6fcea',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-74i9yj4g',
                  apiId: '6cd153d0-e1d4-4930-861f-30260e19a951'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/swmal/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-74i9yj4g.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
