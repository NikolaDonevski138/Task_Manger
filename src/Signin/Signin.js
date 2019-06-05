import React, { useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import Particles from "react-particles-js"
import { connect } from "react-redux"
import apiCall from "../api/apiCall"

function Signin({ auth, setAuth }) {
  const onSubmit = e => {
    e.preventDefault()
    if (jeu & jeu1) {
      setAuth({ isAuth: true })
    } else if (zheu & zheu1) {
      setAuth({ isAuth: true })
    }
  }
  let [UserName, setUserName] = useState("")
  let [password, setPassword] = useState("")
  const jeu = password === "Admin"
  const jeu1 = UserName === "Admin"
  const zheu = password === "TeamLeader"
  const zheu1 = UserName === "TeamLeader"
  const particlesOptions = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }
  if (auth.isAuth) {
    // props.dispatch(
    //   apiCall(
    //     props.dispatch,
    //     'signIn',
    //     {
    //       korisnickoIme: 'korisnik1',
    //       lozinka: 'lozinka123'
    //     },
    //     ''
    //   )
    // );
    console.log("pasword", password)
    console.log("UserName", UserName)
    console.log("SOMETHING")
    return <Redirect to="/UserDashboardPage" exact={true} />
  } else if (auth.isAuth) {
    return <Redirect to="/teamleader" exact={true} />
  }

  return (
    <div className="background">
      <Particles className="particles" params={particlesOptions} />
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center">
        <main className="pa4 black-80">
          <form onSubmit={onSubmit} className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">
                  User-Name
                </label>
                <input
                  value={UserName}
                  onChange={e => setUserName(e.target.value)}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-blue w-100"
                  type="text"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" for="password">
                  Password
                </label>
                <input
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-blue w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3" />
          </form>
        </main>
      </article>
    </div>
  )
}

export default connect()(Signin)
