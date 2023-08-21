import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <section>
        <div className='home-container'>
            <h1>WELCOME TO <br /><span className='neutral-color'>VAULTSTER</span></h1>
            <Link to="/Dashboard">
                <button>ENTER VAULT</button>
            </Link>
        </div>
    </section>
  )
}

export default Home