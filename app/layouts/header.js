class Header extends React.Component {
	render(){
	    return ( 
	    	<div className="buttonContainer">
	            <div>
	               <button onClick={() => showPanel(0, '#d7d4d4')}>
	                  <i class='bx bx-dialpad-alt' ></i> Teclado
	                </button>

	                <button onClick={() => showPanel(1, '#d7d4d4')}>
	                  <i class='bx bx-scan'></i> Scaner
	                </button>

	                <button onClick={() => showPanel(2, '#d7d4d4')}>
	                  <i class='bx bx-help-circle' ></i> Ajuda
	                </button>
	            </div>
	        </div>
	    )
	}
}