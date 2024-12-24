"use-client";
import ClipLoader  from "react-spinners/ClipLoader";
const LoadingPage = () => {
    const override = {
        display: "block",
        margin:"100px auto"
    }
  return <ClipLoader className="#032b5e" cssOverride={override} size={150} aria-label="Loading spinner"/>;
};

export default LoadingPage;
