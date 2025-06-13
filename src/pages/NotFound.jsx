import React from 'react'


const error404 = '/errorillus.png';

const NotFound = () => {
  return (
    <div className='notfound'
      style={
        {display: 'flex', 
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100vh',
          backgroundColor: 'var(--secondary)'
        }
      }>
      <div className='con' style={
          {width: "50%", 
          
          }
        }>
        <div style={{height: 'auto', textAlign: 'center' }}>
          <img src={error404} alt='errorpage' style={{width: "100%", height: '400px', objectFit: 'contain' }}/>
        </div>
        <h2 style={
          {fontSize: '1.5rem', 
            fontFamily: 'var(--font-three)',
            textTransform: 'capitalize',
            color: 'var(--main)',
            fontWeight: '600'

          }}>
            Sorry, the page not found 
             <a href="/" style={{
              color: 'var(--main)',
              textTransform: 'lowercase',
            }}> back to homepage</a>
          </h2>
      </div>
    </div>
  )
}

export default NotFound
