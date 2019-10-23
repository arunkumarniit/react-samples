import React from 'react';

class VideoListItem extends React.Component{
    constructor(props){
        super(props);

        this.state={};
    }
    render(){
        const videos=this.props.video;
        const onVideoSelect=this.props.onVideoSelect;
        const imageUrl=videos.snippet.thumbnails.default.url;
            return(
                <li onClick={()=> onVideoSelect(videos)} className="list-group-item">
                    <div className="video-list media">
                        <div className="media-left">
                            <img className="media-object" alt=""  src={imageUrl}/>
                        </div>
                    </div>
                    <div className="media-body">
                    <div className="media-heading">{videos.snippet.title}</div>
                    </div>
                </li>
            )
    }

}
export default VideoListItem;