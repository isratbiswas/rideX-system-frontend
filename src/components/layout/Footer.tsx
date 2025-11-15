const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 dark:bg-gray-900 dark:text-gray-400 py-6">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo & Name */}
        <div className="flex items-center gap-2">
          <img
            src="https://images-platform.99static.com//9wMmKJaFmUE1o63VZO7fgqxhOk8=/1083x2387:1929x3234/fit-in/500x500/99designs-contests-attachments/113/113769/attachment_113769214"
            alt="RideX Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-white font-bold text-xl">RideX</span>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-500 transition"
          >
            Facebook
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-500 transition"
          >
            Instagram
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-500 transition"
          >
            Twitter
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          &copy; 2025 RideX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
