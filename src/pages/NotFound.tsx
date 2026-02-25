import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log 404 errors in development only
    if (import.meta.env.DEV) {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 Page Not Found | Bhintuna House</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Bhintuna House homepage." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center pt-20">
          <div className="text-center px-4">
            <h1 className="mb-4 text-6xl md:text-8xl font-bold text-primary">404</h1>
            <p className="mb-2 text-2xl md:text-3xl font-heading text-navy">Page Not Found</p>
            <p className="mb-8 text-lg text-muted-foreground max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-gold-dark transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
