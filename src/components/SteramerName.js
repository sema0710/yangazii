import React from 'react'
import { StreamerNameDiv , MoveTitle , Names , SubStreamerNameDiv , NamesWrapper , Explain} from "../style/mainStyle"


class Streamermim extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <StreamerNameDiv dis ={this.props.count}>
                <SubStreamerNameDiv dis ={this.props.count}>
                    <MoveTitle>양아지의 다른 이름?</MoveTitle>
                </SubStreamerNameDiv>
                <NamesWrapper>
                    <Names top="200px" left="0vw" time="3s" className="name">아지쿤</Names>
                    <Names top="100px" left="0vw" time="3.6s" className="name">양날두</Names>
                    <Names top="300px" left="0vw" time="2.6s" className="name">아직훈</Names>
                    <Names top="100px" left="0vw" time="3.3s" className="name">조제수</Names>
                    <Names top="20px" left="0vw" time="2.8s" className="name">호먹좌</Names>
                    <Names top="250px" left="0vw" time="3.0s" className="name">몸씻좌</Names>
                    <Names top="100px" left="0vw" time="3.1s" className="name">트최탱</Names>
                    <Names top="300px" left="0vw" time="2.7s" className="name">트최찐</Names>
                    <Names top="200px" left="0vw" time="2.9s" className="name">돈미양</Names>
                    <Names top="0px" left="0vw" time="3.8s" className="name">강북구 사이가</Names>
                </NamesWrapper>
                <Explain>별명을 클릭하세요</Explain>
            </StreamerNameDiv>
        );
    }
    
    componentDidUpdate(){
        let names = document.getElementsByClassName("name");
        for(let i =0;i < names.length;i++){
            names[i].addEventListener("click",()=>{
                document.location.href = "https://namu.wiki/w/%EC%96%91%EC%95%84%EC%A7%80/%EB%B0%88"
            })
        }
    }

}

export default Streamermim