"use client";

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <form>
        <div>
          <p>First Name:</p>
          <input type="text" placeholder="John" required />
        </div>
        <div>
          <p>Last Name:</p>
          <input type="text" placeholder="Doe" required />
        </div>
        <div>
          <p>Email:</p>
          <input type="email" placeholder="jdoe@test.com" required />
        </div>
        <div>
          <p>Message:</p>
          <textarea required />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
