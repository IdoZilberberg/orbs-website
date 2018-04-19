const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators
    switch (node.internal.type) {
        case 'IndexJson':
            const slug = createFilePath({ node, getNode, basePath: `pages` })
            createNodeField({
                node,
                name: `slug`,
                value: slug,
            })
            break;
    }
}
const slashRemover = slug => slug.replace(/\//g,'slug');

exports.createLayouts = ({ graphql, boundActionCreators }) => {
    const { createLayout } = boundActionCreators
    return new Promise((resolve, reject) => {
        graphql(`
       {
         allIndexJson {
           edges {
             node {
               fields {
                slug
               }
             }
           }
         }
       }
     `).then(result => {
                result.data.allIndexJson.edges.map(({ node }) => {
                    createLayout({
                        component: path.resolve(`./src/templates/contentLayout/index.js`),
                        id: `content-layout${slashRemover(node.fields.slug)}`,
                        context: {
                            slug: node.fields.slug,
                        }
                    });
                }
            )
                resolve()
            })
    })
}

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
        graphql(`
       {
         allIndexJson {
           edges {
             node {
               fields {
                 slug
               }
             }
           }
         }
       }
     `).then(result => {
                result.data.allIndexJson.edges.map(({ node }) => {
                    createPage({
                        path: node.fields.slug,
                        component: path.resolve(`./src/templates/landing/index.jsx`),
                        context: {
                            slug: node.fields.slug,
                        }
                    });
                    createPage({
                        path: `${node.fields.slug}about`,
                        component: path.resolve(`./src/templates/about/index.jsx`),
                        context: {
                            slug: node.fields.slug,
                        },
                        layout: `content-layout${slashRemover(node.fields.slug)}`
                    });
                    createPage({
                        path: `${node.fields.slug}vision`,
                        component: path.resolve(`./src/templates/vision/index.jsx`),
                        context: {
                            slug: node.fields.slug,
                        },
                        layout: `content-layout${slashRemover(node.fields.slug)}`
                    });
                    createPage({
                        path: `${node.fields.slug}careers`,
                        component: path.resolve(`./src/templates/careers/index.jsx`),
                        context: {
                            slug: node.fields.slug,
                        },
                        layout: `content-layout${slashRemover(node.fields.slug)}`
                    });
                    createPage({
                        path: `${node.fields.slug}clients`,
                        component: path.resolve(`./src/templates/clients/index.jsx`),
                        context: {
                            slug: node.fields.slug,
                        },
                        layout: `content-layout${slashRemover(node.fields.slug)}`
                    });
                    createPage({
                        path: `${node.fields.slug}home`,
                        component: path.resolve(`./src/templates/home/index.jsx`),
                        context: {
                            slug: node.fields.slug,
                        }
                    });
                    createPage({
                        path: `${node.fields.slug}news`,
                        component: path.resolve(`./src/templates/news/index.jsx`),
                        context: {
                            slug: node.fields.slug,
                        },
                        layout: `content-layout${slashRemover(node.fields.slug)}`
                    });
                    createPage({
                        path: `${node.fields.slug}team`,
                        component: path.resolve(`./src/templates/team/index.jsx`),
                        context: {
                            slug: node.fields.slug,
                        },
                        layout: `content-layout${slashRemover(node.fields.slug)}`
                    });
                    createPage({
                        path: `${node.fields.slug}technology`,
                        component: path.resolve(`./src/templates/technology/index.jsx`),
                        context: {
                            slug: node.fields.slug,
                        },
                        layout: `content-layout${slashRemover(node.fields.slug)}`
                    });
                })
                resolve()
            })
    })
}
