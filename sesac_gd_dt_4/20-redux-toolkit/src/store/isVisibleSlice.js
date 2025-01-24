// ** 실습 **

import { createSlice } from '@reduxjs/toolkit';

// #1. 슬라이스 정의
const isVisibleSlice = createSlice({
    name: 'isVisible',
    initialState: true,
    reducers: {
        changeVisibility: (state) => !state,
    },
});

// 액션 생성자, 리듀서를 내보내기
export const { changeVisibility } = isVisibleSlice.actions;
export default isVisibleSlice.reducer; // 리듀서
