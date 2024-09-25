import { contactUsSource } from "../store/contactSource";

export function TitleComponent() {
    return (
      <div className="bg-white p-4 sm:h-400px sm:w-643px sm:px-10 sm:pt-9">
        <div>
          <div>
            <img className="w-12 h-12 md:ml-2 sm:w-20 sm:h-20" src="/assets/org_logo.jpg" alt="logo" />
          </div>
          <div className="font-extrabold text-primaryButton text-3xl sm:text-5xl leading-tight lg:text-5xl">
            SAK <br />Builders & Designers
          </div>
          <div className="font-semibold leading-5 w-full sm:mt-4 text-sm sm:text-base md:text-xl">
            Let's build your dreams together.
          </div>
        </div>
        <div>
          <button
            onClick={()=> window.location.href = contactUsSource}
            type="button"
            className="focus:outline-none text-white bg-primaryButton hover:bg-hoverColor focus:ring-2 focus:ring-focusColor font-medium text-sm sm:text-base px-6 py-3 sm:px-10 sm:py-4 mt-4 sm:mt-5">
            Contact Us
          </button>
        </div>
      </div>
    );
  }
  