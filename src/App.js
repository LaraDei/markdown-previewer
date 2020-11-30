import React from 'react'
import Preview from './Preview'
import Editor from './Editor'
import './App.css';



export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      preview: placeholder,
    
    }
  }
  

  handleChange(text){
    this.setState({
      preview: text,
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Markdown Previewer</h1>
        <div className='previewer'>
          <Editor markdown={this.state.preview} onChange={(e)=>{this.handleChange(e.target.value)}} />
          <Preview markdown={this.state.preview} />
        </div>
      </div>
    );
  }
}

const placeholder = 
`# Hello!

## This is a Markdown previewer  

### Check out what you can do

- You can make lists
1. And there are numbererd lists too.
1. two
1. three

create code
- backticks \`<p>Hi</p>\`
- <pre><code>Cool</code></pre>
- <code>I'm inside a code tag</code>
- Block Code below 
\`\`\`
function test() {
  console.log("that is a lot of backticks");
}
\`\`\`


Play with fonts. Go **Bold!** Or _italic!_ Or **_Both_**

add block quotes
 >like this!

add links, 
- learn more about [Markdown here](https://www.markdownguide.org/getting-started/)

add cute images 

![lizard](https://lh3.googleusercontent.com/proxy/M1mCNNAGeJlkGy9lx0VrWBG6RDihbJCXYYh1UPsCxBqWVOWU7lCncUMf9PjlQe756L1LszJM0svX3lzG7kHtWI6IlO26kXIS95YwgqtGe3_6JJ5Soazk4h0)

`
