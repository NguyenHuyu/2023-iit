interface IQueryData {
  currentPage: string
  currentFilter: string
}

function usePushQuery({ currentPage, currentFilter }: IQueryData) {
  const queryParameters = {
    page: currentPage && `?page=${currentPage}`,
    filter: currentFilter && `filter=${currentFilter}`
  }
  const queryString = queryParameters.page || queryParameters.filter || '/'

  return { queryString }
}

export default usePushQuery
