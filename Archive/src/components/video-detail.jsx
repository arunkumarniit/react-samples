import React from 'react';

class VideoDetail extends React.Component{
    
    constructor(props){
        super(props);
        this.state={};

    }
    render()
    {   const video=this.props.video;
       
        if(!video){
            return (<div>Loading.....</div>);
        }
        const videoId=video.id.videoId;
        const url=`https://www.youtube.com/embed/${videoId}`;

        return(
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" title={video.id.videoId} src={url}/>
                </div>
                <div className="details">
                    <div>{video.snippet.title}</div>
                    <div>{video.snippet.description}</div>
                </div>
            </div>
        );

    }


}

export default VideoDetail;