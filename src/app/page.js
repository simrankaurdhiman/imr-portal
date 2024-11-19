"use client";  // <-- Add this line to mark this as a client component

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

const Home = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: 'The Matrix', actors: ['Keanu Reeves', 'Laurence Fishburne'], releaseYear: 1999 },
    { id: 2, title: 'Inception', actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt'], releaseYear: 2010 },
  ]);

  const handleDelete = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-center text-3xl font-semibold my-4">Movie List</h1>

      <div className="flex justify-center mb-4">
        <Link href="/add" className="bg-blue-500 text-white py-2 px-4 rounded-md">Add Movie</Link>
      </div>

      <div className="max-w-4xl mx-auto">
        {movies.length === 0 ? (
          <p className="text-center">No movies available.</p>
        ) : (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id} className="border-b py-4 px-2">
                <h2 className="text-xl font-bold">{movie.title}</h2>
                <p className="text-gray-700">Actors: {movie.actors.join(', ')}</p>
                <p className="text-gray-700">Release Year: {movie.releaseYear}</p>
                <div className="mt-2">
                  <Link href={`/edit/${movie.id}`} className="text-blue-500 mr-4">Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(movie.id)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
