import AuthLayout from "../../layouts/AuthLayout";

export default function Logout() {
  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold text-center mb-6">You have been logged out</h2>
      <p className="text-center text-gray-500">
        Thank you for using our platform.{" "}
        <a href="/login" className="text-[#4B6EF5] hover:underline">
          Login again
        </a>
      </p>
    </AuthLayout>
  );
}
