import styled from "styled-components";;

const PokemonStyle = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
font-family: 'Noto Sans JP', sans-serif;
height: 180px;
border-radius: 30px;
color: white;
.div-img {
    display: inline-block;
    animation: mymove1 1s infinite;
    img{
        width: 16vh;
    }
}
@keyframes mymove1{
  0%   {margin-top:8%}
  50%  {margin-top:10%}
  100%  {margin-top:8%}
}
.pokemon-info {

display: inline-block;
margin-top: 10%;

}
.pokemon-Cardfire {
  border-radius: 30px;
  background: rgb(253,76,90);
  background: linear-gradient(90deg, rgba(253,76,90,1) 0%, rgba(171,31,35,1) 55%);
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  .power {
  height: 19px;
  width: 55px;
  color: white;
  border-radius: 5px;
  text-align: center;
  background-color: #AB1F23;
  display: inline-block;
  justify-content: space-between;

  .power1 {
    display: inline-block;
    
  }
}
  
}
.pokemon-Cardgrass {
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  background: rgb(39,203,79);
  background: linear-gradient(90deg, rgba(39,203,79,1) 0%, rgba(20,123,60,1) 60%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  .power {
  height: 19px;
  width: 55px;
  color: white;
  border-radius: 5px;
  text-align: center;
  background-color: #147b3c;
  display: inline-block;
  justify-content: space-between;

  .power1 {
    display: inline-block;
    
  }
}
}


.pokemon-Cardwater {
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  background: rgb(134,168,252);
  background: linear-gradient(90deg, rgba(134,168,252,1) 0%, rgba(21,82,226,1) 60%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  .power {
  height: 19px;
  width: 55px;
  color: white;
  border-radius: 5px;
  text-align: center;
  background-color: #1552E2;
  display: inline-block;
  justify-content: space-between;

  .power1 {
    display: inline-block;
    
  }
}
  
}
.pokemon-Cardbug {
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  background: rgb(28,76,37);
  background: linear-gradient(90deg, rgba(28,76,37,1) 0%, rgba(27,99,40,1) 44%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  .power {
  height: 19px;
  width: 55px;
  color: white;
  border-radius: 5px;
  text-align: center;
  background-color: #1C4C25;
  display: inline-block;
  justify-content: space-between;

  .power1 {
    display: inline-block;
    
  }
}
  
}
.pokemon-Cardnormal {
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  background: rgb(202,152,167);
  background: linear-gradient(90deg, rgba(202,152,167,1) 0%, rgba(115,82,91,1) 60%);;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  .power {
  height: 19px;
  width: 55px;
  color: white;
  border-radius: 5px;
  text-align: center;
  background-color: #73525B;
  display: inline-block;
  justify-content: space-between;

  .power1 {
    display: inline-block;
    
  }
}
  
}
.pokemon-Cardpoison {
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  background: rgb(155,105,214);
  background: linear-gradient(90deg, rgba(155,105,214,1) 0%, rgba(94,45,136,1) 60%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  .power {
  height: 19px;
  width: 55px;
  color: white;
  border-radius: 5px;
  text-align: center;
  background-color:#5E2D88 ;
  display: inline-block;
  justify-content: space-between;

  .power1 {
    display: inline-block;
    
  }
}
  
}
.pokemon-Cardelectric {
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  background: rgb(251,251,114);
  background: linear-gradient(90deg, rgba(251,251,114,1) 0%, rgba(149,149,39,1) 61%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  .power {
  height: 19px;
  width: 55px;
  color: white;
  border-radius: 5px;
  text-align: center;
  background-color:#E3E32B ;
  display: inline-block;
  justify-content: space-between;

  .power1 {
    display: inline-block;
    
  }
}
  
}
.pokemon-Cardground {
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  background: rgb(169,112,44);
  background: linear-gradient(90deg, rgba(169,112,44,1) 0%, rgba(110,73,31,1) 64%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  .power {
  height: 19px;
  width: 55px;
  color: white;
  border-radius: 5px;
  text-align: center;
  background-color:#6E491F ;
  display: inline-block;
  justify-content: space-between;

  .power1 {
    display: inline-block;
    
  }
}
  

}
.pokemon-Cardfairy {
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  background: rgb(234,19,105);
  background: linear-gradient(90deg, rgba(234,19,105,1) 0%, rgba(149,26,68,1) 64%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  .power {
  height: 19px;
  width: 55px;
  color: white;
  border-radius: 5px;
  text-align: center;
  background-color:#951A44 ;
  display: inline-block;
  justify-content: space-between;

  .power1 {
    display: inline-block;
    
  }
}
}
.pokemon-Carddark {
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  background: rgb(84,86,105);
  background: linear-gradient(90deg, rgba(84,86,105,1) 0%, rgba(4,7,6,1) 64%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  .power {
  height: 19px;
  width: 55px;
  color: white;
  border-radius: 5px;
  text-align: center;
  background-color:#040706 ;
  display: inline-block;
  justify-content: space-between;

  .power1 {
    display: inline-block;
    
  }
}
}
.pokemon-Carddragon {
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  background: rgb(68,139,149);
  background: linear-gradient(90deg, rgba(68,139,149,1) 0%, rgba(96,203,217,1) 64%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  .power {
  height: 19px;
  width: 55px;
  color: white;
  border-radius: 5px;
  text-align: center;
  background-color:#60CBD9;
  display: inline-block;
  justify-content: space-between;

  .power1 {
    display: inline-block;
    
  }
}
}
.pokemon-Cardfighting{
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  background: rgb(239,97,56);
  background: linear-gradient(90deg, rgba(239,97,56,1) 0%, rgba(153,64,35,1) 64%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  .power {
  height: 19px;
  width: 55px;
  color: white;
  border-radius: 5px;
  text-align: center;
  background-color:#994023 ;
  display: inline-block;
  justify-content: space-between;

  .power1 {
    display: inline-block;
    
  }
}
}
.pokemon-Cardflying{
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  background: rgb(147,178,199);
  background: linear-gradient(90deg, rgba(147,178,199,1) 0%, rgba(74,103,125,1) 64%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  .power {
  height: 19px;
  width: 55px;
  color: white;
  border-radius: 5px;
  text-align: center;
  background-color:#4A677D ;
  display: inline-block;
  justify-content: space-between;

  .power1 {
    display: inline-block;
    
  }
}
}
.pokemon-Cardghost{
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  background: rgb(144,103,144);
  background: linear-gradient(90deg, rgba(144,103,144,1) 0%, rgba(51,51,107,1) 64%);;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  .power {
  height: 19px;
  width: 55px;
  color: white;
  border-radius: 5px;
  text-align: center;
  background-color:#33336B ;
  display: inline-block;
  justify-content: space-between;

  .power1 {
    display: inline-block;
    
  }
}
}
.pokemon-Cardice{
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  background: rgb(132,208,245);
  background: linear-gradient(90deg, rgba(132,208,245,1) 0%, rgba(214,239,249,1) 64%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  .power {
  height: 19px;
  width: 55px;
  color: white;
  border-radius: 5px;
  text-align: center;
  background-color: #D6EFF9;
  display: inline-block;
  justify-content: space-between;

  .power1 {
    display: inline-block;
    
  }
}
}
.pokemon-Cardpsychic{
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  background: rgb(165,42,106);
  background: linear-gradient(90deg, rgba(165,42,106,1) 0%, rgba(248,28,145,1) 64%);;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  .power {
  height: 19px;
  width: 55px;
  color: white;
  border-radius: 5px;
  text-align: center;
  background-color: #F81C91;
  display: inline-block;
  justify-content: space-between;

  .power1 {
    display: inline-block;
    
  }
}
}
.pokemon-Cardrock{
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  background: rgb(139,62,33);
  background: linear-gradient(90deg, rgba(139,62,33,1) 0%, rgba(72,24,11,1) 64%);;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  .power {
  height: 19px;
  width: 55px;
  color: white;
  border-radius: 5px;
  text-align: center;
  background-color: #48180B;
  display: inline-block;
  justify-content: space-between;

  .power1 {
    display: inline-block;
    
  }
}
}
.pokemon-Cardsteel{
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  background: rgb(95,117,109);
  background: linear-gradient(90deg, rgba(95,117,109,1) 0%, rgba(72,188,148,1) 64%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  .power {
  height: 19px;
  width: 55px;
  color: white;
  border-radius: 5px;
  text-align: center;
  background-color: #48BC94;
  display: inline-block;
  justify-content: space-between;

  .power1 {
    display: inline-block;
    
  }
}
}

`;
export default  PokemonStyle;