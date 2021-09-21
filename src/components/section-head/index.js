import { Component, h } from 'preact';
import style from './style';

 const HeadBackground = ({title, classSection})=> {
	return <div className="section_head">
		<div className="section_head_title">{title}</div>
		<div className={`section_head_image ${classSection}`}></div>
	</div>
}

export default HeadBackground