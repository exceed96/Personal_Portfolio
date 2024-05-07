import { create } from "zustand";
import { ProjectDataTypes } from "Types/ProjectType";

interface useModalStateProps {
  modalName: string | null;
  modalProps?: ProjectDataTypes;
  setModalName: (v: string | null) => void;
  setModalProps: (v: ProjectDataTypes) => void;
}

export const useModalState = create<useModalStateProps>((set) => ({
  modalName: null,
  setModalName: (modalName: string | null) => set({ modalName }),
  setModalProps: (modalProps: ProjectDataTypes) =>
    set({ modalProps: modalProps }),
}));
