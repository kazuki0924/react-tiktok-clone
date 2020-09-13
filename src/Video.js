import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';

function Video() {
	const [playing, setPlaying] = useState(false);
	const videoRef = useRef(null);
	const onVideoPress = () => {
		if (playing) {
			videoRef.current.pause();
			setPlaying(false);
		} else {
			videoRef.current.play();
			setPlaying(true);
		}
	};

	return (
		<div className='video'>
			<video
				className='video__player'
				loop
				onClick={onVideoPress}
				ref={videoRef}
				src='https://v58.tiktokcdn.com/video/tos/alisg/tos-alisg-pve-0037/30ce27b135d54222ae2a2a483e62da47/?VExpiration=1599921014&VSignature=6zUXZPIMKUCt4E8mHA6mIw&a=1180&br=894&bt=447&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=20200912082947010234084153192653EC&lr=tiktok&mime_type=video_mp4&qs=0&rc=M25qcHlmdnl3dDMzPDgzM0ApZzM1NGYzOGU6NzZoZzdlZWdoLi9vMm9kNC9fLS02LzRzczReLV4yL19jLWAxMTJjY2I6Yw%3D%3D&vl=&vr='
			></video>
			<VideoFooter
				channel='test_channel'
				description='test_desc'
				song='test_song'
			/>
			<VideoSidebar />
		</div>
	);
}

export default Video;
