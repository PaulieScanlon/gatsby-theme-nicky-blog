import React from "react"
import { Link } from "gatsby"
import { IPrevNext } from "../types"

interface IProps {
  prev?: IPrevNext
  next?: IPrevNext
  basePath: string
}

const PostExtra: React.FC<IProps> = ({ prev, next, basePath }) => (
  <div style={{ display: `flex`, justifyContent: `space-between` }}>
    {prev && (
      <Link
        to={`${basePath === `/` || basePath === `` ? `` : `/`}${basePath}/${
          prev.slug
        }`}
      >
        <span>← Older</span>
        <br />
        <span>{prev.title}</span>
      </Link>
    )}
    {next && (
      <Link
        to={`${basePath === `/` || basePath === `` ? `` : `/`}${basePath}/${
          next.slug
        }`}
      >
        <span>Newer →</span>
        <br />
        <span>{next.title}</span>
      </Link>
    )}
  </div>
)

export default PostExtra
