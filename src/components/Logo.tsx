import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link className="logo" to="/" aria-label="YiGraph 首页">
      <span className="logo-mark" aria-hidden="true"><img src={`${import.meta.env.BASE_URL}yigraph-logo.png`} alt="" /></span>
      <span className="logo-word">YiGraph</span>
    </Link>
  );
}
