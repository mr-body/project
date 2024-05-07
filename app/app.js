const myBrowser = new browser()
const mytools = new tools()

//myBrowser.keyboard(true)

class App extends React.Component{
  render(){
    return (
      <div className="tabContainer">
        <Header />
        <Pages />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
