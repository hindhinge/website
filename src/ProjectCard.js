import React, { Component} from 'react';
import './ProjectCard.css';
import logo_git from './img/logo_Github.png'



class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

        render() {
            const getParagraphs = (pararray) =>{
                const items = pararray.map((item)=><div key={item} style={{marginBottom:"20px"}}>{item}</div>);
                return(
                    <div className='paragraph'>
                    {items}
                    </div>
                )
            }

            const getImg = (imgarray) =>{
                const imgs = imgarray.map((item)=><img key={item} className="img" src={item}/>);
                return(
                    <div className='images'>
                    {imgs}
                    </div>
                )
            }

            
            const getImgLong = (imgarray) =>{
                const imgs = imgarray.map((item)=><img key={item} className="img_long" src={item}/>);
                return(
                    <div className='images'>
                    {imgs}
                    </div>
                )
            }
            const getImgSquare = (imgarray) =>{
                const imgs = imgarray.map((item)=><img key={item} className="img_square" src={item}/>);
                return(
                    <div className='images'>
                    {imgs}
                    </div>
                )
            }

            const getGithub = (link) =>{
                if (link!=""){
                    return(
                        <div className='gitlink'>
                        <a href={link}><img src={logo_git} className='gitlogo'/>Github</a>
                        </div>
                    )
                }

            }
            
            return (
                <div className='card_bg'>
                    {getParagraphs(this.props.text)}
                    {this.props.name === "ftp"?getImgLong(this.props.imgs):this.props.name=="antsim"?getImgSquare(this.props.imgs):getImg(this.props.imgs)}
                    {getGithub(this.props.github)}
                </div>
            );
          }
        }
        export default ProjectCard;