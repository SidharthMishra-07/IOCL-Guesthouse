import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Reach out to us for any queries</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Send</button>
      </div>
    </div>
  )
}

export default MailList