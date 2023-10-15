import React from 'react'
import microsoftLogo from '../assets/microsoft.png';
import adobeLogo from '../assets/adobe.png';
import androidLogo from '../assets/android.png';
import googleLogo from '../assets/google.png';
import javaLogo from '../assets/java.png';
function Sponsor() {
  return (
    <section className="ftco-section ftco-partner">
    	<div className="container">
    		<div className="row">
    			<div className="col-sm ftco-animate fadeInUp ftco-animated">
    				<a href="#" className="partner"><img width={200} height={200} src={microsoftLogo} className="img-fluid" alt="Colorlib Template"/></a>
    			</div>
    			<div className="col-sm ftco-animate fadeInUp ftco-animated">
    				<a href="#" className="partner"><img width={200} height={200} src={adobeLogo} className="img-fluid" alt="Colorlib Template"/></a>
    			</div>
    			<div className="col-sm ftco-animate fadeInUp ftco-animated">
    				<a href="#" className="partner"><img width={200} height={200} src={androidLogo} className="img-fluid" alt="Colorlib Template"/></a>
    			</div>
    			<div className="col-sm ftco-animate fadeInUp ftco-animated">
    				<a href="#" className="partner"><img width={200} height={200} src={googleLogo} className="img-fluid" alt="Colorlib Template"/></a>
    			</div>
    			<div className="col-sm ftco-animate fadeInUp ftco-animated">
    				<a href="#" className="partner"><img width={200} height={200} src={javaLogo} className="img-fluid" alt="Colorlib Template"/></a>
    			</div>
    		</div>
    	</div>
    </section>
  )
}

export default Sponsor