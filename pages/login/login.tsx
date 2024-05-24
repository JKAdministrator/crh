import React from 'react'
import './login.css'
function login() {
  return (
    <>
        <section>
            <img src="./logo.jpg" alt="Logo Corhoma" />
        </section>
        <section>
            <form>
                <label htmlFor="username">Usuario:</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="password">Usuario:</label>
                <input type="password" name="password" id="password" />
                <button className='btn btn-blue' type='button'></button>
            </form>
        </section>
    </>
  )
}

export default login