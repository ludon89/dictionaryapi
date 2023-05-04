import React, { useState } from "react";

function LoginForm ({ onSubmit }) {
  const [error, setError] = useState(null);

  function handleSubmit (event) {
    event.preventDefault();
    const { email, password } = event.target.elements;

    if (!email.value || !password.value) {
      setError("Please fill in both fields");
      return;
    }

    onSubmit({
      email: email.value,
      password: password.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email address:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      {error && (
        <div data-testid="error-message" style={{ color: "red" }}>
          {error}
        </div>
      )}
      <button type="submit">Log in</button>
    </form>
  );
}

export default LoginForm;