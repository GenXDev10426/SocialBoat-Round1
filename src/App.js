import styled from "styled-components";
import axios from "axios";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { IconButton } from "@material-ui/core";
import "./App.css";
import {
  Header,
  LogoImage,
  AppName,
  SearchBox,
  SearchIcon,
  SearchInput,
} from "./components/header";
import Results from "./components/Results";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ResultListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  padding: 30px;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [searchText, setSearchText] = useState();
  //  const [timeOutId,setTimeOutId] = useState();
  const [videoList, setVideoList] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${searchText}&numResults=42`
    );
    console.log(response);

    setVideoList(response.data.results);
  };

  //  const onTextChange =(e) => {
  //    clearTimeout(timeOutId);
  //    setSearchText(e.target.value);
  //    const timeout= setTimeout ( () => fetchData(e.target.value), 200);

  //    setTimeOutId(timeout)
  //  };

  return (
    <Container>
      <Header>
        <AppName>
          <LogoImage src="/images/logo.svg" />
          FitnessArc
        </AppName>
        <SearchBox>
          <SearchIcon src="/images/searchIcon.svg" />
          <SearchInput
            placeholder="Search here..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                fetchData();
              }
            }}
          />
        </SearchBox>
        <IconButton color="inherit" className="accountIcon">
          <AccountCircleIcon />
        </IconButton>
      </Header>
      <ResultListContainer>
        {videoList?.length
          ? videoList.map((c) => (
              <Results
                key={c.heading}
                heading={c.heading}
                tags={c.tags}
                video={c.video}
              />
            ))
          : "No Results "}
      </ResultListContainer>
    </Container>
  );
}

export default App;
