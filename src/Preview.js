import React from 'react'
import marked from 'marked'

export default function Preview(props){
    return (
        <div
          dangerouslySetInnerHTML={{
            __html: marked(props.markdown)
          }}
          id='preview'
        />
      );
}