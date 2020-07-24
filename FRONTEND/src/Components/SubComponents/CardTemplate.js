import { useState } from "react";
import Transition from "./Transition.js";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative ...">
      <button type="button" onClick={() => setIsOpen(!isOpen)} className="...">
        Options
      </button>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
          <div className="rounded-md bg-white shadow-xs">{/* Snipped */}</div>
        </div>
      </Transition>
    </div>
  );
}


export default Dropdown