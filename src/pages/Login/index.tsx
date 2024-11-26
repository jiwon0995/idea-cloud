import LoginForm from "@/components/login/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="flex flex-col w-3/5 max-w-[500px] px-10 py-12 bg-white bg-opacity-30 rounded-2xl drop-shadow-lg">
        <h1 className="font-semibold text-4xl mb-10">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}
