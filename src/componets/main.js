


 export default function Main(){
  return(
   <div className="main">
    <div className="row">
      <div className="col-lg-6">
      <div className="card">
      <div className="card-header">Projects</div>
        <div className="card-body">
          <div className="info text-muted">
            <h6>Server Migration <span>20%</span></h6>
            <div class="progress">
            <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="10" style={{width:'25%'}} aria-valuemin="0" aria-valuemax="100"></div>
          </div>   
            <h6>Sales Tracking <span>40%</span></h6>
            <div class="progress">
            <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="10" style={{width:'40%'}} aria-valuemin="0" aria-valuemax="100"></div>
          </div>   
            <h6>Customer Database <span>60%</span></h6>
            <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="10" style={{width:'60%'}} aria-valuemin="0" aria-valuemax="100"></div>
          </div>   
            <h6>Payout Details <span>80%</span></h6>
            <div class="progress">
            <div class="progress-bar bg-info" role="progressbar" aria-valuenow="10" style={{width:'80%'}} aria-valuemin="0" aria-valuemax="100"></div>
          </div>   
            <h6>Account Setup <span>complete</span></h6>
            <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" aria-valuenow="10" style={{width:'100%'}} aria-valuemin="0" aria-valuemax="100"></div>
          </div>   
          </div>
        </div>
         </div>
      </div>
      <div className="col-lg-6">
        <div className="card">
          <div className="card-header"> Illustrations </div>
          <div className="card-body">
            <img className="svg" src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" alt="undraw-img" />
            <p className="text-muted ">Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
          </div>
        </div>
      </div>
    </div>

    <div className="row color-box">
     <div className="col-lg-6">
       <div className="row">
         <div className="col-lg-6">
         <div className="card color-card">
        <div className="card-body bg-primary text-white shadow">
          primary
          <div className="hexa-colors">#4e73df</div>
        </div>
        </div>
         </div>
         <div className="col-lg-6">
         <div className="card color-card">
        <div className="card-body bg-primary text-white shadow">
        Success
          <div className="hexa-colors">#1cc88a</div>
        </div>
        </div>
         </div>
         <div className="col-lg-6">
         <div className="card color-card">
        <div className="card-body bg-info text-white shadow">
          Info
          <div className="hexa-colors">#36b9cc</div>
        </div>
        </div>
         </div>
         <div className="col-lg-6">
         <div className="card color-card">
        <div className="card-body bg-warning text-white shadow">
        Warning
          <div className="hexa-colors">#f6c23e</div>
        </div>
        </div>
         </div>
         <div className="col-lg-6">
         <div className="card color-card">
        <div className="card-body bg-danger text-white shadow">
          Danger
          <div className="hexa-colors">#e74a3b</div>
        </div>
        </div>
         </div>
         <div className="col-lg-6">
         <div className="card color-card">
        <div className="card-body bg-secondary text-white shadow">
        Secondary
          <div className="hexa-colors">#858796</div>
        </div>
        </div>
         </div>
         <div className="col-lg-6">
         <div className="card color-card">
        <div className="card-body bg-light text-secondary shadow">
          Light
          <div className="text-muted">#f8f9fc</div>
        </div>
        </div>
         </div>
         <div className="col-lg-6">
         <div className="card color-card">
        <div className="card-body bg-dark text-white shadow">
          Dark
          <div className="hexa-colors">#5a5c69</div>
        </div>
        </div>
         </div>
       </div>
     </div>
       <div className="col-lg-6 mt-3">
         <div className="card">
           <div className="card-header">Development Approach</div>
           <div className="card-body">
             <p className="m-3">SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.</p>
             <p className="m-3">Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
           </div>
         </div>
       </div>
     </div>
    </div>
  )
}