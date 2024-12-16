// 요청 인터셉터 설정
import api from "@/api/instance";

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // 로컬 스토리지에서 액세스 토큰 가져오기
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // 헤더에 토큰 추가
    }
    return config;
  },
  (error) => {
    // 요청 오류 처리
    return Promise.reject(error);
  }
);

// 응답 인터셉터 설정
api.interceptors.response.use(
  (response) => response, // 성공 응답 그대로 반환
  (error) => {
    // 토큰 만료 또는 인증 오류 처리
    if (error.response?.status === 401) {
      console.error("로그인 필요");
      // 로그아웃 처리 또는 리다이렉트
    }
    return Promise.reject(error);
  }
);

export default api;
