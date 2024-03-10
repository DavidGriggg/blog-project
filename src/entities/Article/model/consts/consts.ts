import {
    ArticleCodeBlock,
    ArticleImageBlock,
    ArticleTextBlock,
} from "@/entities/Article/model/types/article";

export enum ArticleSortField {
    VIEWS = "views",
    TITLE = "title",
    CREATED = "createdAt",
}

export enum ArticleBlockType {
    CODE = "CODE",
    IMAGE = "IMAGE",
    TEXT = "TEXT",
}

export type ArticleBlock =
    | ArticleCodeBlock
    | ArticleImageBlock
    | ArticleTextBlock;

export enum ArticleType {
    ALL = "ALL",
    IT = "IT",
    SCIENCE = "SCIENCE",
    ECONOMICS = "ECONOMICS",
    SPORTS = "SPORTS",
}

export enum ArticleView {
    BIG = "BIG",
    SMALL = "SMALL",
}
