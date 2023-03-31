import React from 'react';

import {
  NotFound as NotFoundView,
  NotFoundCover as NotFoundCoverView,
} from 'views';

const routes = [
  {
    path: '/not-found',
    renderer: (params = {}) => <NotFoundView {...params} />,
  },
  {
    path: '/not-found-cover',
    renderer: (params = {}) => <NotFoundCoverView {...params} />,
  },
];

export default routes;
