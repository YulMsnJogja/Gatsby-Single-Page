// import React from "react"
// import { graphql } from "gatsby"


// export default function Template({
//   data, // this prop will be injected by the GraphQL query below.
// }) {
//   const { markdownRemark } = data // data.markdownRemark holds your post data
//   const { frontmatter, html } = markdownRemark
//   return (
//     <div className="blog-post-container">
//       <div className="blog-post">
//         <h1>{frontmatter.title}</h1>
//         <img src={frontmatter.mainImage.image} alt={frontmatter.mainImage.imageAlt}></img>
//         <div
//           className="blog-post-content"
//           dangerouslySetInnerHTML={{ __html: html }}
//         />
//       </div>
//     </div>
//   )
// }
// export const pageQuery = graphql`
//   query($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         slug
//         title
//         mainImage{
//             image
//             imageAlt
//         }
//       }
//     }
//   }
// `