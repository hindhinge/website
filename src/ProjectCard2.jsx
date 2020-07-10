import React, { Component} from 'react';
import './ProjectCard.css';


class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

        render() {
            const getParagraph = (pararray) =>{
                return(
                    <p>{pararray}</p>
                )
            }
            return (
                <div className='card_bg'>
                    {getParagraph(this.props.github)}
                </div>
            );
          }
        }
        export default ProjectCard;