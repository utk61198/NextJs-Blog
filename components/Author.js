import React from "react"
import { Typography } from '@material-ui/core';

export default function Author({ author }) {
  return (
    <div className="author">
      {/* <img
        src={author.fields.avatar.fields.file.url}
        alt={author.fields.name}
      /> */}
      <div className="info">
        <span className="name"><Typography variant="body1" color="textPrimary" align="left">{author.fields.name}</Typography></span>
        <div>
        <span className="bio"><Typography variant="body2" color="textSecondary" align="left">{author.fields.bio}</Typography></span>
        </div>
      </div>
      
    </div>
  )
}