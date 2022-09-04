import "./App.css";
import { Box,  Flex,  Heading, HStack, Image, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { getweather } from "./Reducer/action";
import { useDispatch, useSelector } from "react-redux";
import { MdAddLocationAlt } from "react-icons/md";
import { BsSunset } from "react-icons/bs";
import { FiSunrise } from "react-icons/fi";
import { GiPressureCooker } from "react-icons/gi";
import { FaTemperatureHigh } from "react-icons/fa";

function App() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  let { isError, data, isLoading } = useSelector((state) => state);

  const handleChange = (e) => {
    setCity(e.target.value);
    console.log(city);
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      dispatch(getweather(city));
    }
  };
  
  if (isLoading) {
    return <Image className="centerImage" src="https://media1.tenor.com/images/d6cd5151c04765d1992edfde14483068/tenor.gif?itemid=5662595"/>
  }
  if (isError) {
    alert("not found | please reload")
   
  }
  
  console.log(data);
  return (
    <Box className="App">
      
      <Flex  className="navbar">
      
        {data?.weather?.length > 0 ? (
          <Box className="header" >
          <span className="icon blue " ><MdAddLocationAlt/></span>Location:- {data?.name}-{data?.sys?.country}
          </Box>
        ) : (
          ""
        )}
       
      </Flex>
      <Box className="manage" >
      <Box className="heading" ><Heading>weather app</Heading></Box>
      <Box className="box">
        <Box>
          <Input
          className="input"
            value={city}
            onChange={handleChange}
            placeholder={"Please enter city..."}
            onKeyDown={handleEnter}
          />
        </Box>
        <Box className="left" >
          {data?.weather?.length > 0 ? (
            <>
            <Heading><span className="icon red" ><FaTemperatureHigh/></span>temp:- {(data?.main?.temp - 273.15).toFixed(2)}^c</Heading>
            <Text><span className="icon yellow"><FiSunrise/></span>sunrise:-{data?.sys?.sunrise}</Text>
            <Text><span className="icon yellow" ><BsSunset/></span>sunset:-{data?.sys?.sunset}</Text>
            <Text><span className="icon red" ><GiPressureCooker/></span>pressure:-{data?.main?.pressure}</Text>
            </>
          ) : (
            ""
          )}
       
        </Box>
      </Box>
      </Box>
    </Box>
  );
}

export default App;
