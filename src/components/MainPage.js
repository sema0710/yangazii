import React from 'react'

import { Title , Info , Link} from "../style/mainStyle"

class MainPage extends React.Component{
    render(){
        return(
            <div>
                <Title>Who is 양아지?</Title>
                <Info>개발 기간 : 10시간</Info>
                <Info>github : <Link href="https://github.com/sema0710" >https://github.com/sema0710</Link></Info>
                <Info>개발자 : sema0710</Info>
                <Info>email : pandati@naver.com</Info>
                <Info>stack : react , javascript , jsx , styled-components</Info>
                <Info>고등학생이라 많이 미흡합니다 ㅠㅜ 틀린 정보는 email로 보내주세요</Info>
                <Info>A,D 혹은 스크롤로 내려 주세요</Info>
            </div>
        )
    }
}

export default MainPage