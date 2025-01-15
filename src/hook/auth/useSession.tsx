import { useMutation } from "@tanstack/react-query";
import { sessionApi } from "@/api/auth.api";

export default function useSession() {
  return useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }): Promise<string> => {
      const response = await sessionApi(email, password);

      localStorage.setItem("token", response.accessToken);

      return response.accessToken;
    },
  });
}
