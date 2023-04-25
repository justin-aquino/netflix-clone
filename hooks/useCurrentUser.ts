import useSwr from "swr";
import fetcher from "@/lib/fetcher";

const useCurrentUser = () => {
 const { data, error, isLoading, mutate } = useSwr("/api/current", fetcher); //useSWR is a fetcher, a state manager.
 return {
  data,
  error,
  isLoading,
  mutate,
 };
};

export default useCurrentUser;
