import React, { useState, useRef } from 'react'
import styled from 'styled-components';
import axios from 'axios';

const StyledBlogLoginForm = styled.div`
	padding: 1rem;
	border: 1px solid rgba(9,81,105);
`;

export function BlogLoginForm({ user, loading, setLoading, setLoginInput, formData, setMessages, setUser, setJwt }) {
	const formEl = useRef(null);

  return (
    <StyledBlogLoginForm>
      Login Form
    </StyledBlogLoginForm>
  );
}
