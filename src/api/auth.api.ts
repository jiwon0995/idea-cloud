import api from "@/api/instance";
import { CommonResponse } from "@/types/common/api_response";

const PREFIX_PATH = "/api";

export const sessionApi = async (email: string, password: string): Promise<CommonResponse<string>> => {
  return await api.post(`${PREFIX_PATH}/session`, { email, password }).then((res) => res.data);
};
