import React from 'react'
import microsoftLogo from '../assets/microsoft.png';
import adobeLogo from '../assets/adobe.png';
import androidLogo from '../assets/android.png';
import googleLogo from '../assets/google.png';
import javaLogo from '../assets/java.png';
function Sponsor() {
  return (
    <section class="ftco-section ftco-partner">
    	<div class="container">
    		<div class="row">
    			<div class="col-sm ftco-animate fadeInUp ftco-animated">
    				<a href="#" class="partner"><img width={200} height={200} src={microsoftLogo} class="img-fluid" alt="Colorlib Template"/></a>
    			</div>
    			<div class="col-sm ftco-animate fadeInUp ftco-animated">
    				<a href="#" class="partner"><img width={200} height={200} src={adobeLogo} class="img-fluid" alt="Colorlib Template"/></a>
    			</div>
    			<div class="col-sm ftco-animate fadeInUp ftco-animated">
    				<a href="#" class="partner"><img width={200} height={200} src={androidLogo} class="img-fluid" alt="Colorlib Template"/></a>
    			</div>
    			<div class="col-sm ftco-animate fadeInUp ftco-animated">
    				<a href="#" class="partner"><img width={200} height={200} src={googleLogo} class="img-fluid" alt="Colorlib Template"/></a>
    			</div>
    			<div class="col-sm ftco-animate fadeInUp ftco-animated">
    				<a href="#" class="partner"><img width={200} height={200} src={javaLogo} class="img-fluid" alt="Colorlib Template"/></a>
    			</div>
    		</div>
    	</div>
    </section>
  )
}

export default Sponsor