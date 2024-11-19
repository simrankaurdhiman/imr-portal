"use client"; // Mark this as a client component

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const EditMovie = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState({ title: '', actors: '', releaseYear: '' });
  const router = useRouter();

  useEffect(() => {
    // Mock fetching the movie data by ID (you'd normally fetch from a database)
    // In this case, we just simulate it.
    const fetchedMovie = { id, title: 'Inception', actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt', releaseYear: 2010 };
    setMovie(fetchedMovie);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!movie.title || !movie.actors || !movie.releaseYear) {
      alert('Please fill in all fields');
      return;
    }

    // Log the updated movie details (in a real app, you'd save this data somewhere)
    console.log('Updated Movie:', movie);

    // Redirect to home after updating
    router.push('/');
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-center text-3xl font-semibold my-4">Edit Movie</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-100 p-6 rounded-md shadow-md">
        <div className="mb-4">
          <label className="block text-lg mb-2">Movie Title</label>
          <input
            type="text"
            value={movie.title}
            onChange={(e) => setMovie({ ...movie, title: e.target.value })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-2">Actors (comma separated)</label>
          <input
            type="text"
            value={movie.actors}
            onChange={(e) => setMovie({ ...movie, actors: e.target.value })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-2">Release Year</label>
          <input
            type="number"
            value={movie.releaseYear}
            onChange={(e) => setMovie({ ...movie, releaseYear: e.target.value })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md w-full">
          Update Movie
        </button>
      </form>

      <Footer />
    </div>
  );
};

export default EditMovie;
