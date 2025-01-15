export const slateToMarkdown = (slateData: any): string => {
  return slateData
    .map((node: any) => {
      const { type, children } = node;

      // 각 블록에서 텍스트 추출
      const text = children.map((child: any) => child.text).join("");

      // 현재는 type이 "paragraph"만 있으므로, 텍스트 그대로 반환
      // 추가 처리 없이 마크다운 문법을 유지
      if (type === "paragraph") {
        return text;
      }

      // 예상치 못한 경우 기본적으로 텍스트 반환
      return text;
    })
    .join("\n"); // 각 블록은 줄바꿈으로 구분
};
