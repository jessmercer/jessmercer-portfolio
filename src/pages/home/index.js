import React from 'react';

import Text from '../../components/text';
import Tiles from '../../components/tiles';
import Image from '../../components/image';
import Link from '../../components/link';
import PageLoader from '../../components/pageloader';
import ErrorMessage from '../../components/error-message';
import Wrapper from '../../components/wrapper';

import homeSelectors from '../../lib/selectors/home';

import useQuery, { queryKeys } from '../../lib/hooks/use-query';

import { routes } from '../../lib/constants';

import styles from './index.module.css';

export default () => {
  const homeQuery = useQuery(queryKeys.home);
  const projectsQuery = useQuery(queryKeys.projects);
  const projects = projectsQuery.data || [];

  const { description, heading } = homeSelectors.getSimple(homeQuery.data);

  if (homeQuery.isError || projectsQuery.isError) {
    return (
      <ErrorMessage>
        Oops, something went wrong with loading the homepage.
      </ErrorMessage>
    );
  }

  if (homeQuery.isLoading || projectsQuery.isLoading) {
    return <PageLoader />;
  }

  return (
    <Wrapper>
      <div className={styles.description}>
        <Text style={Text.styles.medium} dataId="description">
          {description}
        </Text>
      </div>

      <div className={styles.pageHeading}>
        <Text
          element={Text.elements.h1}
          style={Text.styles.large}
          dataId="page-heading"
        >
          {heading}
        </Text>
      </div>

      <Tiles>
        {projects.map(({ slug, title, acf }) => {
          const titleRendered = title.rendered;

          return (
            <Tiles.Tile key={slug} dataId={slug}>
              <Link to={`${routes.project}/${slug}`}>
                <div>
                  <Image
                    src={acf.image.sizes.medium_large}
                    alt={titleRendered}
                    sources={[
                      {
                        srcSet: acf.image.sizes['post-thumbnail'],
                        width: acf.image.sizes['medium_large-width']
                      }
                    ]}
                  />
                </div>
                <div className={styles.projectTitle}>
                  <Text style={Text.styles.medium}>{titleRendered}</Text>
                </div>
              </Link>
            </Tiles.Tile>
          );
        })}
      </Tiles>
    </Wrapper>
  );
};
