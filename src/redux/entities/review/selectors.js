export const selectReviewModule = (state) => state.review;

export const selectReview = (state) => selectReviewModule(state).entities;

export const selectReviewById = (state, id) => selectReviewModule(state).entities[id];

export const selectReviewIds = (state) => selectReviewModule(state).ids;
