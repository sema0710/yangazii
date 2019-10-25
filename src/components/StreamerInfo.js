import React from 'react'
import { Main , ProfileInfo , ProfileTitle , StreamerInfoDiv} from '../style/mainStyle'
import StreamerIntroduce from './streamerIntroduce';

class StreamerInfo extends React.Component{
    render(){
        return(
            <StreamerInfoDiv>
                <ProfileTitle id="typingP"></ProfileTitle>
            </StreamerInfoDiv>
        );
    }
    componentDidUpdate(){
        if(this.pageCheck()){
            let typedElement = document.getElementById("typingP");
            typedElement.innerHTML = "" 
            this.typing();
        }
        else{
            clearInterval();
        }
    }

    pageCheck(){
        if(this.props.count == 1){
            return true;
        }
        else{
            return false;
        }
      }

    async typing(){
        let typedElement = document.getElementById("typingP");
        typedElement.innerHTML = ""
        let array = ["ㅅ","스","스ㅌ","스트","스트ㄹ","스트리","스트리ㅁ","스트리머","스트리머 ㅇ","스트리머 야","스트리머 양","스트리머 양ㅇ","스트리머 양아","스트리머 양아ㅈ","스트리머 양아지"];
        let count = 0;

        await setTimeout(()=>{
            let interval = setInterval(() => {
                if(count > 14){
                    clearInterval(interval)
                    return;
                }
                typedElement.innerText = array[count];
                count++;
            }, 100);
        },800)


    }

}

export default StreamerInfo; 