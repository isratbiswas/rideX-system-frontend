import { Link } from "react-router";

const UnAuthorized = () => {
  return (
    <div>
      <h3>This is Unauthorized page</h3>
      <Link to="/">Home</Link>
    </div>
  );
};

export default UnAuthorized;
