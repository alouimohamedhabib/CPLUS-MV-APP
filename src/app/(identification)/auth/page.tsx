
import AuthForm from "@/components/organisms/auth/AuthForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Page = () => {
  const cookieStore = cookies()
  if (cookieStore.has('passCode')) {
    redirect('/')
  }
  return (
    <AuthForm />
  );
};

export default Page;
