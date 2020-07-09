import React, { Component} from 'react';
import './ProjectCard.css';


class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
        render() {
            return (
                <div className='card_bg'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus blandit enim, at luctus purus dictum sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam eget condimentum ipsum. Ut ultrices quis diam sit amet ultricies. Nullam porttitor felis malesuada, tempor neque eu, efficitur quam. Etiam in erat eget purus malesuada semper. Fusce at lorem lacinia, suscipit nulla volutpat, facilisis risus. Maecenas eros magna, iaculis ac hendrerit id, efficitur non elit. Nam placerat ultrices quam, nec ornare eros convallis ut. Mauris vel rutrum nibh. Aenean varius risus at nulla imperdiet ultrices.</p>
                    <p>Nullam vehicula malesuada mauris, at fringilla turpis malesuada nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent tempor tellus vel augue vulputate ornare. Suspendisse potenti. Nulla odio ipsum, luctus vitae vehicula id, efficitur vel lorem. Curabitur ut libero imperdiet, aliquet magna sed, aliquet leo. Etiam a lectus at tellus ultricies rhoncus sit amet quis elit. Mauris id neque in ante mattis malesuada quis id odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla non volutpat arcu, in aliquam est. Aliquam finibus, dui efficitur pulvinar gravida, nulla eros iaculis urna, ut maximus orci sem id nibh. Etiam eu feugiat purus. Ut in erat et eros ultricies consequat id id magna. Phasellus arcu velit, tincidunt et justo ut, efficitur porttitor quam.</p>
                </div>
            );
          }
        }
        export default ProjectCard;