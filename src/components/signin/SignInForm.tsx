import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";

import useSession from "@/hook/auth/useSession";

const formSchema = z.object({
  email: z.string().email({
    message: "올바른 이메일 주소를 입력해주세요.",
  }),
  password: z.string().min(8, { message: "비밀번호는 최소 8자 이상이어야 합니다." }),
});

export default function SignInForm() {
  const navigate = useNavigate();
  const [isShowPassword, isSetShowPassword] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { mutate: sessionMutate } = useSession();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const loginWithEmail = async (email: string, password: string) => {
    sessionMutate(
      { email, password },
      {
        onSuccess: async (data) => {
          navigate("/home");
        },
        onError: (error) => {
          // @ts-ignore
          if (error.code === "ERR_BAD_REQUEST") {
            form.setError("email", { type: "manual", message: "이메일 혹은 비밀번호를 확인해주세요." });
          }
        },
        onSettled: () => {
          setIsSubmitting(false);
        },
      }
    );
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    const password = values.password.trim();
    const email = values.email.trim();

    await loginWithEmail(email, password);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@domain.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input type={isShowPassword ? "text" : "password"} placeholder="password" {...field} />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                    onClick={() => isSetShowPassword(!isShowPassword)}
                  >
                    {isShowPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={!form.formState.isValid || isSubmitting}>
          Login
        </Button>
      </form>
    </Form>
  );
}
