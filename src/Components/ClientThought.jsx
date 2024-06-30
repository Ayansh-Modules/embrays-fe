import React from "react";
import { appData } from "../Data/AppData";
function ClientThought() {
  const data = appData.clientReview;
  return (
    <div>
      <div
        className="card "
        class="block max-w-sm p-6  border-2  rounded-2xl border-black hover:bg-gray-100  "
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-black">
          {data.allReviews[0].company}
        </h5>
        <p class="font-normal text-white-700 dark:text-white-400">
          {data.allReviews[0].review}
        </p>
      </div>
    </div>
  );
}

export default ClientThought;
