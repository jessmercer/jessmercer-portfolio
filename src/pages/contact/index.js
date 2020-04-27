import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ErrorMessage from '../../components/error-message';
import Loader from '../../components/loader';
import Link from '../../components/link';
import Text from '../../components/text';
import Wrapper from '../../components/wrapper';

import { requestContact } from '../../redux/contact/actions';

import styles from './index.module.css';

export default () => {
  const dispatch = useDispatch();
  const {
    isInitial: isContactInitial,
    isPending: isContactPending,
    hasError: hasContactError,
    data: contact
  } = useSelector(state => state.contact);

  useEffect(() => {
    dispatch(requestContact());
  }, [dispatch]);

  if (hasContactError) {
    return (
      <ErrorMessage>
        Oops, something went wrong with loading the contact page.
      </ErrorMessage>
    );
  }

  if (isContactInitial || isContactPending) {
    return <Loader />;
  }

  return (
    <div className={styles.contact}>
      <Wrapper>
        <div className={styles.description}>
          <Text style={Text.styles.large} dataId="description">
            {contact.acf.description}
          </Text>
        </div>
        <div>
          <div className={styles.number}>
            <Text style={Text.styles.medium} dataId="number">
              <Link to={`tel:${contact.acf.number}`} isAnchor>
                {contact.acf.number}
              </Link>
            </Text>
          </div>
          <div className={styles.email}>
            <Text style={Text.styles.medium} dataId="email">
              <Link to={'mailto:' + contact.acf.email} isAnchor>
                {contact.acf.email}
              </Link>
            </Text>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
