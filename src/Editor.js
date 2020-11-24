import React from 'react'
import marked from 'marked'

export default function Editor(props){
    return(
        <textarea
            id='editor'
            onChange={props.onChange}
            type='text'
            value={props.markdown}
        />
    )
}