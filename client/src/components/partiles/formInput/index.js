import React from 'react';
import SimpleInput from '../simpleInput';
import EditorFieldComponent from "../customEditor/EditorFieldComponent";

export default (props) => {
  if(props.type ==='draftEditor'){
    return <EditorFieldComponent {...props} />;
  } else{
    return <SimpleInput {...props} />;
  }
};
