import pic from "../../../assets/logo-back.png";

function Logo({ className }) {
  return (
    <div className="logoContainer">
        <img className={ className } src={ pic } alt="logo de Voces Propias" />
    </div>
  )
}

export default Logo