import React, { Component } from "react";
import { EditorState, convertToRaw, ContentState, convertFromHTML,convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from 'html-to-draftjs';

export default class ControlledEditor extends Component {
  constructor(props) {
    super(props);

    const editorState = props.meta.initial ? EditorState.createWithContent(convertFromRaw(props.meta.initial)) : EditorState.createEmpty();
    this.state = {
      editorState
    };



    this.props.input.onChange(
      convertToRaw(this.state.editorState.getCurrentContent())
    );
  }

  onEditorStateChange: Function = editorState => {
    const { onChange, value } = this.props.input;

    const newValue = convertToRaw(editorState.getCurrentContent());

    if (value !== newValue) {
      onChange(newValue);
    }

    this.setState({
      editorState
    });

  };

  render() {
    const { editorState } = this.state;
    const {input, label, type, meta: {error, touched}} = this.props;
    return (
      <div>
        <label>{label}</label>
        <Editor
          {...this.props}
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true }
          }}
        />
      </div>
    );
  }
}
