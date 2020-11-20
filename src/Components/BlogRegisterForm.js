import React, { useState, useRef } from 'react'
import styled from 'styled-components';
import axios from 'axios';

const StyledBlogRegisterForm = styled.div`
	padding: 1rem;
	border: 1px solid rgba(9,81,105);
`

export function BlogRegisterForm({ setRegisterInput, formData, setMessages, user, loading, setJwt, setUser  }) {
	const formEl = useRef(null);

  return (
    <StyledBlogRegisterForm>
      Register Form
    </StyledBlogRegisterForm>
  );
}
