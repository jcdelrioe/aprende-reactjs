import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchUsers } from '../services/users'
import { User } from '../types.d'

export const useUsers = () => {
  const { isLoading, isError, data, refetch, fetchNextPage, hasNextPage } =
    useInfiniteQuery<{ nextCursor?: number; users: User[] }>(
      ['users'],
      fetchUsers,
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
        refetchOnWindowFocus: false, // desactiva que se refrezque cada ves que se regresa a esa paginas
        // staleTime: Infinity,
        // staleTime: 1000 * 3,
      }
    )

  return {
    isLoading,
    isError,
    users: data?.pages.flatMap((page) => page.users) ?? [],
    refetch,
    fetchNextPage,
    hasNextPage,
  }
}
