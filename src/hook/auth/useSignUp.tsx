import { useMutation } from "@tanstack/react-query";
import { sessionApi, signUpApi } from "@/api/auth.api";

export default function useSignUp() {
  return useMutation({
    mutationFn: async ({
      email,
      name,
      password,
    }: {
      email: string;
      name: string;
      password: string;
    }): Promise<string> => {
      const response = await signUpApi(email, name, password);

      localStorage.setItem("token", response.data);

      return response.data;
    },
  });
}
