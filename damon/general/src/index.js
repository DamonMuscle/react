'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

window.React = React;
window.ReactDOM = ReactDOM;

var { Profiler } = React

function logger(...args)
{
  console.log("profiler", ...args)
}

class App extends React.Component{
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.onBlur = this.onBlur.bind(this);
  }

  onBlur(e){
    console.log(e, this)
  }

  render(){
    return <>
    <Profiler id="Panel" onRender={logger}>
      12345
      <input type="text" ref={this.myRef} onBlur={this.onBlur} />

      <div className={['app-shell', this.props.className || ''].join(' ').trim()}>
        <Content className="content">{this.props.children}</Content>
      </div>
    </Profiler>
  </>
  }
}

function Content(props)
{
    return <div className={props.className}>{props.children}</div>
}

ReactDOM.render(
  <App className="dddd">hello world</App>,
  document.getElementById('root')
);
