import { create } from 'zustand'

interface likeState{
    isLiked: boolean;
    setIsLiked: (isLiked: boolean) => void
}
export const useLikeStore = create<likeState>()((set) => ({
  isLiked: false, 
  setIsLiked: ( isLiked: boolean) => set({isLiked})
}))