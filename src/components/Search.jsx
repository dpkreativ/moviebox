import React from 'react';
import Modal from './Modal';

export default function Search() {
  // Search
  const [searchQuery, setSearchQuery] = useState('');
  const [{ results }, setSearchResults] = useState({ results: [] });

  const { ref, onOpen, onClose } = useModal();

  useEffect(() => {
    if (!searchQuery) return;

    async function search() {
      const data = await searchMovies(searchQuery);
      return data;
    }
    search().then((res) => setSearchResults(res));
  }, [searchQuery]);

  return (
    <div>
      <Modal ref={ref} onClose={onClose}>
        <div className="sticky top-0 z-50 bg-gray-800/75 rounded-b-xl flex">
          <form
            method="dialog"
            className="border-2 border-[#D1D5DB] bg-gray-800/75 rounded-md px-3 py-1 w-full max-w-[525px] mx-auto flex justify-between items-center"
          >
            <input
              type="text"
              name="query"
              className="bg-transparent placeholder:text-white/80 placeholder:text-xs outline-none w-full text-white"
              placeholder="What do you want to watch?"
              id="search"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <label htmlFor="search" className="text-white">
              <SearchIcon />
            </label>
          </form>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="text-white rounded-full w-max text-xs p-2"
          >
            <span>close search</span>
          </button>
        </div>

        <section className="my-10">
          <div className="grid gap-10 md:grid-cols-2">
            {results?.map((movie) => (
              <MovieCard
                id={movie.id}
                key={movie.id}
                title={movie.title}
                year={formatDate(movie.release_date)}
                imageUrl={`${config.images.secure_base_url}${config.images.poster_sizes[4]}${movie.poster_path}`}
              />
            ))}
          </div>
        </section>
      </Modal>
    </div>
  );
}
