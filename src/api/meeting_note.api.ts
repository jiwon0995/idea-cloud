import { CommonResponse } from "@/types/common/api_response";
import api from "@/api/instance";

const PREFIX_PATH = "/api";

export const meetingNoteWriteApi = async (
  title: string,
  body: string,
  keywords: { keyword: string; count: number }[]
): Promise<CommonResponse<string>> => {
  return await api.post(`${PREFIX_PATH}/meeting-notes`, { title, body, keywords }).then((res) => res.data);
};
