"use client"; // <-- Mark this as a client component to use hooks like useState

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [actors, setActors] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const router = useRouter();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate inputs
    if (!title || !actors || !releaseYear) {
      alert('Please fill in all fields');
      return;
    }

    // Log to the console for debugging
    console.log('Movie added:', { title, actors, releaseYear });

    // Normally, you'd add the movie to a state here or make an API call to save the movie.
    // For now, we'll just log and redirect.
    
    // Redirect to the home page after adding the movie
    router.push('/');
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-center text-3xl font-semibold my-4">Add Movie</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-100 p-6 rounded-md shadow-md">
        <div className="mb-4">
          <label className="block text-lg mb-2">Movie Title</label>
          <input
            type="text"
            placeholder="Enter movie title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-2">Actors (comma separated)</label>
          <input
            type="text"
            placeholder="Enter actors"
            value={actors}
            onChange={(e) => setActors(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-2">Release Year</label>
          <input
            type="number"
            placeholder="Enter release year"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md w-full">
          Add Movie
        </button>
      </form>

      <Footer />
    </div>
  );
};

export default AddMovie;
