import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Comment } from "entities/Comment";
import { getArticleDetailsData } from "entities/Article";
import { fetchCommentsByArticleId } from "../../services/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>("articleDetails/addCommentForArticle", async (text, thunkApi) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkApi;

    const userData = getUserAuthData(getState());
    const articleData = getArticleDetailsData(getState());

    if (!userData || !text || !articleData) {
        return rejectWithValue("no data");
    }

    try {
        const response = await extra.api.post<Comment>("/comments", {
            articleId: articleData.id,
            userId: userData.id,
            text,
        });

        if (!response.data) {
            throw new Error();
        }

        dispatch(fetchCommentsByArticleId(articleData.id));

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue("error");
    }
});
