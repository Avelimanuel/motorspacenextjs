import Link from "next/link";

const Pagination = ({ page, pageSize, totalItems }) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <section className="container mx-auto flex justify-center items-center my-8">
      {page > 1 ? (
        <Link
          href={`/vehicles?page=${page - 1}`}
          className="px-4 py-2 mr-2 bg-blue-500 text-white font-medium rounded-md shadow hover:bg-blue-600 focus:ring focus:ring-blue-300 transition duration-300"
        >
          Previous
        </Link>
      ) : (
        <button
          disabled
          className="px-4 py-2 mr-2 bg-gray-300 text-gray-600 font-medium rounded-md shadow cursor-not-allowed"
        >
          Previous
        </button>
      )}

      <span className="mx-4 text-gray-700 font-semibold">
        Page <span className="text-blue-500">{page}</span> of{" "}
        <span className="text-blue-500">{totalPages}</span>
      </span>

      {page < totalPages ? (
        <Link
          href={`/vehicles?page=${page + 1}`}
          className="px-4 py-2 ml-2 bg-blue-500 text-white font-medium rounded-md shadow hover:bg-blue-600 focus:ring focus:ring-blue-300 transition duration-300"
        >
          Next
        </Link>
      ) : (
        <button
          disabled
          className="px-4 py-2 ml-2 bg-gray-300 text-gray-600 font-medium rounded-md shadow cursor-not-allowed"
        >
          Next
        </button>
      )}
    </section>
  );
};

export default Pagination;
