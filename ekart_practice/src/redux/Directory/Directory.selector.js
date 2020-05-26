import {createSelector} from 'reselect';

const selectdirectory = state =>
state.directory;

export const selectDirectorySection = createSelector(
    [selectdirectory],
    directory => directory.section
);