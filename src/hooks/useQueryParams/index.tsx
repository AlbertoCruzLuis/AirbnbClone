/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import { useRouter } from "next/router";

export const useQueryParams = () => {
  const router = useRouter();

  return {
    query: router.query as Record<string, string>,
    setQuery: (
      value: Record<string, string | string[]>,
      pathname = router.pathname
    ) => {
      router.push({
        pathname,
        query: value,
      });
    },
    removeQueries: (keys: string[], options = { isRefresh: true }) => {
      const { query } = router;

      keys.forEach((key) => {
        delete query[key];
      });

      if (options.isRefresh) {
        router.push({
          pathname: router.pathname,
          query,
        });
      }
    },
    router,
  };
};
