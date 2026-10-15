// import React from "react"


// const app=()=>{

//   return(


//     <div>
//     <h1>kegfgdg</h1>
//     </div>



//   )
// }

// export default app;
import React from 'react'

const App = () => {
  return (
    <div>
      <nav style={{ height: 100, width: "100%", backgroundColor: 'black', display: 'flex', }}>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkhE7vs0karszrW0MLatUWaxsDCjWWnHWYZp3IIeXuqA&s=10" alt="" style={{ height: 100, width: 150 }} />

        <ul style={{ color: 'white', display: 'flex', gap: 50, margin: 0, padding: 0, fontSize: 17, marginLeft: 900, marginTop: 40, justifyContent: 'space-evenly' }}>
          <li style={{ color: "red" }}>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
      <section style={{ backgroundColor: 'black', display: 'flex' }}>

        <div style={{ marginLeft: 30, marginTop: 60 }}><span style={{ color: "white", fontSize: 80, fontFamily: "sans-serif,helvetica" }}>BUILD YOUR </span>
          <span style={{ fontSize: 80, color: "red", fontFamily: "sans-serif,helvetica" }}>BODY</span>
          <p style={{ color: "white", }}>Train harder,become stronger and transform your body with burn gym</p>
          <button style={{ backgroundColor: "#ff3b30", color: 'white', marginTop: 30, borderRadius: 6, padding: "13 28", fontSize: 15, border: "red" }}>Get Started</button>

        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAa9p3ICoLHuthM0VXPNu0hN2UNXtWtYuCMR9Y-eGSbg&s=10" alt="" />
      </section>

      <section>
        <div style={{ marginTop: 40, marginLeft: 130, display: 'flex' }}>
          <img src="https://images.ctfassets.net/0k812o62ndtw/2mNkZMb30nQbuzuPyFxSVV/de4da67cfa3a0fedb4e723875071d566/BackToGymSWEAT_enf1f07a7f6f79e7b8807d2436a6ae8e8b.jpg?fm=webp" alt="" style={{ width: 500, borderRadius: 10, }} />
          <div style={{ marginLeft: 30 }}>
            <h1 style={{ fontSize: 60, }}>About Burn Gym </h1>
            <p style={{ fontSize: 20, paddingRight: 40, marginRight: 40 }}>BURN GYM is modern fitness center created for people
              who want to become stronger,healtier and more confident.
              We provide professional terainers, more equipments and a
              motivation workout environment. </p>

            <button style={{ backgroundColor: "#ff3b30", color: 'white', marginTop: 30, borderRadius: 6, padding: "13 28", fontSize: 15, border: "red" }}>Learn more</button>
          </div>
        </div>

      </section>

      <section style={{ backgroundColor: 'whitesmoke' }}>
        <h1 style={{ display: 'flex', justifyContent: 'center', fontSize: 50 }}>Our Services</h1>
        <div style={{ height: 300, width: "100%", backgroundColor: 'whitesmoke', display: 'flex', justifyContent: 'space-evenly' }}>
          <div style={{ height: 200, width: 300, borderRadius:10, backgroundColor: 'white', padding: 20, justifyContent: 'center', alignItems: 'center' }}>
            <h2>personal training</h2>
            <p>Get personal guidance from professionals trainers and achieve your fiitness goals faster</p>
            <button style={{ backgroundColor: "#ff3b30", color: 'white', marginTop: 30, borderRadius: 6, padding: "13 28", fontSize: 15, border: "red" }}>view more</button>
          </div>

          <div style={{ height: 200, width: 300, borderRadius:10, backgroundColor: 'white', padding: 20, justifyContent: 'center', alignItems: 'center' }}>
            <h2>Strength training</h2>
            <p>Improve your strenth and builds muscle using mordern gym equipment and training programs.</p>
            <button style={{ backgroundColor: "#ff3b30", color: 'white', marginTop: 30, borderRadius: 6, padding: "13 28", fontSize: 15, border: "red" }}>view more</button>
          </div>

          <div style={{ height: 200, width: 300, borderRadius:10, backgroundColor: 'white', padding: 20, justifyContent: 'center', alignItems: 'center' }}>
            <h2>Cardio training</h2>
            <p>Improve stamina, burn calories and stay active with our cardio training programs.</p>
            <button style={{ backgroundColor: "#ff3b30",  color: 'white', marginTop: 30, borderRadius: 6, padding: "13 28", fontSize: 15, border: "red" }}>view more</button>

          </div>

        </div>
      </section>

     <footer style={{backgroundColor:'black'}}>
      <h2 style={{color:"red",display:'flex',justifyContent:'center',}}>BURN GYM</h2>
      <p style={{display:'flex',justifyContent:'center',color:'white'}}>© 2026 BURN GYM. All Rights Reserved.</p>
      <p style={{display:'flex',justifyContent:'center',color:'white'}}>Email: contact@burngym.com</p>
      <p style={{display:'flex',justifyContent:'center',color:'white'}}>Instagram | Facebook | YouTube</p>
     </footer>
    </div>
  )
}

export default App



