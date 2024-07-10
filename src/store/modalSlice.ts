// store/modalSlice.ts
import { Project } from '@/types/profile';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
   isOpen: boolean;
   content: Project | null;
}

const initialState: ModalState = {
   isOpen: false,
   content: null,
};

const modalSlice = createSlice({
   name: 'modal',
   initialState,
   reducers: {
      openModal(state) {
         state.isOpen = true;
      },
      closeModal(state) {
         state.isOpen = false;
      },
      setModalContent(state, action: PayloadAction<ModalState['content']>) {
         state.content = action.payload;
      },
   },
});

export const { openModal, closeModal, setModalContent } = modalSlice.actions;
export default modalSlice.reducer;
