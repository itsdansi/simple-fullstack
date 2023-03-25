export default function EditButton() {
  return (
    <button className="font-bold py-2 px-4 rounded-lg mt-2 mr-1 bg-blue-500 hover:bg-blue-700 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-4 h-4">
        <path d="M13.89 3.39l2.71 2.72c.46.46.42 1.24.03 1.64l-8.01 8.02-5.56 1.16 1.16-5.58 8.02-8.01c.4-.39 1.18-.43 1.64-.03zm-2.52 2.52l-5.27 5.28 5.27 5.27v-10.55z" />
      </svg>
    </button>
  );
}

export function DeleteButton() {
  return (
    <button className=" font-bold py-2 px-4 mt-2 rounded-lg  bg-red-500 hover:bg-red-700 text-white ">
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        ></path>
      </svg>
    </button>
  );
}
