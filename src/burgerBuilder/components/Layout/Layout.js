import React from 'react';

import Aux from '../../hoc/Aux';
import styles from './Layout.module.css';

const layout = (props) => (
    <Aux>
        {/* later replace it with components */}
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={styles.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;