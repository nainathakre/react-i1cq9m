import React from 'react';

function SignInForm() {
  return (
    <section>
      <section>
        <h2>Login</h2>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </section>
      <section>
        <input type="text" placeholder="first name" />
        <input type="password" placeholder="password" />
        <button>Login</button>
      </section>
    </section>
  );
}

export default SignInForm;
