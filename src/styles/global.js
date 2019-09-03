import { createGlobalStyle } from "styled-components";

import log from "../assets/bac.jpg";

export default createGlobalStyle`


@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap');
*{
    margin: 0;
    padding: 0;
    font-family: 'Libre Baskerville', serif; 
}
body{
   background: url(${log}); 
   background-repeat:no-repeat; 
   background-size:cover; 
   width: 100%;
   height: 560px;
  display: flex;  
  justify-content: center;
  align-items: center;
  color: blue;
}

button {
   border-top: 1px solid #96d1f8;
   background: #65a9d7;
   background: gradient(linear, left top, left bottom, from(#065e99), to(#65a9d7));
   padding: 10.5px 21px;
   border-radius: 19px;
   text-shadow: rgba(0,0,0,.4) 0 1px 0;
   color: #000000;
   font-size: 15px;
   text-decoration: none;
   vertical-align: middle;
   
  
   }
button:hover {
   border-top-color: #28597a;
   background: #28597a;
   color: #000000;
   }
button:active {
   border-top-color: #1b435e;
   background: #1b435e;
   }
  
  .bt{
    text-decoration:none;
  }

`;