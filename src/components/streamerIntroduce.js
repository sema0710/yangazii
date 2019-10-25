import React from 'react';
import {ProfileImg , ProfileInfo , StreamerIntroduceDiv} from '../style/mainStyle'

const mainImg = "https://w.namu.la/s/1b00344db7bc52dd507bf5f4f11d2e7c6278885e4a67c5f95f2e88fde5a589f42b7ab31762c52fcd134945c2b9e63b5043d67b335f3055f508604cd5a4c0302cfb4cba43a977fb2fb78fd5cf89d972de2e6695b421bd4c9b4f6508b338e1403b";
class StreamerIntroduce extends React.Component{
    render(){
        const img = this.props.img;
        return(
            <StreamerIntroduceDiv className="streamerIntroduce">
                <ProfileImg src={img ? img : mainImg}/>
                <ProfileInfo>이름 : 양아지</ProfileInfo>
                <ProfileInfo>키 : 135cm(170cm)</ProfileInfo>
                <ProfileInfo>나이 : 19세</ProfileInfo>
                <ProfileInfo>첫 방송일 : 2018년 2월 22일</ProfileInfo>
                <ProfileInfo>특이사항 : 빅헤드를 혐오함</ProfileInfo>
            </StreamerIntroduceDiv>    
        );
    }
}

export default StreamerIntroduce;