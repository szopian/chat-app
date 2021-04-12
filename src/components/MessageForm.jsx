import { useState } from "react";

const MessageFrom = () => {
  const [value, setValue] = useState("");

  const handleChange () => {}

  const handleSubmit () => {}

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </form>
  );
};

export default MessageFrom;
