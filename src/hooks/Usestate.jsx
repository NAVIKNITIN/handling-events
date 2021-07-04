import React, { useState  } from "react";
import Title from "./Title";

export default function Usestate() {
  const [name, setname] = useState("");

 Title( `${name}`);

  return (
    <div>
      <div className="form-group">
        <label for=""></label>
        <input
          type="text"
          className="form-control"
          name=""
          aria-describedby="helpId"
          placeholder="Enter Your Name"
          onChange={e => setname(e.target.value)}
        />
        
        <div>
            Welcome {name} 
        </div>
      </div>
    </div>
  );
}
