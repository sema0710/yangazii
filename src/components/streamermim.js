import React from 'react'
import { StreamermimDiv , StreamermimText , StreamermimTitle , StreamermimTextDiv} from "../style/mainStyle"


class Streamermim extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <StreamermimDiv>
                <StreamermimTitle>
                    양아지의 Mims!
                </StreamermimTitle>
                <StreamermimTextDiv>
                    <StreamermimText className="mims">135cm</StreamermimText>
                    <StreamermimText className="mims">뀨아지</StreamermimText>
                    <StreamermimText className="mims">아지모드</StreamermimText>
                    <StreamermimText className="mims">비빔면</StreamermimText>
                    <StreamermimText className="mims">순무했다</StreamermimText>
                    <StreamermimText className="mims">우동했다</StreamermimText>
                    <StreamermimText className="mims">우동</StreamermimText>
                    <StreamermimText className="mims">몸 씻고 기다려라</StreamermimText>
                    <StreamermimText className="mims">호떡</StreamermimText>
                </StreamermimTextDiv>
                <StreamermimText color="red">밈을 클릭해주세요!</StreamermimText>
            </StreamermimDiv>
        );
    }
    
    componentDidMount(){
        let mims = document.getElementsByClassName("mims");
        for(let i=0;i < mims.length;i++){
            mims[i].addEventListener("click",(e)=>{
                this.props.func(mims[i].innerHTML);
            })
        }
    }

}

export default Streamermim