export function ProductsLoading() {
  return (
    <div className="h-screen text-white flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white">
        <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      {/* Spinner Ring */}
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-amber-100"></div>
        <div className="absolute inset-0 rounded-full border-4 border-amber-900 border-t-transparent animate-spin"></div>
      </div>

      {/* Loading Text */}
      <p className="text-sm font-medium animate-pulse">
        Loading products...
      </p>
    </div>
  );
}