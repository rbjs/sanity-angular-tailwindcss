export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'rbjs/sanity-angular-tailwindcss'
      }
    },
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
                  buildHookId: '630f33d41473c756b46c45a3',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-tailwindcss-studio',
                  apiId: '3ab1efe8-a2d4-4444-bdda-8141a2626d3e'
                },
                {
                  buildHookId: '630f33d4559c6706d52b41ba',
                  title: 'Website',
                  name: 'sanity-angular-tailwindcss',
                  apiId: '22a06ff3-8894-42d1-a3a6-0fac99478b62'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rbjs/sanity-angular-tailwindcss',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-tailwindcss.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
