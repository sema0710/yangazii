import React from 'react';
import StreamerIntroduce from './streamerIntroduce'
import Streamermim from './streamermim'
import StreamerInfo from './StreamerInfo'
import StreamerName from './SteramerName'
import StreamerDetail from './streamerDetail'
import MainPage from './MainPage'
import {Page, Main , PageWrapper} from '../style/mainStyle'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count : 0,
      pages : {},
      Info : false,
      mimData : "",
    }
  }

  render(){
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Sunflower:300&display=swap" rel="stylesheet"></link>
        <PageWrapper id="test">
          <Main>
              <Page color="rgb(238, 238, 238)" widthLineUp="center" heightLineUp="center" className="page">
                <MainPage></MainPage>
              </Page>

              <Page color="rgb(238, 238, 238)" widthLineUp="center" heightLineUp="center" className="page">
                <div>
                  <StreamerInfo count={this.state.count}></StreamerInfo>
                  <StreamerIntroduce></StreamerIntroduce>
                </div>
              </Page>

              <Page color="rgb(238, 238, 238)" widthLineUp="center" heightLineUp="center" className="page">
                <StreamerName count={this.state.count}></StreamerName>
              </Page>

              <Page color="rgb(238, 238, 238)" widthLineUp="center" heightLineUp="center" className="page">
                <Streamermim func={this.clickedMim}></Streamermim>
              </Page>

              <Page color="rgb(238, 238, 238)" widthLineUp="center" heightLineUp="center" className="page">
                <StreamerDetail data={this.state.mimData}></StreamerDetail>
              </Page>
          </Main>
        </PageWrapper>
      </div>
    );
  }

  clickedMim = (data)=>{
    this.setState({
      mimData : data,
      count : this.state.count + 1,
    })
    this.movePage(this.state.pages[this.state.count]);
    return 0;
  }

  componentDidMount(){
    this.setState({
      pages : {
        0 : document.getElementsByClassName("page")[0],
        1 : document.getElementsByClassName("page")[1],
        2 : document.getElementsByClassName("page")[2],
        3 : document.getElementsByClassName("page")[3],
        4 : document.getElementsByClassName("page")[4],
      }
    })
    document.addEventListener("mousewheel",this.scrolled)
    document.addEventListener("keypress",this.scrolled)
  }

  scrolled = (e)=>{
    this.changeState(e);
    this.movePage(this.state.pages[this.state.count])
  }

  movePage(element){
    element.scrollIntoView  ({behavior : "smooth"});
  }

  changeState = (e)=>{
    if(e.deltaY){
      if(e.deltaY > 0){
        if(this.state.count >= 4){
          this.setState({
            count : 0,
          })
        } 
        else{
          this.setState({
            count : this.state.count + 1,
          })
        }
      }
      else{
        if(this.state.count <= 0){
          return;
        } 
        else{
          this.setState({
            count : this.state.count - 1,
          })
        }
    }
    }
    else{
      if(e.key === 'a' || e.key === "A"){
        if(this.state.count <= 0){
          return;
        } 
        else{
          this.setState({
            count : this.state.count - 1,
          })
        }  
      }
      else if(e.key === "D" || e.key === "d"){
        if(this.state.count >= 4){
          this.setState({
            count : 0,
          })
        } 
        else{
          this.setState({
            count : this.state.count + 1,
          })
        }
      }
    }
    }

}

export default App;
