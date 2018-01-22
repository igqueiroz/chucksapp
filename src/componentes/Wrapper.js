import React from 'react'

export const Wrapper = ( { children } ) =>
	<div id="wrapper-box">
		{ children }
	</div>

export const Oooppsss404 = ( { location }) =>
	<div id="wrapper-box">
		<h1>Oooppsss, esta página está errada (404 Error)</h1>
		<p>Não achamos { location.pathname }</p>
	</div>