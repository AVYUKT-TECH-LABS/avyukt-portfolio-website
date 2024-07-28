import Image from "next/image";

function Timeline() {
  return (
    <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
      <div className="flex md:contents flex-row-reverse">
        <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto space-y-3">
          {/* <Image
            src="https://xstore.b-cdn.net/elementor/demos/business02/wp-content/uploads/sites/75/2022/04/Icon-2-1.png"
            width={100}
            height={100}
            alt=""
          /> */}
          <h3 className="text-lg font-semibold lg:text-xl">Analysis</h3>
          <p className="mt-2 leading-6">
            We study your requirement to the create the solution for needs.
          </p>
        </div>
        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
          <div className="flex items-center justify-center w-6 h-full">
            <div className="w-1 h-full bg-200 rounded-t-full"></div>
          </div>
          <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-200 rounded-full top-1/2"></div>
        </div>
      </div>

      <div className="flex md:contents">
        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
          <div className="flex items-center justify-center w-6 h-full">
            <div className="w-1 h-full bg-200"></div>
          </div>
          <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-200 rounded-full top-1/2"></div>
        </div>
        <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
          <h3 className="text-lg font-semibold lg:text-xl">Design</h3>
          <p className="mt-2 leading-6">
            We design intuitive interface which offering user best experience.
          </p>
        </div>
      </div>

      <div className="flex md:contents flex-row-reverse">
        <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
          <h3 className="text-lg font-semibold lg:text-xl">Development</h3>
          <p className="mt-2 leading-6">
            Be Web, iOS, Android, or all, we utilize to bring your product to
            new life.
          </p>
        </div>
        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
          <div className="flex items-center justify-center w-6 h-full">
            <div className="w-1 h-full bg-200 rounded-t-full"></div>
          </div>
          <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-200 rounded-full top-1/2"></div>
        </div>
      </div>

      <div className="flex md:contents">
        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
          <div className="flex items-center justify-center w-6 h-full">
            <div className="w-1 h-full bg-200"></div>
          </div>
          <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-200 rounded-full top-1/2"></div>
        </div>
        <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
          <h3 className="text-lg font-semibold lg:text-xl">Publishing</h3>
          <p className="mt-2 leading-6">
            We facilitate the website/app&apos;s launch to ensure your product reaches.
          </p>
        </div>
      </div>

      <div className="flex md:contents flex-row-reverse">
        <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
          <h3 className="text-lg font-semibold lg:text-xl">Support</h3>
          <p className="mt-2 leading-6">
            You will gets consistent technical support to maintain a solution.
          </p>
        </div>
        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
          <div className="flex items-center justify-center w-6 h-full">
            <div className="w-1 h-full bg-200 rounded-t-full"></div>
          </div>
          <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-200 rounded-full top-1/2"></div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
