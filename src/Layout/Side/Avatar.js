import React from 'react'

export const Avatar = ()=>{
	return(
        <div>
			<div className="avatar" style={{backgroundImage:"url(/images/avatar.jpg)"}} height={100}/>
			<h1>Wu Zhou</h1>
			<span className="title">Software Engineer in Singapore</span>
		</div>
	)
}