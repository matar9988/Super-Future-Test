import {createSelector} from 'reselect';

export const postsDomain = (state) => state.posts;

export const dataSelector = createSelector(
    postsDomain,
    (domain) => domain.data
);

export const loadingSelector = createSelector(
    postsDomain,
    (domain) => domain.loading
);

export const errorSelector = createSelector(
    postsDomain,
    (domain) => domain.error
);

export const modalSelector = createSelector(
    postsDomain,
    (domain) => domain.isModalOpen
);

export const postSelector = createSelector(
    postsDomain,
    (domain) => domain.selectedPost
);

export const updatingSelector = createSelector(
    postsDomain,
    (domain) => domain.isUpdating
);

export const deletingSelector = createSelector(
    postsDomain,
    (domain) => domain.isDeleting
);

export const hasMoreSelector = createSelector(
    postsDomain,
    (domain) => domain.hasMore
);
