import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";
import { ArticleDetailsRecommendationsSchema } from "@/pages/ArticleDetailsPage/model/types/ArticleDetailsRecommendationsSchema";
import { Article } from "@/entities/Article";
import { fetchArticleRecommendations } from "@/pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations";

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendations =
    recommendationsAdapter.getSelectors<StateSchema>(
        (state) =>
            state.articleDetailsPage?.recommendations ||
            recommendationsAdapter.getInitialState(),
    );

// @ts-ignore
const articleDetailsRecommendationsSlice = createSlice({
    name: "articleDetailsRecommendationsSlice",
    initialState:
        recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>(
            {
                isLoading: false,
                error: undefined,
                ids: [],
                entities: {},
            },
        ),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchArticleRecommendations.pending,
                (state: ArticleDetailsRecommendationsSchema) => {
                    state.error = undefined;
                    state.isLoading = true;
                },
            )
            .addCase(
                fetchArticleRecommendations.fulfilled,
                (state: ArticleDetailsRecommendationsSchema, action) => {
                    state.isLoading = false;
                    recommendationsAdapter.setAll(state, action.payload);
                },
            )
            .addCase(
                fetchArticleRecommendations.rejected,
                (state: ArticleDetailsRecommendationsSchema, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                },
            );
    },
});

export const { reducer: articleDetailsRecommendationsReducer } =
    articleDetailsRecommendationsSlice;
