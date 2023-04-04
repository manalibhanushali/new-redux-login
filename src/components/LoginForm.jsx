import React, { useRef } from "react";

export default ({ submit, error }) => {
  const username = useRef(null);
  const password = useRef(null);

  const onSubmit = event => {
    event.preventDefault();
    submit({
      username: username.current.value,
      password: password.current.value
    });
  };

  return (
    <>
      {error ? <p>{error.message}</p> : null}
      <form onSubmit={onSubmit}>
        <input type="text" ref={username} placeholder="Username" />
        <input type="password" ref={password} placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
