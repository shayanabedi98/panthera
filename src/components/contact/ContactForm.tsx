"use client";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  async function handleSubmit(event: any) {
    event.preventDefault();

    const data: FormData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Sent successful!!!");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          minLength={1}
          maxLength={50}
          autoComplete="off"
          className="text-black"
          type="text"
          id="name"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">email</label>
        <input
          maxLength={50}
          minLength={5}
          autoComplete="off"
          className="text-black"
          type="email"
          id="email"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message">message</label>
        <textarea className="text-black" name="message" id="message" required></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
