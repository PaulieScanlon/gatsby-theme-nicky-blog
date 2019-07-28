import React from "react"
import { navigate, Link } from "gatsby"
import * as path from "path"

const Pagination = ({
  context: { numPages, currentPage, prefixPath },
  basePath,
}) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPageNum = currentPage - 1
  const nextPageNum = currentPage + 1
  const prevPageLink =
    !isFirst && currentPage - 1 === 1
      ? path.join(basePath)
      : path.join(basePath, prefixPath, prevPageNum.toString())
  const nextPageLink =
    !isLast && path.join(basePath, prefixPath, nextPageNum.toString())
  const changePage = e => {
    const { value } = e.target
    const navPath =
      value === "1"
        ? path.join(basePath)
        : path.join(basePath, prefixPath, value)
    navigate(navPath)
  }
  return (
    <div>
      <div>
        {prevPageLink ? (
          <Link to={prevPageLink}>← Newer posts</Link>
        ) : (
          <span>← Newer posts</span>
        )}
        {nextPageLink ? (
          <Link to={nextPageLink}>Older posts →</Link>
        ) : (
          <span>Older posts →</span>
        )}
      </div>
      <div>
        <span>Showing page &nbsp;</span>
        <select onChange={changePage} value={currentPage.toString()}>
          {Array.from({ length: numPages }, (_, i) => (
            <option value={`${i + 1}`} key={`pagination-number${i + 1}`}>
              {i + 1}
            </option>
          ))}
        </select>
        <span>&nbsp; of &nbsp;</span>
        <span>{numPages}</span>
      </div>
    </div>
  )
}
// class Pagination extends React.Component {

//   render() {

//     return (
//       <Pagination>

//         <Info>

//           <Arrow width="10" height="5" viewBox="0 0 10 5">
//             <path d="M0 0l5 4.998L10 0z" fillRule="evenodd" />
//           </Arrow>

//         </Info>
//       </Pagination>
//     )
//   }
// }

export default Pagination
