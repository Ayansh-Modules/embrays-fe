import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
function Pagination() {
  return (
    <div className="flex justify-center items-center ">
      <nav className="bg-gray-200 rounded-full px-4 ">
        <ul className="flex text-gray-600 gap-4 font-medium py-2">
          <li>
            <a href="#" className="rounded-full px-4 py-2 hover:bg-white text-gray-600 flex items-center justify-center"> 
            <TbPlayerTrackPrevFilled  className="mr-2"/> Previous
            </a>
          </li>
         
          <li>
            <a
              href="#"
              className="rounded-full px-4 py-2 hover:bg-white hover:text-gray-600 transition duration-300 ease-in-out flex items-center justify-center"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="rounded-full px-8 py-2 hover:bg-white hover:text-gray-600 transition duration-300 ease-in-out flex items-center justify-center"
            >
              Next <TbPlayerTrackNextFilled  className="ml-2"/>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
