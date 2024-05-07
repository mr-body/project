class Footer extends React.Component {
	render(){
	    return (
	    	<div class="footer">
          <div>
            <span class="host" id="usuario" title="user">{user}</span>
            <span class="host" id="sistema" title="system ">{systemName}</span>
          </div>
          <div>
            <div className="servidor">
							<span className="hostPort">{host}:{port}</span>
						</div>
          </div>
		    </div>
	    )
	}
}
