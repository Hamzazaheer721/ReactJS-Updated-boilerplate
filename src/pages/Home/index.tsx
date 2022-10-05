/* eslint-disable object-curly-newline */
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react/jsx-props-no-spreading */

import Loader from "components/Loader";
import { FC, lazy, memo, Suspense } from "react";

const LazyView = lazy(() => import("./view"));

const Home: FC = memo((props) => (
  <Suspense fallback={<Loader />}>
    <LazyView {...props} />
  </Suspense>
));

export default Home;
