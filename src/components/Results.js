import styled from 'styled-components'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const ResultContainer = styled.div`
display:flex;
flex-direction: columns;
align-items: center;
justify-contents: evenly-spaced;
padding:15px;
width:340px;
box-shadow: 0 3px 10px 0 #aaa;
cursor:pointer;
`;

const Heading = styled.span`
font size: 18px;
font-weight:600;
color:black;
margin:15px;
white-space:Nnowrap;
text-overflow:hidden;
overflow:hidden;
`;

const Tags = styled.span`
display:flex;
flex-direction:column;

font size: 14px;
color:black;
margin:10px;
white-space:nowrap;
`;

const Results = ({heading, video, tags}) => {

    // const {heading, video, tags} =props.video;
    return (<ResultContainer>
        
        <Card className='card' >
      <CardActionArea className='video'>
        <CardMedia component="video" disable-autoPlay controls src={video} />
        <CardContent>
          <Heading>
            {heading} </Heading>
          <Tags> {tags[0]}  {tags[1]}  {tags[2]} </Tags>
          
        </CardContent>
      </CardActionArea>
    </Card>

    </ResultContainer>
    );
}

export default Results;