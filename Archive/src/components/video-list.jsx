import React from 'react';
import VideoListItem from './video-list-item';

class VideoList extends React.Component{
    constructor(props){
        super(props);
        this.state={};

    }
     
    render(){
        const videoItems = this.props.videos.map((video) => {
            return <VideoListItem
                    onVideoSelect={this.props.onVideoSelect}
                    key={video.etag} video={video} /> 
        });
        return(
                <div>
                <ul className="col-md-4 list-group">
                   {videoItems}
                </ul>
                </div>
        );

    }


}
export default VideoList;
