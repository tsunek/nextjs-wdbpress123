import { Error } from "@/components/atoms/Error";
import { RequireLogin } from "@/components/molecules/RequireLogin";
import {ErrorProps} from "next/error";

function AppError({statusCode, title}: ErrorProps){
  if (statusCode === 401) {
    return <RequireLogin />;
  }
  return <Error statusCode={statusCode} title={title} />
}

export default AppError;