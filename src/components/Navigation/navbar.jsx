import React, { Component } from "react";
const Navbar = ({ totalCounters }) => {
  // object destructuring props -> { totalCounters }
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand m-2" href="#/">
        Rock-Paper-Scissors{" "}
        <span className="badge bg-primary m-2">{totalCounters}</span>
      </a>
    </nav>
  );
};
// we cannot use life cycle hooks in stateless functional components

export default Navbar;

// import React, { Component } from "react";
// class Navbar extends Component {
//   state = {}; // As there is no state we  call it as a stateless functional component
//   render() {
//     return (
//       <nav className="navbar navbar-dark bg-dark">
//         <a className="navbar-brand m-2" href="#/">
//           Rock-Paper-Scissors{" "}
//           <span className="badge bg-primary m-2">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

// export default Navbar;
