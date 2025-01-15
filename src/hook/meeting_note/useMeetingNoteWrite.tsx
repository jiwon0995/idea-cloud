import { useMutation } from "@tanstack/react-query";
import { meetingNoteWriteApi } from "@/api/meeting_note.api";

export default function useMeetingNoteWrite() {
  return useMutation({
    mutationFn: async ({
      title,
      body,
      keywords,
    }: {
      title: string;
      body: string;
      keywords: { keyword: string; count: number }[];
    }): Promise<string> => {
      const response = await meetingNoteWriteApi(title, body, keywords);

      return response.data;
    },
  });
}
