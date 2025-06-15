export default function Error() {
  return (
    <div className="p-6 bg-red-100 rounded-lg shadow-md text-center">
      <h2 className="text-3xl font-bold text-red-800 mb-4">
        404 - Page Not Found
      </h2>
      <p className="text-red-700 text-lg">
        Oops! The page you are looking for does not exist.
      </p>
    </div>
  );
}
