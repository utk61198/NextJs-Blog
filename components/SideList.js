import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor:"#282828",
    color:"white"
    
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SideList({ posts = [] }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <List component="nav" aria-label="secondary mailbox folders">
      {posts.map((post) => (
        <ListItem>
          <ListItemText>
          {post.fields.title}
        </ListItemText>

        </ListItem>
        


  ))}
      </List>
    </div>
  );
}