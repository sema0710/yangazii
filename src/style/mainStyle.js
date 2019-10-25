import styled , {keyframes} from 'styled-components'

export const Main = styled.div`
    width:500vw;
    margin:0;
    padding:0;
    display:flex;
`
export const Page = styled.div`
    width:100vw;
    height : 100vh;
    background-color:${props=>props.color ? props.color : "white"};
    display:flex;
    justify-content:${props=>props.widthLineUp ? props.widthLineUp : ""};
    align-items:${props=>props.heightLineUp ? props.heightLineUp : ""};

`


const popup = keyframes`
    from{
        transform : translate(0,0px);
        opacity : 0.0;
    }

    50%{
        transform : translate(0,-50px);
        opacity : 1;
    }
    80%{
        transform : translate(0, -50px);
    }

    to{
        transform : translate(0,-230px);
        opacity : 1;
    }
`

const appear = keyframes`
    from{
        visibility : hidden
    }
    to{
        visibility : visible
    }

`

export const ProfileImg = styled.img`
    width:250px;
    height:250px;
    padding:30px;
    border-radius:150px;   
    /* margin-bottom:150px; */

`

export const ProfileInfo = styled.p`
    font-size:26px;
    color:black;
    font-family: 'Sunflower', sans-serif;
    /* animation : ${popup} 0.5s linear forwards; */
    padding:5px;
    cursor : pointer;
    `

export const PageWrapper = styled.div`
    overflow:hidden;
    `
export const StreamerIntroduceDiv = styled.div`
    width:310px;
    `

export const StreamerInfoDiv = styled.div`
    /* margin-bottom:30px; */
    `

export const Title = styled.p`
    font-size:60px;
    font-family: 'Sunflower', sans-serif;
    text-align: center;
    cursor : pointer;
    `

export const ProfileTitle = styled.p`
    font-size:30px;
    color:black;
    font-family : 'Sunflower' , sans-serif;
    text-align: center;
    cursor : pointer;
`
export const SubStreamerNameDiv = styled.div`
    display:${props => props.dis === 2 ? "display" : "none"};
    animation : ${popup} 2s linear forwards;
`

export const StreamerNameDiv = styled(SubStreamerNameDiv)`
    animation : none;
`


export const MoveTitle = styled(Title)`
cursor : pointer;
`

export const NamesWrapper = styled.div`
    width:90vw;
    display:flex;
    justify-content: space-around;
    margin-top:10vh;
    transform : translate(0,-150px);
`

export const Names = styled(ProfileTitle)`
    font-size:40px;
    width:120px;
    text-align : center;
    transform : translate(${props => props.left},${props => props.top});
    visibility :    hidden;
    animation:${appear} 5s linear forwards;
    animation-delay : ${props => props.time};
    cursor : pointer;
`

export const StreamermimDiv = styled.div`
`

export const StreamermimText = styled(ProfileInfo)`
    cursor: pointer;
    color : ${props => props.color ? props.color : "black"};
`

export const Explain = styled(ProfileInfo)`
transform:translate(0,30vh);
cursor : pointer;
`

export const StreamermimTitle = styled(Title)`
    cursor : pointer;
`

export const StreamermimTextDiv = styled.div`
    width:50vw;
`

export const StreamerDetailDiv = styled.div`

`

export const StreamerDetailText = styled(ProfileInfo)`
    cursor : pointer;
    width:60vw;
    text-align:center;
`

export const Info = styled(ProfileInfo)`
    font-size:17px;
`
export const Link = styled.a`
    color:black;
    text-decoration:none;
`