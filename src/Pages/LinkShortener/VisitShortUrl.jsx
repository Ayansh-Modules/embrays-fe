import { useParams } from "react-router-dom";

function VisitShortUrl() {
  const { shortCode } = useParams();
  return (
    <div className="w-full h-[60vh] flex flex-col items-center justify-center">
      <div className="text-4xl max-md:text-3xl font-semibold text-Layoutblue mt-5 ">
        {!shortCode || shortCode === ""
          ? "Something went wrong"
          : "Redirecting..."}
      </div>
    </div>
  );
}

export default VisitShortUrl;
