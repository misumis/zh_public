import React, { FunctionComponent } from 'react';

interface PinterestLayoutProps {
  children: React.ReactNode;
}

const styles = {
  pin_container: {
    margin: 0,
    padding: 0,
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, min(100%, 480px))',
    gridAutoRows: '12px',
    justifyContent: 'center',
  },
};

const PinterestLayout: FunctionComponent<PinterestLayoutProps> = ({
  children,
}) => {
  return <div style={styles.pin_container}>{children}</div>;
};

export default PinterestLayout;
