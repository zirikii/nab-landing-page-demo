import { Link } from "react-router-dom";
import { hrefToPath, isInternalHref } from "../lib/routes.js";

// Renders an internal client-side <Link> for "*.html" hrefs and a plain <a> for
// external / anchor links. Forwards all other props (className, data-dl-id, etc.).
export default function SmartLink({ href, children, ...rest }) {
  if (isInternalHref(href)) {
    return (
      <Link to={hrefToPath(href)} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
