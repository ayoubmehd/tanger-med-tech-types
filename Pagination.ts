interface Paginate<T> {
  data: T;
  prevPage: number | null;
  currentPage: number;
  nextPage: number | null;
}
