import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Text from '../../components/text';
import Tiles from '../../components/tiles';
import Image from '../../components/image';
import Link from '../../components/link';
import PageLoader from '../../components/pageloader';
import ErrorMessage from '../../components/error-message';
import Wrapper from '../../components/wrapper';

import { requestHome } from '../../redux/home/actions';
import homeSelectors from '../../redux/home/selectors';
import projectsSelectors from '../../redux/projects/selectors';
import {
  requestProjects,
  fetchProjectsReset
} from '../../redux/projects/actions';

import { routes } from '../../lib/constants';

import styles from './index.module.css';

export default () => {
  const dispatch = useDispatch();

  const {
    isInitial: isHomeInitial,
    isPending: isHomePending,
    hasError: hasHomeError
  } = useSelector(homeSelectors.getPredicate);

  const {
    isInitial: isProjectsInitial,
    isPending: isProjectsPending,
    hasError: hasProjectsError
  } = useSelector(projectsSelectors.getPredicate);

  const { description, heading } = useSelector(homeSelectors.getSimple);

  const projects = useSelector(projectsSelectors.getProjects);

  useEffect(() => {
    dispatch(requestHome());
    dispatch(requestProjects());
  }, [dispatch]);

  useEffect(
    () => () => {
      dispatch(fetchProjectsReset());
    },
    [dispatch]
  );

  if (hasHomeError || hasProjectsError) {
    return (
      <ErrorMessage>
        Oops, something went wrong with loading the homepage.
      </ErrorMessage>
    );
  }

  if (
    isHomeInitial ||
    isHomePending ||
    isProjectsInitial ||
    isProjectsPending
  ) {
    return <PageLoader />;
  }

  return (
    <div className={styles.home}>
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
    </div>
  );
};
