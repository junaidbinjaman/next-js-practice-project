"use client";
import { type Post, postsAPI } from "@/lib/fetchAPI/post";
import { useQuery } from "@tanstack/react-query";

export function usePosts() {
  return useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: () => postsAPI.getAll(),
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
}

export function usePost(id: string) {
  return useQuery<Post, Error>({
    queryKey: ["post", id],
    queryFn: () => postsAPI.getById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
}
