import React from "react"

   //PRACTICAL - 1
function App({name, roll}) {
  return (
    <>
      <h1>Hello {name} {roll}, Happy Wednesday !!!</h1>
    </>
  );
}

export default App;


// PRACTICAL - 2
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {count: 0};
//   }

//   f1 = ()=> {
//     this.setState({count: this.state.count + 1});
//   }

//   f2 = ()=> {
//     this.setState({count: this.state.count - 1});
//   }
  
//   render(){
//     return (
//       <>
//         <button onClick={this.f1}>
//           increment : {this.state.count}
//         </button>
//         <button onClick={this.f2}>
//           decrement : {this.state.count}
//         </button>

//       </>
//     )
//   }

// }

// export default App;

// PRACTICAL : 3
// import React, { useState } from "react";
// function ReactForm2()
// {
//     const [myusername, setmyusername] = useState("");
//     function f1(event)
//     {
//         setmyusername(event.target.value);
//         //console.log(myusername);
//     }
//     function mysubmit(event)
//     {
//      event.preventDefault();
//      console.log(myusername);
//     }
//     return(
//     <form onSubmit={mysubmit}>
//         <label htmlFor="">Username:
//             <input type="text" value={myusername} onChange={f1}/>
//             <input type="submit" />
//         </label>
  

//     </form>
    
//     )
// }
// export default ReactForm2;


// PRACTICAL - 4
// import Home from "./components/Home";
// import Contact from "./components/Contact";
// import About from "./components/About";
// import {BrowserRouter, Route, Routes} from "react-router-dom";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home/>} />
//           <Route path="/about" element={<About/>} />
//           <Route path="/contact" element={<Contact/>} />
//         </Routes>
//       </BrowserRouter>

    
//     </>
//   )
// }

// export default App;