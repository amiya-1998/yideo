import React from 'react';

const VideoDetail = ({ video }) => {
  return (
    <div>
      {video === null ? (
        <div>
          <div
            style={{
              display: 'flex',
              height: '461.5px',
              alignItems: 'center'
            }}
          >
            <div className="ui active centered inline loader" />
          </div>
          <div className="ui segment" style={{ height: '110px' }}>
            <div className="ui active loader" />
          </div>
        </div>
      ) : (
        <div>
          <div className="ui embed">
            <iframe
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title="Video Player"
            />
          </div>
          <div className="ui segment">
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoDetail;
