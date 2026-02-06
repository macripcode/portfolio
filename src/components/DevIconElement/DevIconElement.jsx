import "../../styles/deviconelement/deviconelement.css";

function DevIconElement({ icon }) {
  return (
    <div className="devicon-container">
      <i className={`${icon} colored`}></i>
    </div>
  );
}

export default DevIconElement;
