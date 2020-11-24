import React from 'react';
import './linkStyle.css'

const Body = () => {

	const textStyle = {
	   padding: "30px",
	   color: "#00111a"  
	};
	const preamble ={
		textAlign: "center",
		fontWeight: "800",
		fontSize: "30px",
		color: "#00043c"
	};
	
    return ( <div>
        <section className="ftco-section ftco-no-pt ftco-no-pb">
		  <div className="container-fluid px-md-0">
		<div className="row no-gutters">
		<div style={textStyle}>
		<h3 className="preamble" style={preamble}>PREA<span style={{color:"#fdbe34"}}>MBLE</span></h3>
		<blockquote><p>&quot;I humbly wish to appreciate the belief this distinguished body has on us by appointing and
		empowering us to draft its constitution. We began this journey conscious of the challenges 
	   and uncertainties on our path. With faith, dedication and perseverance we present the fruit
		of this journey.</p> 
	   <p>I wish to acknowledge the effort of my committee members Mr. Kama Kenneth and Mr. Onyema Chika
	   for their sacrifices.notwithstanding their busy schedules they still found time for this,may God 
	   replenish all the resources they spent toiling, brainstorming and making sure that we have this 
	   work almost two months within time.</p>
	   <p>I urge us all to study carefully the following Provisions and make our comments and reservations known
	   .This is our constitution;we all have the right to contribute to it. The committee will take a note of our views and will put them into consideration.
	   Finally we are encouraged to attend the meeting scheduled on 30th September, 2018 for the final adoption of this constitution. 
	   And as always be assured of our professional regards.&quot;</p></blockquote>
	   <p><strong>Mr.Dikachi Emmanuel Esq.</strong><br/>
	   Chairman, Constitution Drafting Committee.</p>
	   <a href="images/constitution.pdf"
	   download="cic09constitution.pdf" >Download the constitution here.</a>
		</div>
		</div>
	  
		</div>  
		</section>

        </div> );
}
 
export default Body;



