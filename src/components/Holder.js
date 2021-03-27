import React from "react";
import bg from "../assets/bg3.jpg";



const Holder = () => {

  return (
<section id="clients" className="clients clients">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-6">
              <img src="../assets/bg3.jpg" className="img-fluid" alt="" data-aos="zoom-in" />
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <img src="assets/img/clients/passport2.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay={100} />
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <img src="assets/img/clients/chart.svg" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay={200} />
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <img src="assets/img/clients/nodejs.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay={300} />
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <img src="assets/img/clients/numpy.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay={400} />
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <img src="assets/img/clients/gcloud.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay={500} />
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <img src="assets/img/clients/puppeteerc.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay={700} />
            </div>
          </div>
        </div>
      </section>
  );
};



export default Holder;