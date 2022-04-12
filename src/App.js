import react, { useState } from "react";
import "./App.css";
import Baslık from "./components/Baslık";
import Text from "./components/Text";
import Comp3 from "./components/Comp3";
import logo3 from "./logo3.jpg";
import logo4 from "./logo4.png";

import Content from "./components/Content";

function App() {
  const [control, setControl] = useState("anasayfa");
  return (
    <div>
      <div style={{ width: "100%", float: "left" }}>
        <a style={{ margin: "20px", backgroundColor:"darkred" , color:"white" }} onClick={() => setControl("anasayfa") } > Anasayfa</a>
        <a style={{ margin: "20px" , backgroundColor:"darkred" , color:"white"}} onClick={() => setControl("hakkımızda")}>  Hakkımızda</a>
        <a style={{ margin: "20px" , backgroundColor:"darkred" , color:"white"}} onClick={() => setControl("iletisim")}>  İletişim</a>
      </div>
      
      {control === "anasayfa" ? (
        <>
          <Baslık></Baslık>
          <Content></Content>
         
          <div
            style={{
              margin: "20px",
              display: "flex",
              width: "calc(100% - 70px)",
              justifyContent: "space-between",
            }}
          >
            <Comp3 img={logo3}></Comp3>
            <Comp3 img={logo4}></Comp3>
            <Comp3 img={logo3}></Comp3>
            <Comp3 img={logo4}></Comp3>
            <Comp3 img={logo3}></Comp3>
            <Comp3 img={logo4}></Comp3>
            <Comp3 img={logo3}></Comp3>
            <Comp3 img={logo4}></Comp3>
            <Comp3 img={logo3}></Comp3>
            <Comp3 img={logo4}></Comp3>
            <Comp3 img={logo3}></Comp3>
            <Comp3 img={logo4}></Comp3>
            <Comp3 img={logo3}></Comp3>
          </div>
        </>
        
      ) : control==="hakkımızda" ? ( <div style={{ margin: "20px" }}>
      <Text
        className="Text"
        yazi="The aim of this study was to review the research which focused on ‘Teaching Practicum’ systematically. 47 papers were evaluated in order to answer the questions designed in terms of the rules of systematic review. These studies analyzed according to their aims, designs, sampling, results and recommendations and was given suggestions. It was seen that most these studies conducted with pre-service teachers. It was also found that studies were designed according to qualitative and quantitative approaches."
      ></Text>
      <Text
        className="Text1"
        yazi="The aim of this study was to review the research which focused on ‘Teaching Practicum’ systematically. 47 papers were evaluated in order to answer the questions designed in terms of the rules of systematic review. These studies analyzed according to their aims, designs, sampling, results and recommendations and was given suggestions. It was seen that most these studies conducted with pre-service teachers. It was also found that studies were designed according to qualitative and quantitative approaches. "
      ></Text>
      ): 
    </div>): 
    null}
    </div>
  );
}

export default App;
