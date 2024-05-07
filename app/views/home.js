class Home extends React.Component {
	render(){
	    return (
	    	<div className="tabPanel keyboard">
	           <div className="maincode">
	           	   <h1>Codigo de acesso</h1><hr></hr>
		           <h1 id="codigo">{key}</h1>
		           <div className="grupButtons">
			           <button className="newCode"><i class='bx bx-refresh'></i> Gerar novo codigo</button>
			           <button className="copy"><i class='bx bx-copy'></i> Copiar codigo</button>
		           </div>
	           </div>
		        <div id="qrcode"></div>
	        </div>
	    )
	}
}
