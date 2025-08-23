import React from "react";
import logo from "./assets/logo_full.png";

const getColorClasses = (subject) => {
  const s = subject.toLowerCase();
  if (s.includes("biology")) {
    return "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 border-green-500 hover:bg-green-500 dark:hover:bg-green-300 dark:hover:text-green-900";
  }
  if (s.includes("physics")) {
    return "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 border-purple-500 hover:bg-purple-500 dark:hover:bg-purple-300 dark:hover:text-purple-900";
  }
  if (s.includes("science")) {
    return "bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300 border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-300 dark:hover:text-teal-900";
  }
  if (s.includes("maths")) {
    return "bg-yellow-300 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 border-yellow-500 hover:bg-yellow-500 dark:hover:bg-yellow-300 dark:hover:text-yellow-900";
  }
  return "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 border-blue-500 hover:bg-blue-500 dark:hover:bg-blue-300 dark:hover:text-blue-900";
};

const doubtSheets = [
  {
    title: "Movers 2",
    subjects: [
      { name: "Maths", url: "https://docs.google.com/spreadsheets/d/1WYYX-7UZML5_ofkkBAXGmqOdmFBDA4V_X8uxM-bCjX4/edit?gid=577063584#gid=577063584" },
      { name: "Science", url: "https://docs.google.com/spreadsheets/d/1JC-t9cXfZYzFlkslZi115dGJAZNjTNtXMcKYF4NYGyk/edit?gid=1084675973#gid=1084675973" },
    ],
  },
  {
    title: "Flyers 1",
    subjects: [
      { name: "Maths", url: "https://docs.google.com/spreadsheets/d/1HUG41Z_tXj0JnqxO7plsK8IlrwB2pCVkZOLm4Mxks7M/edit?gid=435680470#gid=435680470" },
      { name: "Physics", url: "https://docs.google.com/spreadsheets/d/1vNpTBmqq2hxEv0ntckr8XXmIe1Fj-BJjAGB4_mZuBmU/edit?gid=1722639122#gid=1722639122" },
    ],
  },
  {
    title: "Flyers 2",
    subjects: [
      { name: "Maths", url: "https://docs.google.com/spreadsheets/d/1Ep7f2lxlFgdKMMNtiqsTRrSVBvYsjp-xCF9W8Y3SrCs/edit?gid=1256190720#gid=1256190720" },
      { name: "Physics", url: "https://docs.google.com/spreadsheets/d/1yGXLWyyswKlq3hIS8cWaTXTyHQfxdG9_rvYM72U_3f8/edit?gid=710665859#gid=710665859" },
    ],
  },
];

const documentFolder = [
  {
    title: "Sprinters 1",
    subjects: [
      { name: "Maths", url: "https://drive.google.com/drive/folders/1PgAtgNHW5rjqV6lV6DDzuaUYgVBvUvbu?usp=drive_link" },
      { name: "Science", url: "https://drive.google.com/drive/folders/1WLUkZxeDr-x0vRC_QkeuFZIt_IK2cS7C?usp=drive_link" },
    ],
  },
  {
    title: "Sprinters 2",
    subjects: [
      { name: "Maths", url: "https://drive.google.com/drive/folders/1iyPldGgZobb9SA0Ycv0V1ddwRrf19xPZ?usp=drive_link" },
      { name: "Science", url: "https://drive.google.com/drive/folders/1ixARClHHgz3W_tLhyitLo6NSdHal4xnk?usp=drive_link" },
    ],
  },
  {
    title: "Sprinters 3",
    subjects: [
      { name: "Maths", url: "https://drive.google.com/drive/folders/1OA-C0yeOvkLUa5k2RVYWAL8HXcS5By61?usp=drive_link" },
      { name: "Science", url: "https://drive.google.com/drive/folders/1iG8ha0SSJHdP66vCL--CeHEmZnysuyGJ?usp=drive_link" },
    ],
  },
  {
    title: "Movers 1",
    subjects: [
      { name: "Maths", url: "https://drive.google.com/drive/folders/1g9wniASw_OGTLGli8LZjbbormw9yw3kr?usp=drive_link" },
      { name: "Science", url: "https://drive.google.com/drive/folders/1g9olRsitjgIN9N-lhYUOhHd1hj7EjbfQ?usp=drive_link" },
      { name: "Biology", url: "https://drive.google.com/drive/folders/1Q79hlO16BtNYDtzFnXP_U4gbF4PMWybt?usp=drive_link" },
    ],
  },
  {
    title: "Movers 2",
    subjects: [
      { name: "Maths", url: "https://drive.google.com/drive/folders/1LgyFsIUYpkhmyutF3pqp9SsBVLPLfNnr?usp=drive_link" },
      { name: "Science", url: "https://drive.google.com/drive/folders/1Pe-J6xge84xWNfz_CPOvebu78ufK2Eck?usp=drive_link" },
      { name: "Biology", url: "https://drive.google.com/drive/folders/1eujolK0-TiRvmGiSQFQQZ6jTNqxXuQq2?usp=drive_link" },
    ],
  },
  {
    title: "Flyers 1",
    subjects: [
      { name: "Maths", url: "https://drive.google.com/drive/folders/1AfH4BtW9FwrD3csXn5R0mR7fwS1VBoIn?usp=drive_link" },
      { name: "Physics", url: "https://drive.google.com/drive/folders/1kDEXZTW30Ubi2Axb56o5dThwmxIGnAAu?usp=drive_link" },
      { name: "Chemistry", url: "https://drive.google.com/drive/folders/1tOvpfBzP_xGiu3nY1hnVwpV8eyE2Zj37?usp=drive_link" },
    ],
  },
  {
    title: "Flyers 2",
    subjects: [
      { name: "Maths", url: "https://drive.google.com/drive/folders/1wCKzX49Vq6C-3KKsn978FjZ-CTntg3ng?usp=drive_link" },
      { name: "Physics", url: "https://drive.google.com/drive/folders/1ePeM_ELUC4G4kwJ1X2CmMWn15gxHfoXr?usp=drive_link" },
      { name: "Chemistry", url: "https://drive.google.com/drive/folders/1FmYCvHTBe59JOGG8UwrUpm1jspciBS0S?usp=drive_link" },
    ],
  },
];

export default function Resources() {
  return (
    <section>
      <div className="mx-auto px-4 py-4 mt-12 max-w-6xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[100px] bg-orange-300 opacity-40 rounded-b-full blur-2xl pointer-events-none z-0"></div>

        <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-2xl mb-10 flex flex-row items-center border-2 border-orange-200 dark:border-orange-500">
          <div className="flex items-center justify-center bg-white dark:bg-gray-800 bg-opacity-80 rounded-full shadow-md mr-8">
            <img src={logo} alt="logo" className="md:w-20 w-12" />
          </div>
          <div>
            <h1 className="md:text-5xl text-4xl font-bold mb-0 drop-shadow kollektif-font text-gray-900 dark:text-white">
              Educational Resources
            </h1>
            <p className="text-base text-gray-500 dark:text-gray-300 mt-2 font-medium futura-font">
              Explore quality guides, learning tools, and more below.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">Doubt Sheets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doubtSheets.map(({ title, subjects }, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white futura-font">{title}</h2>
              <div className="flex flex-wrap gap-2">
                {subjects.map(({ name, url }, idx) => (
                  <a
                    key={idx}
                    href={url}
                    className={`duration-300 ${getColorClasses(name)} hover:text-white hover:border-white py-1 px-6 rounded-md font-semibold futura-font`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-semibold my-8 text-gray-900 dark:text-white">Document Folder</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documentFolder.map(({ title, subjects }, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{title}</h2>
              <div className="flex flex-wrap gap-2">
                {subjects.map(({ name, url }, idx) => (
                  <a
                    key={idx}
                    href={url}
                    className={`duration-300 ${getColorClasses(name)} hover:text-white hover:border-white py-1 px-6 rounded-md font-semibold`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
