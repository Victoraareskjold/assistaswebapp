import React from "react";

function Newsletter() {
  return (
    <div className="newsletterContainer">
      <input type="email" class="email-input" placeholder="e-postadresse" />
      <button type="submit" class="send-btn">
        Send
      </button>
    </div>
  );
}

export default Newsletter;
