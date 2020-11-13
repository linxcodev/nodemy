import React, { useState} from 'react';
import styled from 'styled-components';

const StyledBlogs = styled.div`
`;

export function Blogs() {
	return(
		<StyledBlogs>
			<div className="board-split-view">
				<div className="board-debugger">
				</div>
				<div className="board-blocks-grid">
				</div>
			</div>

			<div className="board-actions">
			</div>
		</StyledBlogs>
	)
}
