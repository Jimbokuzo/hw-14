/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useDataPosts } from "./hooks";
import { PostList, PostSkeleton } from "./components";
import { Pagination } from "./components/Pagination";

export const HomeFeature = () => {
  const { posts, isLoading, OnChangePagination, pagination } = useDataPosts();

  return (
    <div>
      {isLoading ? <PostSkeleton /> : <PostList posts={posts} />}
      <div
        css={css`
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <Pagination onChange={OnChangePagination} pagination={pagination} />
      </div>
    </div>
  );
};
