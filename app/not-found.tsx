// app/not-found.tsx




import css from '@/app/Home.module.css';

import Link from "next/link";

const NotFound = () => {
  return (
    <div>

      {/* <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you&#39;re looking for doesn&#39;t exist.</p> */}

<h1 className={css.title}>404 - Page not found</h1>
<p className={css.description}>Sorry, the page you are looking for does not exist.</p>


      <Link href="/">Go back home</Link>
    </div>
  );
};

export default NotFound;


