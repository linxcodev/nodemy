import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReactJson from 'react-json-view';
import uniqid from 'uniqid';

const StyledBlogs = styled.div`
border: 1rem solid rgba(1,1,1,1);
max-height: calc(100vh - 11rem);
overflow: scroll;

&::-webkit-scrollbar {
display: none;
}
-ms-overflow-style: none;  /* IE and Edge */
scrollbar-width: none;  /* Firefox */

.board-debugger {
	.debugger.active {
		width: 100%;
		height: auto;
		display: block;
	}
}
`;

import { useInputChange } from './useInputChange.js';

export function Blogs() {
	const [ jwt, setJwt ] = useState(null);
	const [ user, setUser ] = useState(null);
	const [ loading, setLoading ] = useState(true);

	const [ loginInput, setLoginInput] = useInputChange();
	const [ registerInput, setRegisterInput] = useInputChange();
	const [ updateUserInput, setUpdateUserInput] = useInputChange();

	const [ messages, setMessages ] = useState([]);

	/* System Admin stuff */
	const [ users, setUsers ] = useState(null);
	const [ selectedUser, setSelectedUser ] = useState(null);
	const [ selectedUserRole, setSelectedUserRole ] = useState('');

	// Profile
	const [ profile, setProfile ] = useState({
		name: '', alias: '', email: ''
	});

	/* System Categories */
	const [ categories, setCategories ] = useState([]);
	const [ selectedCategory, setSelectedCategory ] = useState('');

	const [ debug, setDebug ] = useState({
		'application-debugger': 'active',
	});

	return(
		<StyledBlogs>
			<div className="board-split-view">
				<div className="board-debugger">
					<div  className={`debugger ${debug['application-debugger']}`}><ReactJson src={{ user, profile, updateUserInput, loading, loginInput, registerInput, selectedCategory, categories }} collapsed={false} theme="apathy" /></div>
					<div  className={`debugger ${debug['users-debugger']}`}><ReactJson src={{ selectedUser, selectedUserRole, users }} collapsed={false} theme="apathy" /></div>
				</div>
				<div className="board-blocks-grid">
				</div>
			</div>

			<div className="board-actions">
				<i onClick={(e) => setDebug({'application-debugger': 'active'}) } className="fa fa-bug" style={{cursor: "pointer", fontSize: "35px"}}></i>
				<i onClick={(e) => setDebug({'users-debugger': 'active' })} className="fa fa-user" style={{cursor: "pointer", marginLeft: "5px", fontSize: "35px"}}></i>
			</div>
		</StyledBlogs>
	)
}
