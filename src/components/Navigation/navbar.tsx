import React from "react";
import paper from "../../assets/paper.png";
import rock from "../../assets/rock.png";
import scissor from "../../assets/scissor.png";
import { TotalCounters } from "../../data-models/rps-models";

const Navbar = ({ name }: TotalCounters) => {
  // object destructuring props -> { totalCounters }
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand m-2" href="#/">
        Rock-Paper-Scissors <img src={rock} alt="Rock" width="50" height="50" />
        <img src={paper} alt="Paper" width="50" height="50" />
        <img src={scissor} alt="Scissor" width="50" height="50" />
        {/* <span className="badge bg-primary m-2">{totalCounters}</span> */}
      </a>
      <a className="navbar-brand" href="#/">
        <span>{"Welcome " + name}</span>
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
