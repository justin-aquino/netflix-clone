import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useBillboard = () => {
 const { data, error, isLoading } = useSWR("/api/random", fetcher, {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
 }); //only load when user visits page, and not whenever users lose focus on the window (switches to other tab, etc)

 return {
  data,
  error,
  isLoading,
 };
};

export default useBillboard;
