import { React } from "react";

import PostText from "./posts/PostText";
import PostImage from "./posts/PostImage";

function Post(props) {
  if(props.Image==undefined){
    return (
      <PostText name={props.name}
      text={props.text}
      Image={props.Image}/>
    );
  }else{
    return (
      <PostImage name={props.name}
      text={props.text}
      Image={props.Image}/>
    );
  }
 

}

export default Post;
