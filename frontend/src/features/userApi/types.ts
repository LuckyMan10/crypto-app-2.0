export type watchList = {
  userId: string;
  watchList: Array<{
    id: string;
    name: string;
  }>;
};

export type initState = {
  isWatchListLoading: boolean;
  isWatchListError: boolean;
  isAddWatchListItemError: boolean;
  isRemoveWatchListItemError: boolean;
} & watchList;
