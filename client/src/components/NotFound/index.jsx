import { Button, Result } from "antd";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Result
        status="404"
        title="Oops! Page Not Found"
        extra={
          <Link to={`/`}>
            <Button type="primary" size="large">
              Back to home
            </Button>
          </Link>
        }
      />
    </div>
  );
}
