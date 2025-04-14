import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Protected(props) {
  const Cmp = props.Cmp; // ✅ Không dùng this
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('user-info')) {
      navigate("/register");
    }
  }, [navigate]);

  return (
    <div>
      <Cmp />
    </div>
  );
}

export default Protected;
