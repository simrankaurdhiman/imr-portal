import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">IMR Portal</Link>
      <Link href="/add" className="text-lg">Add Movie</Link>
    </nav>
  );
};

export default Navbar;
