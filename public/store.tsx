import { create } from 'zustand'

interface postState{
    post: object;
    setPost: (post: object) => void
}

export const usePostStore = create<postState>()((set) => ({
  post: {}, 
  setPost: ( post : object) => set({post})
}))
