/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, TextField } from "@mui/material";
import { useAddPost } from "../hooks";

interface Props {
  handleClose: () => void;
}

export const AddPostForm = ({ handleClose }: Props) => {
  const { onSubmitAddPost, errors } = useAddPost(handleClose);

  return (
    <form
      onSubmit={onSubmitAddPost}
      css={css`
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
      `}
    >
      <TextField
        error={errors.tags}
        name="tags"
        label="Tags"
        variant="standard"
      />
      <TextField
        error={errors.title}
        name="title"
        label="Title"
        variant="standard"
      />
      <Button
        css={css`
          background: black;
          :hover {
            background: #333333;
          }
        `}
        type="submit"
        variant="contained"
      >
        Create
      </Button>
    </form>
  );
};
