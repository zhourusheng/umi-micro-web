import React from 'react';
import styles from './index.less';

export default (props: any) => {
  return <div style={styles.container}>{props.children}</div>;
};
