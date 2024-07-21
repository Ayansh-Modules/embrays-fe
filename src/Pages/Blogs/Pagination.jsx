import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";
import { useBlogContext } from "../../Context/BlogContext";
function Pagination() {
  const { count, handleNext, handlePrevious } = useBlogContext();

  return (
    <div className="flex justify-center items-center ">
      <nav className="bg-gray-200 rounded-full px-4 ">
        <ul className="flex text-gray-600 gap-4 font-medium py-2">
          <li>
            {count > 0 && (
<a href="#">
<button
              
              onClick={() => {
                handlePrevious();
              }}
              className="rounded-full px-4 py-2 hover:bg-white text-gray-600 flex items-center justify-center"
            >
              <TbPlayerTrackPrevFilled className="mr-2" /> Previous
            </button>
</a>
              
            )}
          </li>

          <li>
            {count >= 0 && (
              <div className="rounded-full px-4 py-2 hover:bg-white hover:text-gray-600 transition duration-300 ease-in-out flex items-center justify-center">
                {count+1}
              </div>
            )}
          </li>
          <li>
          <a href="#">
          <button
              onClick={() => {
                handleNext()
              }}
              className="rounded-full px-8 py-2 hover:bg-white hover:text-gray-600 transition duration-300 ease-in-out flex items-center justify-center"
            >
              Next <TbPlayerTrackNextFilled className="ml-2" />
            </button>
          </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
