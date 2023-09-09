import React from 'react'

const Testimonials = () => {
  return (
    <div className='test'>
      <div className='Tcontents'>


            <div className='Ttitles'>
          <h2>Each and every client is important.</h2>
          <h4>Our Success Stories</h4>
             </div>


        <div className='Tboxes'>


          <div className="Tbox">
            <div className='Tboxtitles'>
            <h4>Where else can you get this fantastic and magical service?</h4>
            <p>“The application was delivered before the expected day and the quality was magic. Where else can you get this fantastic and magical service?”</p>
            </div>
            <div className='Tuserdetails'>
              <img src="\Images\IMAGE.png" alt="" />
              <div>
                <h5>Seun Adetola</h5>
                <p>Co-Founder</p>
                <h6>SysAid</h6>
              </div>
            </div>
          </div>

          <div className="Tbox">

          <div className='Tboxtitles'>
            <h4>The follow-up after the deliveries was consistent.</h4>
            <p>“Amazing designs and quick response from TNT's project management team. The follow-up after the deliveries was consistent.”</p>
            </div>

            <div className='Tuserdetails'>
              <img src="\Images\IMAGE.png" alt="" />
              <div>
                <h5>Aaron Williams</h5>
                <p>Project Manager</p>
                <h6>Microsoft</h6>
              </div>
          </div>
          </div>

          <div className="Tbox">
          <div className='Tboxtitles'>
            <h4>Pleasure working with the recruitment cordinator.</h4>
            <p>"The process of finding an excellent QA candidate was good - the communication and pre-examination were superb. Pleasure working with the recruitment cordinator."</p>
            </div>
            <div className='Tuserdetails'>
              <img src="\Images\IMAGE.png" alt="" />
              <div>
                <h5>Pete Young</h5>
                <p>IT Recruiter</p>
                <h6>LASRRA</h6>
              </div>
          </div>
          </div>

          
        </div>
      </div>
        
    </div>
  )
}

export default Testimonials